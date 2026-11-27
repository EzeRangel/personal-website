import { site } from "@/config/site";
import { getArticles } from "@/lib/content";
import { getMessages, localePath, type Locale } from "@/lib/i18n";

function escape(value: string): string {
  return value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}

// RSS 2.0 per language: every article, in this language when it's translated and in the original otherwise.
export function rssResponse(locale: Locale): Response {
  const { writing } = getMessages(locale);
  const home = `${site.url}${localePath(locale, "/writing")}`;
  const feed = `${site.url}${locale === "en" ? "" : `/${locale}`}/rss.xml`;
  const items = getArticles(locale)
    .map((article) => {
      const url = `${site.url}${localePath(article.locale, `/writing/${article.slug}`)}`;
      return [
        "    <item>",
        `      <title>${escape(article.title)}</title>`,
        `      <link>${url}</link>`,
        `      <guid isPermaLink="true">${url}</guid>`,
        `      <pubDate>${article.date.toUTCString()}</pubDate>`,
        article.summary ? `      <description>${escape(article.summary)}</description>` : "",
        "    </item>",
      ]
        .filter(Boolean)
        .join("\n");
    })
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${escape(`${writing.index.kicker} · ${site.name}`)}</title>
    <link>${home}</link>
    <description>${escape(writing.index.description)}</description>
    <language>${locale === "en" ? "en-us" : "es-mx"}</language>
    <atom:link href="${feed}" rel="self" type="application/rss+xml" />
${items}
  </channel>
</rss>
`;
  return new Response(xml, { headers: { "content-type": "application/rss+xml; charset=utf-8" } });
}
