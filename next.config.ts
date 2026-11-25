import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    agentFeedback: true,
    globalNotFound: true,
  },
  cacheComponents: true,
  partialPrefetching: true,
  async redirects() {
    return [
      { source: "/rescue-packages", destination: "/", statusCode: 301 as const },
      { source: "/building", destination: "/work", statusCode: 301 as const },
    ];
  },
};

export default nextConfig;
