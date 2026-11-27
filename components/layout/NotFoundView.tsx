import Link from "next/link";
import { site } from "@/config/site";
import { getMessages, localePath, type Locale } from "@/lib/i18n";

// 404 and 410 share this view: code label, h1 with the cursor, three useful links and the email.
export function NotFoundView({ locale, kind = "404", children }: { locale: Locale; kind?: "404" | "410"; children?: React.ReactNode }) {
  const { notFound, retired } = getMessages(locale);
  const head = kind === "410" ? retired : notFound;
  return (
    <div className="pg">
      <section className="nf" aria-labelledby="nf-title">
        <p className="er-meta">{head.label}</p>
        <h1 className="er-h1" id="nf-title">
          {head.text}
          <span className="er-cursor er-cursor--serif" aria-hidden="true" />
        </h1>
        <ul className="wr-list nf-list">
          {notFound.links.map((link) => {
            const href = localePath(locale, link.path);
            return (
              <li key={link.path}>
                <Link className="wr-row" href={href}>
                  <span className="er-meta">{href}</span>
                  <span className="wr-row__body">
                    <span className="er-h3 wr-row__title">{link.title}</span>
                    <span className="wr-row__summary">{link.text}</span>
                  </span>
                  <span className="wr-row__meta" />
                  <span className="er-project__arrow" aria-hidden="true">
                    →
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
        <p className="er-small">
          {notFound.mail}{" "}
          <a className="er-link" href={`mailto:${site.email}`}>
            {site.email}
          </a>
        </p>
        {children}
      </section>
    </div>
  );
}
