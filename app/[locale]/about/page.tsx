import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Fragment } from "react";
import { site } from "@/config/site";
import { path } from "@/content/path";
import { ContactSection } from "@/components/home/ContactSection";
import { JsonLd } from "@/components/ui/JsonLd";
import { PageHead } from "@/components/ui/PageHead";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { getProjectListings, getPublishedCases } from "@/lib/content";
import { getMessages, isLocale, localePath, type Locale } from "@/lib/i18n";
import { pageMetadata } from "@/lib/metadata";

export async function generateMetadata({ params }: PageProps<"/[locale]/about">): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const copy = getMessages(locale).about;
  return pageMetadata({ locale, path: "/about", title: copy.seoTitle, description: copy.description, ogTitle: copy.title });
}

function years(from: string, to: string | null, now: string): string {
  if (to === null) return `${from}–${now}`;
  return from === to ? from : `${from}–${to}`;
}

function stops(locale: Locale, now: string) {
  const products = new Map(getProjectListings(locale).map((product) => [product.slug, product]));
  return path.flatMap((stop) => {
    if (stop.kind === "job") {
      return [{ key: stop.company, when: years(stop.from, stop.to, now), role: stop.role[locale], name: stop.company, line: stop.line[locale] }];
    }
    const product = products.get(stop.slug);
    if (!product) return [];
    return [{ key: stop.slug, when: years(stop.from, stop.to, now), role: product.role, name: product.name, line: product.line }];
  });
}

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  jobTitle: site.jobTitle,
  url: site.url,
  email: `mailto:${site.email}`,
  address: { "@type": "PostalAddress", addressLocality: site.locality, addressCountry: site.country },
  sameAs: Object.values(site.social),
};

// Head (bio + facts) · 01 Path · 02 How I work · 03 What I'm looking for · 04 Contact.
export default async function AboutPage({ params }: PageProps<"/[locale]/about">) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const messages = getMessages(locale);
  const copy = messages.about;
  const published = new Set(getPublishedCases(locale).map((study) => study.slug));
  const products = getProjectListings(locale);

  return (
    <>
      <JsonLd data={personJsonLd} />
      <div className="pg">
        <PageHead className="ab-head" kicker={copy.kicker} title={copy.title} lead={copy.bio}>
          <p className="er-body">
            {copy.products.before}
            {products.map((product, index) => (
              <Fragment key={product.slug}>
                {index > 0 && (index === products.length - 1 ? copy.products.and : ", ")}
                {published.has(product.slug) ? (
                  <Link className="er-link" href={localePath(locale, `/work/${product.slug}`)} prefetch>
                    {product.name}
                  </Link>
                ) : (
                  product.name
                )}
              </Fragment>
            ))}
            {copy.products.after}
          </p>
          <dl className="pg-facts ab-facts">
            <div>
              <dt>{copy.facts.basedIn.label}</dt>
              <dd>{copy.facts.basedIn.value}</dd>
            </div>
            <div>
              <dt>{copy.facts.timeZone.label}</dt>
              <dd className="er-tabular">{copy.facts.timeZone.value}</dd>
            </div>
            <div>
              <dt>{copy.facts.languages.label}</dt>
              <dd>{copy.facts.languages.value}</dd>
            </div>
            <div>
              <dt>{copy.facts.email.label}</dt>
              <dd>
                <a className="er-link" href={`mailto:${site.email}`} data-track="email_click">
                  {site.email}
                </a>
              </dd>
            </div>
          </dl>
        </PageHead>
      </div>

      <div className="pg">
        <section className="pg-sec" aria-labelledby="path-title">
          <SectionLabel number={1}>{copy.path.label}</SectionLabel>
          <h2 className="er-h2 ab-title" id="path-title">
            {copy.path.title}
          </h2>
          <ol className="ab-path">
            {stops(locale, copy.path.now).map((stop) => (
              <li className="ab-stop" key={stop.key}>
                <span className="ab-stop__when er-meta er-tabular">{stop.when}</span>
                <div className="ab-stop__what">
                  <h3 className="er-h3">{stop.role}</h3>
                  <span className="er-small">{stop.name}</span>
                </div>
                <p className="ab-stop__line">{stop.line}</p>
              </li>
            ))}
          </ol>
          <div className="pg-more">
            <Link className="er-link" href={localePath(locale, "/work")}>
              {copy.path.allWork}
            </Link>
          </div>
        </section>
      </div>

      <div className="pg">
        <section className="pg-sec" aria-labelledby="how-title">
          <SectionLabel number={2}>{copy.how.label}</SectionLabel>
          <h2 className="er-h2 ab-title" id="how-title">
            {copy.how.title}
          </h2>
          <ol className="er-steps">
            {copy.how.items.map((item, index) => (
              <li key={item.title} className="er-step">
                <span className="er-step__num">{String(index + 1).padStart(2, "0")}</span>
                <h3 className="er-step__title">{item.title}</h3>
                <p className="er-step__text">{item.text}</p>
              </li>
            ))}
          </ol>
        </section>
      </div>

      <div className="pg">
        <section className="pg-sec" aria-labelledby="seek-title">
          <SectionLabel number={3}>{copy.seek.label}</SectionLabel>
          <h2 className="er-h2 ab-title" id="seek-title">
            {copy.seek.title}
          </h2>
          <ul className="ab-seek">
            {[copy.seek.teams, copy.seek.founders].map((card) => (
              <li className="ab-card" key={card.subject}>
                <span className="er-meta">{card.kicker}</span>
                <h3 className="er-h3">{card.title}</h3>
                <p className="er-body">{card.text}</p>
                <a
                  className="er-link"
                  href={`mailto:${site.email}?subject=${encodeURIComponent(card.subject)}`}
                  data-track="email_click"
                  data-track-subject={card.subject}
                >
                  {card.link}
                </a>
              </li>
            ))}
          </ul>
        </section>
      </div>

      <ContactSection number={4} copy={messages.home.contact} />
    </>
  );
}
