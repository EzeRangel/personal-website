import Link from "next/link";
import { cacheLife } from "next/cache";
import { site } from "@/config/site";
import { socialLinks } from "@/lib/social";
import { Cursor } from "@/components/ui/Cursor";
import { CookieSettingsButton } from "@/components/layout/CookieSettingsButton";
import { navItems } from "@/components/layout/nav";
import { localePath, type Locale, type Messages } from "@/lib/i18n";

async function buildYear() {
  "use cache";
  cacheLife("max");
  return new Date().getFullYear();
}

export async function SiteFooter({ locale, messages }: { locale: Locale; messages: Messages }) {
  const { footer, navLabel } = messages.global;
  const year = await buildYear();

  return (
    <div className="pg pg-footer">
      <footer className="pg-foot">
        <div className="pg-foot-top">
          <span className="er-logo er-logo--lg" aria-hidden="true">
            E<Cursor />
          </span>
          <p className="er-small">{footer.builtIn}</p>
        </div>
        <div className="pg-foot-links">
          <nav className="pg-foot-col" aria-label={navLabel}>
            {navItems(locale, messages).map((item) => (
              <Link key={item.key} className="pg-foot-link" href={item.href}>
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="pg-foot-col">
            {socialLinks.map((item) => (
              <a
                key={item.network}
                className="pg-foot-link"
                href={item.href}
                rel="me"
                data-track="social_click"
                data-track-network={item.network}
              >
                {item.label}
              </a>
            ))}
          </div>
          <div className="pg-foot-col">
            <Link className="pg-foot-link" href={localePath(locale, "/privacy")}>
              {footer.privacy}
            </Link>
            <a className="pg-foot-link" href={locale === "en" ? "/rss.xml" : `/${locale}/rss.xml`} type="application/rss+xml">
              {footer.rss}
            </a>
            <CookieSettingsButton className="pg-foot-link pg-foot-button">{footer.cookieSettings}</CookieSettingsButton>
          </div>
        </div>
        <p className="er-small er-tabular pg-foot-copy">
          © {year} {site.name}
        </p>
      </footer>
    </div>
  );
}
