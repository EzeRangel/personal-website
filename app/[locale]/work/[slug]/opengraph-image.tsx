import { notFound } from "next/navigation";
import { getCase, getPublishedCases } from "@/lib/content";
import { getMessages, isLocale } from "@/lib/i18n";
import { ogSize, renderOgImage } from "@/lib/og";

export const alt = "Case study";
export const size = ogSize;
export const contentType = "image/png";

export function generateStaticParams({ params }: { params: { locale: string } }) {
  return isLocale(params.locale) ? getPublishedCases(params.locale).map((study) => ({ slug: study.slug })) : [];
}

export default async function OpengraphImage({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale, slug } = await params;
  if (!isLocale(locale) || !/^[a-z0-9-]+$/.test(slug)) notFound();
  const study = getCase(slug, locale);
  if (!study) notFound();
  return renderOgImage({ label: getMessages(locale).work.case.ogLabel, title: study.name });
}
