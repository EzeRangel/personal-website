import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { NotFoundView } from "@/components/layout/NotFoundView";
import { getMessages, isLocale } from "@/lib/i18n";

// The 410 page. proxy.ts serves it with status 410 for every retired URL; on its own it's noindex
// and out of the sitemap.
export async function generateMetadata({ params }: PageProps<"/[locale]/retired">): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  return { title: { absolute: getMessages(locale).retired.seoTitle }, robots: { index: false, follow: true } };
}

export default async function RetiredPage({ params }: PageProps<"/[locale]/retired">) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  return <NotFoundView locale={locale} kind="410" />;
}
