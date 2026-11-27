import type { NextConfig } from "next";
import fs from "node:fs";
import path from "node:path";
import createMDX from "@next/mdx";

// Articles that exist in only one language. The URL in the missing language sends the reader to the original.
function articlesOnlyIn(locale: "en" | "es"): string[] {
  const dir = path.join(process.cwd(), "content/writing");
  if (!fs.existsSync(dir)) return [];
  const other = locale === "en" ? "es" : "en";
  return fs
    .readdirSync(dir, { withFileTypes: true })
    .filter(
      (entry) =>
        entry.isDirectory() &&
        fs.existsSync(path.join(dir, entry.name, `${locale}.mdx`)) &&
        !fs.existsSync(path.join(dir, entry.name, `${other}.mdx`)),
    )
    .map((entry) => entry.name);
}

const nextConfig: NextConfig = {
  experimental: {
    agentFeedback: true,
    globalNotFound: true,
  },
  cacheComponents: true,
  images: { formats: ["image/avif", "image/webp"] },
  partialPrefetching: true,
  async redirects() {
    return [
      { source: "/rescue-packages", destination: "/", statusCode: 301 as const },
      { source: "/es/rescue-packages", destination: "/es", statusCode: 301 as const },
      { source: "/building", destination: "/work", statusCode: 301 as const },
      // English originals: a Spanish version may come later, so the redirect is temporary.
      ...articlesOnlyIn("en").map((slug) => ({
        source: `/es/writing/${slug}`,
        destination: `/writing/${slug}`,
        statusCode: 307 as const,
      })),
      // Spanish originals (2021 posts, which lived at /writing/{slug} on the old site): permanent.
      ...articlesOnlyIn("es").map((slug) => ({
        source: `/writing/${slug}`,
        destination: `/es/writing/${slug}`,
        statusCode: 301 as const,
      })),
    ];
  },
};

// MDX bodies are imported by app/[locale]/work/[slug]/page.tsx. Frontmatter is read with gray-matter
// (lib/content.ts); remark-frontmatter only keeps the YAML out of the rendered output.
// Plugins are passed by name so they work with Turbopack.
const withMDX = createMDX({
  options: { remarkPlugins: ["remark-frontmatter"] },
});

export default withMDX(nextConfig);
