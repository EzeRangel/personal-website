"use client";

import Link from "next/link";
import { Suspense } from "react";
import { useLocaleHref } from "@/components/layout/useLocaleHref";
import { dismissLanguageHint } from "@/components/layout/LanguageSuggestion";
import { localePath, type Locale } from "@/lib/i18n";

type LanguageSwitchProps = {
  locale: Locale;
  groupLabel: string;
  switchAriaLabel: string;
};

type ViewProps = LanguageSwitchProps & { hrefs: Record<Locale, string> };

function LanguageSwitchView({ locale, groupLabel, switchAriaLabel, hrefs }: ViewProps) {
  return (
    <span className="er-toggle" role="group" aria-label={groupLabel}>
      {(["en", "es"] as const).map((code, index) => (
        <span key={code} style={{ display: "contents" }}>
          {index > 0 && <span aria-hidden="true">/</span>}
          {code === locale ? (
            <Link href={hrefs[code]} aria-current="true">
              {code.toUpperCase()}
            </Link>
          ) : (
            <Link href={hrefs[code]} lang={code} aria-label={switchAriaLabel} onClick={dismissLanguageHint}>
              {code.toUpperCase()}
            </Link>
          )}
        </span>
      ))}
    </span>
  );
}

function LiveLanguageSwitch(props: LanguageSwitchProps) {
  const hrefs = { en: useLocaleHref("en"), es: useLocaleHref("es") };
  return <LanguageSwitchView {...props} hrefs={hrefs} />;
}

export function LanguageSwitch(props: LanguageSwitchProps) {
  const homes = { en: localePath("en", "/"), es: localePath("es", "/") };
  return (
    <Suspense fallback={<LanguageSwitchView {...props} hrefs={homes} />}>
      <LiveLanguageSwitch {...props} />
    </Suspense>
  );
}
