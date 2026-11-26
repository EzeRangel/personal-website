"use client";

import { useEffect, useRef } from "react";
import { track } from "@/lib/analytics";

// Sends case_read once, when the reader reaches "04 Where it stands". track() is a no-op without consent.
export function CaseReadMarker({ project }: { project: string }) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element || !("IntersectionObserver" in window)) return;
    const observer = new IntersectionObserver((entries) => {
      if (entries.some((entry) => entry.isIntersecting)) {
        track("case_read", { project });
        observer.disconnect();
      }
    });
    observer.observe(element);
    return () => observer.disconnect();
  }, [project]);

  return <span ref={ref} aria-hidden="true" className="pg-case-marker" />;
}
