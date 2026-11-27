import type { MetadataRoute } from "next";
import { site } from "@/config/site";
import { getPublishedCases } from "@/lib/content";
import { localePath, locales } from "@/lib/i18n";

function entry(path: string, extra: Partial<MetadataRoute.Sitemap[number]>): MetadataRoute.Sitemap {
  const languages = Object.fromEntries(locales.map((l) => [l, `${site.url}${localePath(l, path)}`]));
  return locales.map((locale) => ({
    url: `${site.url}${localePath(locale, path)}`,
    alternates: { languages: { ...languages, "x-default": `${site.url}${localePath("en", path)}` } },
    ...extra,
  }));
}

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    ...entry("/", { changeFrequency: "monthly", priority: 1 }),
    ...entry("/work", { changeFrequency: "monthly", priority: 0.9 }),
    ...getPublishedCases("en").flatMap((study) =>
      entry(`/work/${study.slug}`, { lastModified: study.updated, changeFrequency: "monthly", priority: 0.8 }),
    ),
  ];
}
