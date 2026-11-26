"use client";

import { useLayoutEffect, useSyncExternalStore } from "react";
import { themeScript } from "@/lib/theme";

const subscribe = () => () => {};

function runThemeScript() {
  const script = document.createElement("script");
  script.text = themeScript;
  document.head.appendChild(script);
  script.remove();
}

// The inline theme script must be in the server HTML to set the theme before first paint. But React
// can't render a <script> on the client (it never runs, and React warns). That happens on a language
// switch: the [locale] root layout mounts or reappears on the client and <html> gets its server props
// back (data-theme="light", no data-theme-choice). So the tag is only kept while hydrating, and
// whenever <html> has lost the theme, the same code runs again before paint.
export function ThemeScript() {
  const hydrating = useSyncExternalStore(subscribe, () => false, () => true);

  useLayoutEffect(() => {
    if (!document.documentElement.hasAttribute("data-theme-choice")) runThemeScript();
  });

  return hydrating ? <script dangerouslySetInnerHTML={{ __html: themeScript }} /> : null;
}
