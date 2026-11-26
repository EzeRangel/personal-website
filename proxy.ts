import { NextResponse, type NextRequest } from "next/server";

// Retired URLs answer 410 Gone. 301s live in next.config.ts.
const gone = new Set([
  "/writing/icusa-case-study",
  "/reading",
  "/bookmarks",
  "/writing/imagen-al-compartir-link",
  "/writing/5-senales-sitio-necesita-rescate",
]);

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const path = pathname.length > 1 ? pathname.replace(/\/$/, "") : pathname;

  if (gone.has(path)) {
    return new NextResponse("Gone", { status: 410, headers: { "content-type": "text/plain; charset=utf-8" } });
  }

  if (path === "/es" || path.startsWith("/es/")) return NextResponse.next();

  // English lives at the root, so /en URLs redirect there. Metadata images are generated under /en.
  if (path === "/en" || path.startsWith("/en/")) {
    if (/\/opengraph-image(?:[-/]|$)/.test(path)) return NextResponse.next();
    const url = request.nextUrl.clone();
    url.pathname = path.slice(3) || "/";
    return NextResponse.redirect(url, 308);
  }

  const url = request.nextUrl.clone();
  url.pathname = `/en${path === "/" ? "" : path}`;
  return NextResponse.rewrite(url);
}

// Skips build output and static files (public/, sitemap.xml, robots.txt). Other dotted paths,
// like /wp-login.php, still go through here so they end in the 404 page.
export const config = {
  matcher: ["/((?!_next/|.*\\.(?:svg|png|jpe?g|gif|webp|avif|ico|xml|txt|webmanifest|woff2?|ttf|css|js|map)$).*)"],
};
