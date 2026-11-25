import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import type { Locale } from "@/lib/i18n";

const root = path.join(process.cwd(), "content");

export type Project = {
  slug: string;
  name: string;
  line: string;
  year: string;
  status: string;
  order: number;
};

export type Article = {
  slug: string;
  title: string;
  date: Date;
  summary: string;
  readingTime: number | null;
  // Locale the entry is shown in: the requested one, or "en" when there is no translation.
  locale: Locale;
  languages: Locale[];
};

function slugs(kind: "work" | "writing"): string[] {
  const dir = path.join(root, kind);
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name);
}

function read(kind: "work" | "writing", slug: string, locale: Locale) {
  const file = path.join(root, kind, slug, `${locale}.mdx`);
  if (!fs.existsSync(file)) return null;
  return matter(fs.readFileSync(file, "utf8"));
}

function wordCount(body: string): number {
  const text = body
    .replace(/\{\/\*[\s\S]*?\*\/\}/g, "")
    .replace(/```[\s\S]*?```/g, (block) => block.replace(/[^\s]+/g, "w"))
    .trim();
  return text ? text.split(/\s+/).length : 0;
}

export function getProjects(locale: Locale): Project[] {
  return slugs("work")
    .map((slug) => {
      const file = read("work", slug, locale);
      if (!file) return null;
      const data = file.data;
      return {
        slug,
        name: String(data.name),
        line: String(data.line),
        year: String(data.year),
        status: String(data.status),
        order: Number(data.order),
      };
    })
    .filter((project): project is Project => project !== null)
    .sort((a, b) => a.order - b.order);
}

export function getArticles(locale: Locale, limit?: number): Article[] {
  const articles = slugs("writing")
    .map((slug) => {
      const languages = (["en", "es"] as const).filter((l) =>
        fs.existsSync(path.join(root, "writing", slug, `${l}.mdx`)),
      );
      const shown: Locale | undefined = languages.includes(locale) ? locale : languages.includes("en") ? "en" : undefined;
      if (!shown) return null;
      const file = read("writing", slug, shown)!;
      const data = file.data;
      const words = wordCount(file.content);
      const readingTime =
        typeof data.readingTime === "number" ? data.readingTime : words > 0 ? Math.max(1, Math.ceil(words / 200)) : null;
      return {
        slug,
        title: String(data.title),
        date: new Date(data.date),
        summary: String(data.summary ?? ""),
        readingTime,
        locale: shown,
        languages: [...languages],
      } satisfies Article;
    })
    .filter((article): article is Article => article !== null)
    .sort((a, b) => b.date.getTime() - a.date.getTime());
  return limit === undefined ? articles : articles.slice(0, limit);
}
