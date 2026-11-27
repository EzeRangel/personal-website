import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import type { Locale } from "@/lib/i18n";
import { clients } from "@/content/clients";

const root = path.join(process.cwd(), "content");

export type Project = {
  slug: string;
  name: string;
  line: string;
  year: string;
  status: string;
  order: number;
};

// What the /work listing shows of each product. Lenient on purpose: drafts (no case body yet) show
// their [PLACEHOLDERS] as they are.
export type ProjectListing = Project & {
  role: string;
  builtWith: string[];
  links: CaseLink[];
  cover: CaseImage | null;
};

export type Article = {
  slug: string;
  title: string;
  date: Date;
  updated: Date | null;
  summary: string;
  readingTime: number | null;
  // Locale the entry is shown in: the requested one, or "en" when there is no translation.
  locale: Locale;
  languages: Locale[];
  // h2s of the body, in order, with the ids the article page gives them (see headingId).
  headings: { id: string; text: string }[];
};

function slugs(kind: "work" | "writing"): string[] {
  const dir = path.join(root, kind);
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name)
    .filter((slug) => kind !== "work" || read(kind, slug, "en")?.data.hidden !== true);
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

export function getProjectListings(locale: Locale): ProjectListing[] {
  return getProjects(locale).map((project) => {
    const data = read("work", project.slug, locale)!.data as Record<string, unknown>;
    const cover = image(data.cover);
    return {
      ...project,
      role: String(data.role ?? "[ROLE]"),
      builtWith: Array.isArray(data.builtWith) ? data.builtWith.map(String) : [],
      links: (Array.isArray(data.links) ? data.links : [])
        .map((link) => link as Record<string, unknown>)
        .filter((link) => typeof link.href === "string" && typeof link.label === "string")
        .map((link) => ({ label: String(link.label), href: String(link.href) })),
      cover: cover && fs.existsSync(path.join(root, "work", project.slug, "screens", path.basename(cover.src))) ? cover : null,
    };
  });
}

const wordsPerMinute = 220;

function articleIn(slug: string, locale: Locale): Article | null {
  const languages = (["en", "es"] as const).filter((l) => fs.existsSync(path.join(root, "writing", slug, `${l}.mdx`)));
  const shown: Locale | undefined = languages.includes(locale) ? locale : languages.includes("en") ? "en" : undefined;
  if (!shown) return null;
  const file = read("writing", slug, shown)!;
  const data = file.data;
  const words = wordCount(file.content.replace(/^import .*$/gm, ""));
  const readingTime =
    typeof data.readingTime === "number" ? data.readingTime : words > 0 ? Math.max(1, Math.round(words / wordsPerMinute)) : null;
  return {
    slug,
    title: String(data.title),
    date: new Date(data.date),
    updated: data.updated ? new Date(data.updated) : null,
    summary: String(data.summary ?? ""),
    readingTime,
    locale: shown,
    languages: [...languages],
    headings: headings(file.content).map((text) => ({ id: headingId(text), text: plainHeading(text) })),
  };
}

export function getArticles(locale: Locale, limit?: number): Article[] {
  const articles = slugs("writing")
    .map((slug) => articleIn(slug, locale))
    .filter((article): article is Article => article !== null)
    .sort((a, b) => b.date.getTime() - a.date.getTime());
  return limit === undefined ? articles : articles.slice(0, limit);
}

// The article in exactly this locale, or null when it isn't written in it.
export function getArticle(slug: string, locale: Locale): Article | null {
  if (!/^[a-z0-9-]+$/.test(slug)) return null;
  const article = articleIn(slug, locale);
  return article && article.locale === locale ? article : null;
}

export function articleSlugs(): string[] {
  return slugs("writing");
}

// Markdown h2 text → plain text, and plain text → the id used for anchors and "On this page".
// components/writing/articleMdx.tsx builds the same id from the rendered children.
function plainHeading(text: string): string {
  return text.replace(/[`*_]/g, "").trim();
}

export function headingId(text: string): string {
  return plainHeading(text)
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

// ---------- Case studies (/work/[slug]) ----------

// Screenshot src is a file name in content/work/{slug}/screens/ (see lib/caseImages.ts).
export type CaseImage = { src: string; alt: string };
export type CaseScreen = CaseImage & { caption: string };
export type CaseLink = { label: string; href: string };

export type CaseStudy = Project & {
  locale: Locale;
  lead: string;
  role: string;
  platform: string;
  builtWith: string[];
  links: CaseLink[];
  cover: CaseImage | null;
  screens: CaseScreen[];
  diagram: (CaseImage & { description: string }) | null;
  seo: { title: string; description: string };
  // SoftwareApplication JSON-LD. The app's url is the first public link.
  schema: { applicationCategory: string; operatingSystem: string };
  updated: string; // YYYY-MM-DD
};

// Exact h2 texts each case body must have, in this order. Kept in sync with messages *.work.case.sections.
export const caseSections: Record<Locale, readonly string[]> = {
  en: ["The problem", "The decision", "How it was built", "Where it stands"],
  es: ["El problema", "La decisión", "Cómo se construyó", "Dónde está hoy"],
};

// [YEAR], [STATUS], [COVER]… Production builds refuse a published case that still has one;
// previews (VERCEL_ENV=preview) and dev show them as they are.
const placeholderPattern = /\[[A-ZÁÉÍÓÚÑ][A-ZÁÉÍÓÚÑ0-9_ ]*\]/;
const failOnPlaceholders = process.env.NODE_ENV === "production" && process.env.VERCEL_ENV !== "preview";

function headings(body: string): string[] {
  return body
    .replace(/```[\s\S]*?```/g, "")
    .split("\n")
    .filter((line) => /^## /.test(line))
    .map((line) => line.slice(3).trim());
}

function caseError(slug: string, locale: Locale, message: string): Error {
  return new Error(`content/work/${slug}/${locale}.mdx: ${message}`);
}

function text(data: Record<string, unknown>, key: string, slug: string, locale: Locale): string {
  const value = data[key];
  if (typeof value !== "string" || value.trim() === "") throw caseError(slug, locale, `"${key}" is required`);
  return value;
}

function image(value: unknown): CaseImage | null {
  if (!value || typeof value !== "object") return null;
  const { src, alt } = value as Record<string, unknown>;
  return typeof src === "string" && src !== "" ? { src, alt: String(alt ?? "") } : null;
}

function isoDate(value: unknown): string {
  if (value instanceof Date) return value.toISOString().slice(0, 10);
  return String(value);
}

// A case is published once its body has headings. A body without any h2 is a draft: no page, no sitemap
// entry, not in "Next project". A body with headings that don't match caseSections fails the build.
export function getCase(slug: string, locale: Locale): CaseStudy | null {
  const file = read("work", slug, locale);
  if (!file) return null;
  const found = headings(file.content);
  if (found.length === 0) return null;

  const expected = caseSections[locale];
  if (found.join("|") !== expected.join("|")) {
    throw caseError(slug, locale, `h2 headings must be exactly ${JSON.stringify(expected)}, in order; found ${JSON.stringify(found)}`);
  }
  const placeholder = `${file.matter}\n${file.content}`.match(placeholderPattern);
  if (failOnPlaceholders && placeholder) {
    throw caseError(slug, locale, `has a placeholder (${placeholder[0]}); fill it before publishing`);
  }

  const data = file.data as Record<string, unknown>;
  const builtWith = Array.isArray(data.builtWith) ? data.builtWith.map(String) : [];
  if (builtWith.length === 0 || builtWith.length > 4) throw caseError(slug, locale, `"builtWith" needs 1 to 4 terms`);
  const screens = (Array.isArray(data.screens) ? data.screens : [])
    .map((item) => {
      const img = image(item);
      return img ? { ...img, caption: String((item as Record<string, unknown>).caption ?? "") } : null;
    })
    .filter((item): item is CaseScreen => item !== null);
  if (screens.length > 4) throw caseError(slug, locale, `"screens" takes 0 to 4 images`);
  const cover = image(data.cover);
  for (const shot of [cover, ...screens]) {
    if (!shot) continue;
    const file = path.join(root, "work", slug, "screens", shot.src);
    if (path.basename(shot.src) !== shot.src || !/\.(jpe?g|png|webp|avif)$/i.test(shot.src) || !fs.existsSync(file)) {
      throw caseError(slug, locale, `screenshot "${shot.src}" must be an image file in content/work/${slug}/screens/`);
    }
  }
  const diagram = image(data.diagram);
  const seo = (data.seo ?? {}) as Record<string, unknown>;
  const schema = (data.schema ?? {}) as Record<string, unknown>;

  return {
    slug,
    locale,
    name: text(data, "name", slug, locale),
    line: text(data, "line", slug, locale),
    lead: text(data, "lead", slug, locale),
    year: text(data, "year", slug, locale),
    status: text(data, "status", slug, locale),
    role: text(data, "role", slug, locale),
    platform: text(data, "platform", slug, locale),
    order: Number(data.order),
    builtWith,
    links: (Array.isArray(data.links) ? data.links : [])
      .map((link) => link as Record<string, unknown>)
      .filter((link) => typeof link.href === "string" && typeof link.label === "string")
      .map((link) => ({ label: String(link.label), href: String(link.href) })),
    cover,
    screens,
    diagram: diagram ? { ...diagram, description: String((data.diagram as Record<string, unknown>).description ?? "") } : null,
    seo: { title: text(seo, "title", slug, locale), description: text(seo, "description", slug, locale) },
    schema: {
      applicationCategory: String(schema.applicationCategory ?? "Application"),
      operatingSystem: String(schema.operatingSystem ?? ""),
    },
    updated: isoDate(data.updated),
  };
}

// Published cases in `order`. A case is only published when it exists in both languages.
export function getPublishedCases(locale: Locale): CaseStudy[] {
  return slugs("work")
    .filter((slug) => getCase(slug, "en") && getCase(slug, "es"))
    .map((slug) => getCase(slug, locale)!)
    .sort((a, b) => a.order - b.order);
}

// Next case by `order`, wrapping from the last to the first. Null when there is no other case.
export function getNextCase(slug: string, locale: Locale): CaseStudy | null {
  const cases = getPublishedCases(locale);
  const index = cases.findIndex((item) => item.slug === slug);
  if (index === -1 || cases.length < 2) return null;
  return cases[(index + 1) % cases.length];
}

// ---------- Client work (/work) ----------

export type ClientEntry = {
  slug: string;
  name: string;
  year: string;
  url: string | null;
  confidential: boolean;
  role: string;
  line: string;
};

// Entries from content/clients.ts in file order. Production builds leave out entries that still
// have a [PLACEHOLDER]; a malformed entry fails the build.
export function getClientWork(locale: Locale): ClientEntry[] {
  return clients
    .map((item) => {
      const where = `content/clients.ts (${item.slug})`;
      if ((!item.confidential && !item.name.trim()) || !item.year.trim() || !item.role[locale].trim() || !item.line[locale].trim()) {
        throw new Error(`${where}: name, year, role and line are required`);
      }
      if (item.url !== undefined && !/^https:\/\//.test(item.url)) throw new Error(`${where}: "url" must start with https://`);
      return {
        slug: item.slug,
        name: item.name,
        year: item.year,
        url: item.url ?? null,
        confidential: item.confidential === true,
        role: item.role[locale],
        line: item.line[locale],
      } satisfies ClientEntry;
    })
    .filter((entry) => !(failOnPlaceholders && placeholderPattern.test(JSON.stringify(entry))));
}

// The blueprint diagram is inlined so its strokes follow the theme tokens.
export function getDiagramSvg(slug: string, src: string): string | null {
  const file = path.join(root, "work", slug, path.basename(src));
  if (!file.endsWith(".svg") || !fs.existsSync(file)) return null;
  return fs.readFileSync(file, "utf8").replace(/<\?xml[^>]*\?>\s*/, "");
}
