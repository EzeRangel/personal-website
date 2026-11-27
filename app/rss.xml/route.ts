import { rssResponse } from "@/lib/rss";

// Static files skip the proxy, so the English feed needs its own route at the root.
export function GET() {
  return rssResponse("en");
}
