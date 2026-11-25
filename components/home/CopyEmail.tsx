"use client";

import { useEffect, useRef, useState } from "react";
import { track } from "@/lib/analytics";

type CopyEmailProps = {
  email: string;
  labels: { copy: string; copied: string; copyAriaLabel: string; copiedAnnouncement: string };
};

export function CopyEmail({ email, labels }: CopyEmailProps) {
  const [copied, setCopied] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  useEffect(() => () => clearTimeout(timer.current), []);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(email);
    } catch {
      return;
    }
    track("email_copy");
    setCopied(true);
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      <button className="er-btn er-btn--secondary" type="button" aria-label={labels.copyAriaLabel} onClick={copy}>
        {copied ? labels.copied : labels.copy}
      </button>
      <span className="er-sr" aria-live="polite">
        {copied ? labels.copiedAnnouncement : ""}
      </span>
    </>
  );
}
