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
  memory = value;
  listeners.forEach((listener) => listener());
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
