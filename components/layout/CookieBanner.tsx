"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { closeCookieSettings, setConsent, useConsent, useCookieSettingsOpen } from "@/lib/consent";

type CookieBannerProps = {
  privacyHref: string;
  labels: { text: string; accept: string; decline: string; privacy: string; current: string };
};

// Shows until the visitor chooses. "Cookie settings" reopens it with the current choice marked
// (aria-pressed); Accept and Decline keep the same weight so the choice isn't nudged.
export function CookieBanner({ privacyHref, labels }: CookieBannerProps) {
  const consent = useConsent();
  const reopened = useCookieSettingsOpen();
  const region = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!reopened) return;
    region.current?.querySelector<HTMLButtonElement>("button")?.focus();
    const onKey = (event: KeyboardEvent) => event.key === "Escape" && closeCookieSettings();
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [reopened]);

  if (consent === "pending" || (consent !== "unset" && !reopened)) return null;

  const choice = (value: "granted" | "denied", label: string, variant: string) => (
    <button
      className={`er-btn ${variant}`}
      type="button"
      aria-pressed={reopened ? consent === value : undefined}
      onClick={() => setConsent(value)}
    >
      {label}
      {reopened && consent === value && <span className="er-sr"> ({labels.current})</span>}
    </button>
  );

  return (
    <div className="er-cookies" role="region" aria-label={labels.privacy} ref={region}>
      <div className="pg er-notice">
        <p>{labels.text}</p>
        <div className="er-notice__actions">
          {choice("granted", labels.accept, "er-btn--primary")}
          {choice("denied", labels.decline, "er-btn--secondary")}
          <Link className="er-link" href={privacyHref}>
            {labels.privacy}
          </Link>
        </div>
      </div>
    </div>
  );
}
