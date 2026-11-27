import { Logo } from "@/components/ui/Logo";
import { MobileMenu } from "@/components/layout/MobileMenu";
import { NavLinks } from "@/components/layout/NavLinks";
import { ThemeSelect } from "@/components/layout/ThemeSelect";
import { navItems } from "@/components/layout/nav";
import { localePath, type Locale, type Messages } from "@/lib/i18n";

export function SiteHeader({ locale, messages }: { locale: Locale; messages: Messages }) {
  const { global } = messages;
  const items = navItems(locale, messages);
  const home = localePath(locale, "/");

  return (
    <div className="pg">
      <header className="er-header">
        <Logo href={home} />
        <nav className="er-nav" aria-label={global.navLabel}>
          <NavLinks items={items} />
        </nav>
        <div className="er-tools">
          <ThemeSelect labels={global.theme} />
          <MobileMenu homeHref={home} navLabel={global.navLabel} labels={global.menu} items={items} />
        </div>
      </header>
    </div>
  );
}
