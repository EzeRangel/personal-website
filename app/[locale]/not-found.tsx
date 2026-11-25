import { locale as rootLocale } from "next/root-params";
import { NotFoundView } from "@/components/layout/NotFoundView";
import { defaultLocale, isLocale } from "@/lib/i18n";

export default async function NotFound() {
  const value = await rootLocale();
  return <NotFoundView locale={value && isLocale(value) ? value : defaultLocale} />;
}
