import { getMessages, isLocale, locales } from "@/lib/i18n";
import { ogSize, renderOgImage } from "@/lib/og";

export const alt = "Writing";
export const size = ogSize;
export const contentType = "image/png";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function OpengraphImage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const { ogLabel, title } = getMessages(isLocale(locale) ? locale : "en").writing.index;
  return renderOgImage({ label: ogLabel, title });
}
