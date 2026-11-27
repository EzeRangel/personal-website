"use client";

import { useEffect, useRef } from "react";
import { track, type AnalyticsEvent } from "@/lib/analytics";

// Sends `event` once, when the marker scrolls into view. track() is a no-op without consent.
export function ReadMarker({ event, params, className }: { event: AnalyticsEvent; params: Record<string, string>; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const key = JSON.stringify(params);

  useEffect(() => {
    const element = ref.current;
    if (!element || !("IntersectionObserver" in window)) return;
    const observer = new IntersectionObserver((entries) => {
      if (entries.some((entry) => entry.isIntersecting)) {
        track(event, JSON.parse(key));
        observer.disconnect();
      }
    });
    observer.observe(element);
    return () => observer.disconnect();
  }, [event, key]);

  return <span ref={ref} aria-hidden="true" className={className} />;
}
