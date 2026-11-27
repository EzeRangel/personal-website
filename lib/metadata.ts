import type { Metadata } from "next";
import { site } from "@/config/site";
import { localePath, ogLocale, type Locale } from "@/lib/i18n";

type PageMetadataInput = {
  locale: Locale;
  path: string; // without the locale prefix: "/writing"
  title: string; // full title, used as is
  description: string;
  ogTitle?: string;
  type?: "website" | "article";
  // Locales the page exists in. Defaults to both; an English-only article passes ["en"].
  locales?: readonly Locale[];
  noindex?: boolean;
  publishedTime?: string;
  modifiedTime?: string;
};

// Title, description, canonical, hreflang, Open Graph and Twitter for one page.
export function pageMetadata(input: PageMetadataInput): Metadata {
  const { locale, path, title, description, ogTitle = title, type = "website", locales = ["en", "es"] } = input;
  const url = localePath(locale, path);
  const languages: Record<string, string> = Object.fromEntries(locales.map((l) => [l, localePath(l, path)]));
  if (locales.includes("en")) languages["x-default"] = localePath("en", path);
  const others = locales.filter((l) => l !== locale);

  return {
    title: { absolute: title },
    description,
    alternates: { canonical: url, languages },
    ...(input.noindex && { robots: { index: false, follow: true } }),
    openGraph: {
      type,
      url,
      siteName: site.name,
      title: ogTitle,
      description,
      locale: ogLocale[locale],
      ...(others.length > 0 && { alternateLocale: others.map((l) => ogLocale[l]) }),
      ...(input.publishedTime && { publishedTime: input.publishedTime }),
      ...(input.modifiedTime && { modifiedTime: input.modifiedTime }),
    },
    twitter: { card: "summary_large_image", title: ogTitle, description },
  };
}

// Dates as the brandbook writes them: "Dec 25, 2024" / "25 dic 2024".
const dateLocale: Record<Locale, string> = { en: "en-US", es: "es-MX" };

export function formatDate(date: Date, locale: Locale): string {
  const text = new Intl.DateTimeFormat(dateLocale[locale], { day: "numeric", month: "short", year: "numeric", timeZone: "UTC" }).format(date);
  return locale === "es" ? text.replace(/\./g, "").replace(/ de /g, " ") : text;
}

export function isoDate(date: Date): string {
  return date.toISOString().slice(0, 10);
}

// Articles older than two years show the aging notice. Evaluated when the page is built.
const twoYears = 2 * 365.25 * 24 * 60 * 60 * 1000;

export function isOlderThanTwoYears(date: Date): boolean {
  return Date.now() - date.getTime() > twoYears;
}
