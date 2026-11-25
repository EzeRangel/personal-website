import Link from "next/link";
import { ArticleRow } from "@/components/home/ArticleRow";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { localePath, type Locale, type Messages } from "@/lib/i18n";
import type { Article } from "@/lib/content";

type WritingSectionProps = { locale: Locale; number: number; copy: Messages["home"]["writing"]; articles: Article[] };

export function WritingSection({ locale, number, copy, articles }: WritingSectionProps) {
  return (
    <div className="pg">
      <section className="pg-sec" aria-labelledby="wr-title">
        <div className="pg-grid">
          <div className="pg-full">
            <SectionLabel number={number}>{copy.label}</SectionLabel>
          </div>
          <h2 className="er-h2 pg-full" id="wr-title">
            {copy.title}
          </h2>
          <p className="er-lead pg-full">{copy.lead}</p>
          <div className="pg-full">
            <ul className="er-articles">
              {articles.map((article) => (
                <ArticleRow
                  key={article.slug}
                  article={article}
                  locale={locale}
                  readingTime={copy.readingTime}
                  onlyInEnglish={copy.onlyInEnglish}
                />
              ))}
            </ul>
            <div className="pg-more">
              <Link className="er-link" href={localePath(locale, "/writing")}>
                {copy.allWriting}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
