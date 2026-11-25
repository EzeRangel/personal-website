"use client";

import Link from "next/link";
import { setConsent, useConsent } from "@/lib/consent";

type CookieBannerProps = {
  privacyHref: string;
  labels: { text: string; accept: string; decline: string; privacy: string };
};

export function CookieBanner({ privacyHref, labels }: CookieBannerProps) {
  const consent = useConsent();
  if (consent !== "unset") return null;

  return (
    <div className="er-cookies" role="region" aria-label={labels.privacy}>
      <div className="pg er-notice">
        <p>{labels.text}</p>
        <div className="er-notice__actions">
          <button className="er-btn er-btn--primary" type="button" onClick={() => setConsent("granted")}>
            {labels.accept}
          </button>
          <button className="er-btn er-btn--secondary" type="button" onClick={() => setConsent("denied")}>
            {labels.decline}
          </button>
          <Link className="er-link" href={privacyHref}>
            {labels.privacy}
          </Link>
        </div>
      </div>
    </div>
  );
}
