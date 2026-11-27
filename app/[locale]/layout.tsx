import type { Metadata, Viewport } from "next";
import { notFound } from "next/navigation";
import { site } from "@/config/site";
import { Analytics } from "@/components/layout/Analytics";
import { CookieBanner } from "@/components/layout/CookieBanner";
import { LanguageSuggestion } from "@/components/layout/LanguageSuggestion";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SkipLink } from "@/components/layout/SkipLink";
import { ThemeScript } from "@/components/layout/ThemeScript";
import { fontVariables } from "@/lib/fonts";
import { getMessages, isLocale, localePath, locales, otherLocale } from "@/lib/i18n";
import "@/styles/globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
    apple: "/apple-icon.png",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#F3F1EC" },
    { media: "(prefers-color-scheme: dark)", color: "#0F0F11" },
  ],
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({ children, params }: LayoutProps<"/[locale]">) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const messages = getMessages(locale);
  const { global } = messages;
  const suggestion = getMessages(otherLocale(locale));

  return (
    <html
      lang={locale}
      className={fontVariables}
      data-theme="light"
      suppressHydrationWarning
    >
      <head>
        <ThemeScript />
      </head>
      <body>
        <div className="pg-root">
          <SkipLink label={global.skipToContent} />
          <SiteHeader locale={locale} messages={messages} />
          <main id="main">{children}</main>
          <SiteFooter locale={locale} messages={messages} />
        </div>
        <div className="er-notices">
          <LanguageSuggestion
            locale={locale}
            // Written in the language it invites to: whoever sees it prefers that language.
            text={suggestion.global.language.suggestion}
            linkLabel={suggestion.global.language.suggestionLink}
            closeLabel={suggestion.global.menu.close}
          />
          <CookieBanner privacyHref={localePath(locale, "/privacy")} labels={global.cookies} />
        </div>
        <Analytics gaId={site.gaMeasurementId} />
      </body>
    </html>
  );
}
