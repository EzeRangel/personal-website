import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { site } from "@/config/site";
import { ContactSection } from "@/components/home/ContactSection";
import { JsonLd } from "@/components/ui/JsonLd";
import { PageHead } from "@/components/ui/PageHead";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { WritingRow } from "@/components/writing/WritingRow";
import { getArticles, type Article } from "@/lib/content";
import { format, getMessages, isLocale, localePath } from "@/lib/i18n";
import { pageMetadata } from "@/lib/metadata";

export async function generateMetadata({ params }: PageProps<"/[locale]/writing">): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const copy = getMessages(locale).writing.index;
  return pageMetadata({ locale, path: "/writing", title: copy.seoTitle, description: copy.description, ogTitle: copy.title });
}

function byYear(articles: Article[]): [number, Article[]][] {
  const groups = new Map<number, Article[]>();
  for (const article of articles) {
    const year = article.date.getUTCFullYear();
    groups.set(year, [...(groups.get(year) ?? []), article]);
  }
  return [...groups.entries()].sort(([a], [b]) => b - a);
}

// Head with RSS · 01 All writing, grouped by year (newest first) · 02 Contact.
export default async function WritingPage({ params }: PageProps<"/[locale]/writing">) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const messages = getMessages(locale);
  const copy = messages.writing.index;
  const articles = getArticles(locale);

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: copy.seoTitle,
          description: copy.description,
          url: `${site.url}${localePath(locale, "/writing")}`,
          inLanguage: locale,
          hasPart: articles.map((article) => ({
            "@type": "Article",
            headline: article.title,
            url: `${site.url}${localePath(article.locale, `/writing/${article.slug}`)}`,
            datePublished: article.date.toISOString().slice(0, 10),
            inLanguage: article.locale,
          })),
        }}
      />
      <div className="pg">
        <PageHead kicker={copy.kicker} title={copy.title} lead={copy.lead}>
          <div className="wr-tools">
            <a className="er-link" href={locale === "en" ? "/rss.xml" : `/${locale}/rss.xml`} type="application/rss+xml">
              {copy.rss} ↗
            </a>
          </div>
        </PageHead>
      </div>

      <div className="pg">
        <section className="pg-sec" aria-labelledby="all-title">
          <SectionLabel number={1}>{copy.label}</SectionLabel>
          <h2 className="er-sr" id="all-title">
            {copy.label}
          </h2>
          {articles.length === 0 ? (
            <p className="er-lead wr-empty">{copy.empty}</p>
          ) : (
            <div className="wr-years">
              {byYear(articles).map(([year, items]) => (
                <section className="pg-grid wr-group" key={year} aria-labelledby={`year-${year}`}>
                  <div className="pg-side">
                    <h3 className="wr-year er-tabular" id={`year-${year}`}>
                      {year}
                    </h3>
                    <p className="er-meta er-tabular wr-count">
                      {format(items.length === 1 ? copy.yearCount.one : copy.yearCount.other, { count: items.length })}
                    </p>
                  </div>
                  <ul className="pg-main wr-list">
                    {items.map((article) => (
                      <WritingRow key={article.slug} article={article} locale={locale} copy={copy} titleLevel="h4" />
                    ))}
                  </ul>
                </section>
              ))}
            </div>
          )}
        </section>
      </div>

      <ContactSection number={2} copy={messages.home.contact} />
    </>
  );
}
