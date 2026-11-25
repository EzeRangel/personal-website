import { localePath, type Locale, type Messages } from "@/lib/i18n";

export function navItems(locale: Locale, messages: Messages) {
  const { nav } = messages.global;
  return [
    { key: "work", label: nav.work, href: localePath(locale, "/work") },
    { key: "writing", label: nav.writing, href: localePath(locale, "/writing") },
    { key: "about", label: nav.about, href: localePath(locale, "/about") },
    { key: "contact", label: nav.contact, href: "#contact" },
  ];
}
