"use client";

import { sendGAEvent } from "@next/third-parties/google";

export type AnalyticsEvent = "email_click" | "email_copy" | "social_click" | "case_open" | "article_read";

let enabled = false;

export function setAnalyticsEnabled(value: boolean) {
  enabled = value;
}

export function track(event: AnalyticsEvent, params: Record<string, string> = {}) {
  if (!enabled) return;
  sendGAEvent("event", event, params);
}
