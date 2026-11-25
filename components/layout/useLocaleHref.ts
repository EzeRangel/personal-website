"use client";

import { usePathname } from "next/navigation";
import { useSyncExternalStore } from "react";
import { localePath, type Locale } from "@/lib/i18n";

const subscribe = () => () => {};

// The proxy serves "/" from "/en", so the server-rendered pathname can differ from the browser's.
// Render the home of each locale first and switch to the real path once hydrated.
export function useLocaleHref(target: Locale): string {
  const pathname = usePathname();
  const hydrated = useSyncExternalStore(subscribe, () => true, () => false);
  if (!hydrated || !pathname) return localePath(target, "/");
  const rest = pathname.replace(/^\/(en|es)(?=\/|$)/, "") || "/";
  return localePath(target, rest);
}
