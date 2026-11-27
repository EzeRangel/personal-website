"use client";

import { useEffect, useRef, useState } from "react";

type CodeBlockProps = {
  language: string | null;
  code: string;
  labels: { copy: string; copied: string; ariaLabel: string; announcement: string };
  children: React.ReactNode;
};

// Fenced code: language in mono on the bar, a Copy button that says "Copied" for 2 s and announces it.
export function CodeBlock({ language, code, labels, children }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
  useEffect(() => () => clearTimeout(timer.current), []);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(code);
    } catch {
      return;
    }
    setCopied(true);
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="wr-code">
      <div className="wr-code__bar">
        <span className="er-meta">{language ?? ""}</span>
        <button className="er-toggle" type="button" aria-label={labels.ariaLabel} onClick={copy}>
          {copied ? labels.copied : labels.copy}
        </button>
        <span className="er-sr" aria-live="polite">
          {copied ? labels.announcement : ""}
        </span>
      </div>
      <pre tabIndex={0}>{children}</pre>
    </div>
  );
}
