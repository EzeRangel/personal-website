"use client";

import Link from "next/link";
import { Suspense, useEffect, useState } from "react";
import { hasTranslation, useLocaleHref } from "@/components/layout/useLocaleHref";
import { otherLocale, type Locale } from "@/lib/i18n";

const KEY = "er-language-hint";

export function dismissLanguageHint() {
  try {
    window.localStorage.setItem(KEY, "dismissed");
  } catch {
    // Storage can be blocked; the hint may then show again on the next page.
  }
}

function preferredLocale(): Locale | null {
  for (const tag of navigator.languages ?? [navigator.language]) {
    const primary = tag.toLowerCase().split("-")[0];
    if (primary === "en" || primary === "es") return primary;
  }
  return null;
}

type LanguageSuggestionProps = {
  locale: Locale;
  text: string;
  linkLabel: string;
  closeLabel: string;
};

function LiveLanguageSuggestion({ locale, text, linkLabel, closeLabel }: LanguageSuggestionProps) {
  const target = otherLocale(locale);
  const href = useLocaleHref(target);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let dismissed = false;
    try {
      dismissed = window.localStorage.getItem(KEY) === "dismissed";
    } catch {}
    // Reads browser-only state after hydration; the static HTML never includes the hint.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    if (!dismissed && preferredLocale() === target && hasTranslation(target)) setVisible(true);
  }, [target]);

  if (!visible) return null;

  const close = () => {
    dismissLanguageHint();
    setVisible(false);
  };

  return (
    <div className="er-lang-hint">
      <div className="pg er-notice" role="region" aria-label={text}>
        <p>
          {text}{" "}
          <Link className="er-link" href={href} lang={target} hrefLang={target} onClick={dismissLanguageHint}>
            {linkLabel}
          </Link>
        </p>
        <button className="er-btn er-btn--secondary" type="button" onClick={close}>
          {closeLabel}
        </button>
      </div>
    </div>
  );
}

// Suggests the other language when the browser prefers it. Never redirects.
export function LanguageSuggestion(props: LanguageSuggestionProps) {
  return (
    <Suspense fallback={null}>
      <LiveLanguageSuggestion {...props} />
    </Suspense>
  );
}
