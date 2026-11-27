import { notFound } from "next/navigation";
import { articleSlugs, getArticle } from "@/lib/content";
import { getMessages, isLocale, otherLocale } from "@/lib/i18n";
import { ogSize, renderOgImage } from "@/lib/og";

export const alt = "Article";
export const size = ogSize;
export const contentType = "image/png";

export function generateStaticParams({ params }: { params: { locale: string } }) {
  return isLocale(params.locale) ? articleSlugs().map((slug) => ({ slug })) : [];
}

// Untranslated slugs in the other locale reuse the original's image.
export default async function OpengraphImage({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale, slug } = await params;
  if (!isLocale(locale)) notFound();
  const article = getArticle(slug, locale) ?? getArticle(slug, otherLocale(locale));
  if (!article) notFound();
  return renderOgImage({ label: getMessages(article.locale).writing.article.ogLabel, title: article.title });
}
