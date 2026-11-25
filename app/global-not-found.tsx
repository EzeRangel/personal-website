import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/config/site";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SkipLink } from "@/components/layout/SkipLink";
import { Cursor } from "@/components/ui/Cursor";
import { fontVariables } from "@/lib/fonts";
import { getMessages, localePath } from "@/lib/i18n";
import { themeScript } from "@/lib/theme";
import "@/styles/globals.css";

// Unmatched URLs land here with a real 404. The root layout sits under [locale], so this page
// can't know the visitor's language: it is in English with the Spanish line next to it.
export const metadata: Metadata = { title: { absolute: site.name }, robots: { index: false } };

export default function GlobalNotFound() {
  const en = getMessages("en");
  const es = getMessages("es");

  return (
    <html lang="en" className={fontVariables} data-theme="light" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>
        <div className="pg-root">
          <SkipLink label={en.global.skipToContent} />
          <SiteHeader locale="en" messages={en} />
          <main id="main">
            <div className="pg">
              <section className="er-not-found" aria-labelledby="not-found-title">
                <h1 className="er-h2" id="not-found-title">
                  {en.notFound.text}
                </h1>
                <p>
                  <Link className="er-logo" href={localePath("en", "/")}>
                    {site.name}
                    <Cursor />
                  </Link>
                </p>
                <p className="er-lead" lang="es">
                  {es.notFound.text}{" "}
                  <Link className="er-link" href={localePath("es", "/")} hrefLang="es">
                    {site.name}
                  </Link>
                </p>
              </section>
            </div>
          </main>
          <SiteFooter locale="en" messages={en} />
        </div>
      </body>
    </html>
  );
}
