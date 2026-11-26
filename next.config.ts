import type { NextConfig } from "next";
import createMDX from "@next/mdx";

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
