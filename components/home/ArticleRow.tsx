import Link from "next/link";
import { format, localePath, type Locale } from "@/lib/i18n";
import type { Article } from "@/lib/content";

const dateLocale: Record<Locale, string> = { en: "en-US", es: "es-MX" };

type ArticleRowProps = {
  article: Article;
  locale: Locale;
  readingTime: string;
  onlyInEnglish: string;
};

export function ArticleRow({ article, locale, readingTime, onlyInEnglish }: ArticleRowProps) {
  const date = new Intl.DateTimeFormat(dateLocale[locale], {
    day: "numeric",
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  }).format(article.date);

  const languages =
    article.locale !== locale && onlyInEnglish
      ? onlyInEnglish
      : [article.locale, ...article.languages.filter((l) => l !== article.locale)].map((l) => l.toUpperCase()).join(" · ");

  return (
    <li>
      <Link className="er-article" href={localePath(article.locale, `/writing/${article.slug}`)}>
        <time className="er-meta er-tabular" dateTime={article.date.toISOString().slice(0, 10)}>
          {date}
        </time>
        <span className="er-article__title" lang={article.locale}>
          {article.title}
        </span>
        <span className="er-meta">
          {languages} · {format(readingTime, { minutes: article.readingTime ?? "[N]" })}
        </span>
      </Link>
    </li>
  );
}
