import { notFound } from "next/navigation";
import { isLocale, locales } from "@/lib/i18n";
import { rssResponse } from "@/lib/rss";

// /es/rss.xml. The English feed is /rss.xml (app/rss.xml/route.ts).
export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function GET(_request: Request, { params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  return rssResponse(locale);
}
