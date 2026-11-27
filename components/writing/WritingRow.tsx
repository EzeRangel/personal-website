import Link from "next/link";
import type { Article } from "@/lib/content";
import { format, localePath, type Locale, type Messages } from "@/lib/i18n";
import { formatDate, isoDate } from "@/lib/metadata";

type WritingRowProps = {
  article: Article;
  locale: Locale; // the page's locale
  copy: Pick<Messages["writing"]["index"], "readingTime" | "onlyInEnglish">;
  titleLevel?: "h2" | "h3" | "h4";
};

// Date · title and summary · language and reading time · →. The whole row is the link.
// An article without a translation links to the original and says so.
export function WritingRow({ article, locale, copy, titleLevel = "h3" }: WritingRowProps) {
  const Title = titleLevel;
  const untranslated = article.locale !== locale;
  return (
    <li>
      <Link className="wr-row" href={localePath(article.locale, `/writing/${article.slug}`)} prefetch hrefLang={untranslated ? article.locale : undefined}>
        <time className="er-meta er-tabular" dateTime={isoDate(article.date)}>
          {formatDate(article.date, locale)}
        </time>
        <span className="wr-row__body">
          <Title className="er-h3 wr-row__title" lang={article.locale}>
            {article.title}
          </Title>
          {article.summary && (
            <span className="wr-row__summary" lang={article.locale}>
              {article.summary}
            </span>
          )}
        </span>
        <span className="wr-row__meta">
          <span className="er-meta er-tabular">
            {article.locale.toUpperCase()} · {format(copy.readingTime, { minutes: article.readingTime ?? "[N]" })}
          </span>
          {untranslated && copy.onlyInEnglish && <span className="er-meta">{copy.onlyInEnglish}</span>}
        </span>
        <span className="er-project__arrow" aria-hidden="true">
          →
        </span>
      </Link>
    </li>
  );
}
