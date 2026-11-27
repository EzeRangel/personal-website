"use client";

import { useEffect } from "react";
import { GoogleAnalytics } from "@next/third-parties/google";
import { useConsent } from "@/lib/consent";
import { setAnalyticsEnabled, track, type AnalyticsEvent } from "@/lib/analytics";

// Elements opt in with data-track="<event>" and data-track-<param>="<value>".
function onClick(event: MouseEvent) {
  const element = (event.target as Element | null)?.closest<HTMLElement>("[data-track]");
  if (!element) return;
  const params: Record<string, string> = {};
  for (const [key, value] of Object.entries(element.dataset)) {
    if (key.startsWith("track") && key !== "track" && value !== undefined) {
      params[key.slice(5).toLowerCase()] = value;
    }
  }
  track(element.dataset.track as AnalyticsEvent, params);
}

export function Analytics({ gaId }: { gaId: string }) {
  const consent = useConsent();
  const enabled = consent === "granted" && gaId !== "";

  useEffect(() => {
    setAnalyticsEnabled(enabled);
    if (!enabled) return;
    document.addEventListener("click", onClick, { capture: true });
    return () => document.removeEventListener("click", onClick, { capture: true });
  }, [enabled]);

  return enabled ? <GoogleAnalytics gaId={gaId} /> : null;
}
