import { site } from "@/config/site";
import { getMessages, isLocale, locales } from "@/lib/i18n";
import { ogSize, renderOgImage } from "@/lib/og";

export const alt = site.name;
export const size = ogSize;
export const contentType = "image/png";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function OpengraphImage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const { meta } = getMessages(isLocale(locale) ? locale : "en");
  return renderOgImage({ label: meta.ogLabel, title: meta.ogTitle });
}
