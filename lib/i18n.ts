import { en } from "@/messages/en";
import { es } from "@/messages/es";
import { site } from "@/config/site";

export type Locale = (typeof site.locales)[number];
export type Messages = typeof es;

export const locales = site.locales;
export const defaultLocale = site.defaultLocale;

const messages: Record<Locale, Messages> = { en, es };

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

export function getMessages(locale: Locale): Messages {
  return messages[locale];
}

export function otherLocale(locale: Locale): Locale {
  return locale === "en" ? "es" : "en";
}

// "en" is served without a prefix; slugs are the same in both languages.
export function localePath(locale: Locale, path = "/"): string {
  const clean = path === "/" ? "" : path;
  if (locale === defaultLocale) return clean || "/";
  return `/${locale}${clean}`;
}

export function format(template: string, values: Record<string, string | number>): string {
  return template.replace(/\{(\w+)\}/g, (match, key: string) =>
    key in values ? String(values[key]) : match,
  );
}

export const ogLocale: Record<Locale, string> = { en: "en_US", es: "es_MX" };
