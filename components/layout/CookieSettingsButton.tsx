"use client";

import { openCookieSettings } from "@/lib/consent";

// Reopens the cookie notice. Used in the footer ("Cookie settings") and on /privacy ("Change cookie choice").
export function CookieSettingsButton({ className, children }: { className: string; children: React.ReactNode }) {
  return (
    <button className={className} type="button" onClick={openCookieSettings}>
      {children}
    </button>
  );
}
