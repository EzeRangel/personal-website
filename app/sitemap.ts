import type { MetadataRoute } from "next";
import { site } from "@/config/site";
import { localePath, locales } from "@/lib/i18n";

export default function sitemap(): MetadataRoute.Sitemap {
  const languages = Object.fromEntries(locales.map((l) => [l, `${site.url}${localePath(l, "/")}`]));
  return locales.map((locale) => ({
    url: `${site.url}${localePath(locale, "/")}`,
    changeFrequency: "monthly",
    priority: 1,
    alternates: { languages: { ...languages, "x-default": `${site.url}/` } },
  }));
}
