"use client";

import { useSyncExternalStore } from "react";

export type Consent = "granted" | "denied" | "unset";

const KEY = "er-consent";
const listeners = new Set<() => void>();

function read(): Consent {
  try {
    const value = window.localStorage.getItem(KEY);
    return value === "granted" || value === "denied" ? value : "unset";
  } catch {
    return "unset";
  }
}

export function setConsent(value: Exclude<Consent, "unset">) {
  try {
    window.localStorage.setItem(KEY, value);
  } catch {
    // Storage can be blocked; the choice then lasts for this page view only.
  }
  const withdrawn = (memory ?? read()) === "granted" && value === "denied";
  memory = value;
  settingsOpen = false;
  if (withdrawn) clearAnalyticsCookies();
  listeners.forEach((listener) => listener());
}

// Withdrawing consent: stop gtag for this page view and delete the _ga cookies it set.
function clearAnalyticsCookies() {
  const id = process.env.NEXT_PUBLIC_GA_ID;
  if (id) (window as unknown as Record<string, boolean>)[`ga-disable-${id}`] = true;
  const host = window.location.hostname;
  const domains = ["", host, `.${host}`, `.${host.split(".").slice(-2).join(".")}`];
  for (const cookie of document.cookie.split(";")) {
    const name = cookie.split("=")[0].trim();
    if (!/^_ga(_|$)/.test(name)) continue;
    for (const domain of domains) {
      document.cookie = `${name}=; Max-Age=0; path=/${domain ? `; domain=${domain}` : ""}`;
    }
  }
}

// "Cookie settings" (footer) and "Change cookie choice" (/privacy) reopen the notice.
let settingsOpen = false;

export function openCookieSettings() {
  settingsOpen = true;
  listeners.forEach((listener) => listener());
}

export function closeCookieSettings() {
  settingsOpen = false;
  listeners.forEach((listener) => listener());
}

export function useCookieSettingsOpen(): boolean {
  return useSyncExternalStore(
    subscribe,
    () => settingsOpen,
    () => false,
  );
}

let memory: Consent | null = null;

function subscribe(listener: () => void) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

// "pending" on the server and during hydration, so nothing consent-dependent renders in the static HTML.
export function useConsent(): Consent | "pending" {
  return useSyncExternalStore(
    subscribe,
    () => memory ?? read(),
    () => "pending",
  );
}
