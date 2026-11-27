import { locale as rootLocale } from "next/root-params";
import { NotFoundView } from "@/components/layout/NotFoundView";
import { defaultLocale, getMessages, isLocale } from "@/lib/i18n";

export default async function NotFound() {
  const value = await rootLocale();
  const locale = value && isLocale(value) ? value : defaultLocale;
  return (
    <>
      <title>{getMessages(locale).notFound.seoTitle}</title>
      <NotFoundView locale={locale} />
    </>
  );
}
