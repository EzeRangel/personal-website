import type { MetadataRoute } from "next";
import { site } from "@/config/site";
import { articleSlugs, getArticle, getPublishedCases } from "@/lib/content";
import { localePath, locales, type Locale } from "@/lib/i18n";

// One entry per existing language version, each listing its alternates. /privacy, 404 and 410 are noindex.
function entry(path: string, extra: Partial<MetadataRoute.Sitemap[number]>, available: readonly Locale[] = locales): MetadataRoute.Sitemap {
  const languages: Record<string, string> = Object.fromEntries(available.map((l) => [l, `${site.url}${localePath(l, path)}`]));
  if (available.includes("en")) languages["x-default"] = `${site.url}${localePath("en", path)}`;
  return available.map((locale) => ({
    url: `${site.url}${localePath(locale, path)}`,
    alternates: { languages },
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
    ...entry("/writing", { changeFrequency: "monthly", priority: 0.7 }),
    ...articleSlugs().flatMap((slug) => {
      const available = locales.filter((l) => getArticle(slug, l));
      const article = getArticle(slug, available[0])!;
      return entry(`/writing/${slug}`, { lastModified: article.updated ?? article.date, changeFrequency: "yearly", priority: 0.6 }, available);
    }),
    ...entry("/about", { changeFrequency: "yearly", priority: 0.6 }),
  ];
}
