import type { NextConfig } from "next";
import fs from "node:fs";
import path from "node:path";
import createMDX from "@next/mdx";

// Articles without a Spanish version: /es/writing/{slug} sends the reader to the original (307).
function untranslatedArticles(): string[] {
  const dir = path.join(process.cwd(), "content/writing");
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir, { withFileTypes: true })
    .filter((entry) => entry.isDirectory() && !fs.existsSync(path.join(dir, entry.name, "es.mdx")))
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
      { source: "/building", destination: "/work", statusCode: 301 as const },
      ...untranslatedArticles().map((slug) => ({
        source: `/es/writing/${slug}`,
        destination: `/writing/${slug}`,
        statusCode: 307 as const,
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
