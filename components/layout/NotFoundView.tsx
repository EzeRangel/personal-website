import Link from "next/link";
import { site } from "@/config/site";
import { Cursor } from "@/components/ui/Cursor";
import { getMessages, localePath, type Locale } from "@/lib/i18n";

export function NotFoundView({ locale }: { locale: Locale }) {
  const { notFound } = getMessages(locale);
  return (
    <div className="pg">
      <section className="er-not-found" aria-labelledby="not-found-title">
        <h1 className="er-h2" id="not-found-title">
          {notFound.text}
        </h1>
        <p>
          <Link className="er-logo" href={localePath(locale, "/")}>
            {site.name}
            <Cursor />
          </Link>
        </p>
      </section>
    </div>
  );
}
