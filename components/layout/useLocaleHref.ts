"use client";

import { usePathname } from "next/navigation";
import { useSyncExternalStore } from "react";
import { localePath, type Locale } from "@/lib/i18n";

const subscribe = () => () => {};

// A page that lists hreflang alternates but none for `target` has no translation (e.g. an
// English-only article). Pages without alternates (404, 410) count as translated.
export function hasTranslation(target: Locale): boolean {
  const alternates = document.querySelectorAll('link[rel="alternate"][hreflang]:not([hreflang="x-default"])');
  if (alternates.length === 0) return true;
  return [...alternates].some((link) => link.getAttribute("hreflang") === target);
}

// The proxy serves "/" from "/en", so the server-rendered pathname can differ from the browser's.
// Render the home of each locale first and switch to the real path once hydrated. Without a
// translation, go to the parent page instead (/writing/x → /es/writing).
export function useLocaleHref(target: Locale): string {
  const pathname = usePathname();
  const hydrated = useSyncExternalStore(subscribe, () => true, () => false);
  if (!hydrated || !pathname) return localePath(target, "/");
  const rest = pathname.replace(/^\/(en|es)(?=\/|$)/, "") || "/";
  if (!hasTranslation(target)) return localePath(target, rest.replace(/\/[^/]+$/, "") || "/");
  return localePath(target, rest);
}
