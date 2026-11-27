import type { Metadata } from "next";
import Link from "next/link";
import { cacheLife } from "next/cache";
import { notFound, redirect } from "next/navigation";
import { Suspense } from "react";
import { site } from "@/config/site";
import { ContactSection } from "@/components/home/ContactSection";
import { JsonLd } from "@/components/ui/JsonLd";
import { ReadMarker } from "@/components/ui/ReadMarker";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { WritingRow } from "@/components/writing/WritingRow";
import { articleMdxComponents } from "@/components/writing/articleMdx";
import { articleSlugs, getArticle, getArticles } from "@/lib/content";
import { format, getMessages, isLocale, localePath, otherLocale, type Locale } from "@/lib/i18n";
import { formatDate, isOlderThanTwoYears, isoDate, pageMetadata } from "@/lib/metadata";

// Every slug in both locales: /es/writing/[slug] without a translation redirects to the original.
export function generateStaticParams({ params }: { params: { locale: string } }) {
  return isLocale(params.locale) ? articleSlugs().map((slug) => ({ slug })) : [];
}

export async function generateMetadata({ params }: PageProps<"/[locale]/writing/[slug]">): Promise<Metadata> {
  const { locale, slug } = await params;
  if (!isLocale(locale)) return {};
  const article = getArticle(slug, locale);
  if (!article) return {};
  return pageMetadata({
    locale,
    path: `/writing/${slug}`,
    title: `${article.title} · ${site.name}`,
    ogTitle: article.title,
    description: article.summary,
    type: "article",
    locales: article.languages,
    publishedTime: isoDate(article.date),
    modifiedTime: article.updated ? isoDate(article.updated) : undefined,
  });
}

type Params = PageProps<"/[locale]/writing/[slug]">["params"];

// Same pattern as the case study: params are read inside <Suspense>, the article itself is cached.
export default function ArticlePage({ params }: PageProps<"/[locale]/writing/[slug]">) {
  return (
    <Suspense fallback={<div className="pg-case-pending" />}>
      <ArticleRoute params={params} />
    </Suspense>
  );
}

async function ArticleRoute({ params }: { params: Params }) {
  const { locale, slug } = await params;
  if (!isLocale(locale) || !/^[a-z0-9-]+$/.test(slug)) notFound();
  if (!getArticle(slug, locale)) {
    // Not translated: send the reader to the original (307), or 404 if there's no article at all.
    const original = getArticle(slug, otherLocale(locale));
    if (original) redirect(localePath(original.locale, `/writing/${slug}`));
    notFound();
  }
  return <CachedArticle locale={locale} slug={slug} />;
}

async function CachedArticle({ locale, slug }: { locale: Locale; slug: string }) {
  "use cache";
  cacheLife("max"); // content only changes with a deploy
  const article = getArticle(slug, locale)!;
  const messages = getMessages(locale);
  const copy = messages.writing.article;
  const { default: Body } = await import(`@/content/writing/${slug}/${locale}.mdx`);
  const more = getArticles(locale)
    .filter((item) => item.slug !== slug)
    .slice(0, 2);
  const translation = article.languages.find((l) => l !== locale);
  const old = isOlderThanTwoYears(article.date);
  const showToc = article.headings.length >= 3;
  const published = formatDate(article.date, locale);
  const url = `${site.url}${localePath(locale, `/writing/${slug}`)}`;

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: article.title,
          description: article.summary,
          datePublished: isoDate(article.date),
          dateModified: isoDate(article.updated ?? article.date),
          author: { "@type": "Person", name: site.name, url: site.url },
          inLanguage: locale,
          mainEntityOfPage: url,
        }}
      />
      <article aria-labelledby="post-title">
        <div className="pg">
          <header className="wr-head">
            <Link className="pg-back" href={localePath(locale, "/writing")}>
              {copy.back}
            </Link>
            <p className="er-meta">{copy.label}</p>
            <h1 className="er-h1" id="post-title">
              {article.title}
            </h1>
            {article.summary && <p className="er-lead">{article.summary}</p>}
            <dl className="pg-facts wr-facts">
              <div>
                <dt>{copy.facts.published}</dt>
                <dd className="er-tabular">
                  <time dateTime={isoDate(article.date)}>{published}</time>
                </dd>
              </div>
              {article.updated && (
                <div>
                  <dt>{copy.facts.updated}</dt>
                  <dd className="er-tabular">
                    <time dateTime={isoDate(article.updated)}>{formatDate(article.updated, locale)}</time>
                  </dd>
                </div>
              )}
              <div>
                <dt>{copy.facts.language}</dt>
                <dd>
                  {locale.toUpperCase()}
                  {translation && (
                    <>
                      {" · "}
                      <Link className="er-link" href={localePath(translation, `/writing/${slug}`)} hrefLang={translation} lang={translation}>
                        {copy.otherLanguage}
                      </Link>
                    </>
                  )}
                </dd>
              </div>
              <div>
                <dt>{copy.facts.reading}</dt>
                <dd className="er-tabular">{format(copy.readingTime, { minutes: article.readingTime ?? "[N]" })}</dd>
              </div>
            </dl>
            {old && <p className="er-small wr-aging">{format(copy.aging, { year: article.date.getUTCFullYear() })}</p>}
          </header>
        </div>

        <div className="pg">
          <div className={showToc ? "pg-grid wr-body" : "pg-grid wr-body wr-body--solo"}>
            {showToc && (
              <nav className="pg-side" aria-label={copy.toc}>
                <details className="wr-toc" open>
                  <summary className="er-meta">{copy.toc}</summary>
                  <ol>
                    {article.headings.map((heading, index) => (
                      <li key={heading.id}>
                        <a href={`#${heading.id}`}>
                          <span>{String(index + 1).padStart(2, "0")}</span>
                          {heading.text}
                        </a>
                      </li>
                    ))}
                  </ol>
                </details>
              </nav>
            )}
            <div className="pg-main">
              <div className="wr-prose">
                <Body components={articleMdxComponents({ copy })} />
                <p className="wr-end-mark" aria-hidden="true">
                  <span className="er-cursor" />
                  <ReadMarker event="article_read" params={{ article: slug, language: locale }} />
                </p>
                <div className="wr-end">
                  <span className="er-meta er-tabular">{format(copy.published, { date: published })}</span>
                  {site.repo && (
                    <a className="er-link" href={`${site.repo}/blob/main/content/writing/${slug}/${locale}.mdx`} rel="noopener">
                      {copy.edit} ↗
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>

      {more.length > 0 && (
        <div className="pg">
          <section className="pg-sec" aria-labelledby="more-title">
            <SectionLabel number={1}>{copy.more.label}</SectionLabel>
            <h2 className="er-h2 wr-more-title" id="more-title">
              {copy.more.title}
            </h2>
            <ul className="wr-list">
              {more.map((item) => (
                <WritingRow key={item.slug} article={item} locale={locale} copy={messages.writing.index} titleLevel="h3" />
              ))}
            </ul>
            <div className="pg-more">
              <Link className="er-link" href={localePath(locale, "/writing")}>
                {copy.more.all}
              </Link>
            </div>
          </section>
        </div>
      )}

      <ContactSection number={more.length > 0 ? 2 : 1} copy={messages.home.contact} />
    </>
  );
}
