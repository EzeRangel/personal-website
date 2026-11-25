import fs from "node:fs";
import path from "node:path";
import { ImageResponse } from "next/og";
import { site } from "@/config/site";
import { getMessages, isLocale, locales } from "@/lib/i18n";

export const alt = site.name;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Satori can't read woff2 or variable fonts, so these are static TTF instances of the site fonts.
const fontDir = path.join(process.cwd(), "assets/og-fonts");
const fonts = [
  { name: "Instrument Serif", file: "InstrumentSerif-Regular.ttf", weight: 400 as const },
  { name: "Geist", file: "Geist-Medium.ttf", weight: 500 as const },
  { name: "Geist Mono", file: "GeistMono-Medium.ttf", weight: 500 as const },
].map((font) => ({ name: font.name, weight: font.weight, style: "normal" as const, data: fs.readFileSync(path.join(fontDir, font.file)) }));

const colors = { bg: "#F3F1EC", ink: "#141414", muted: "#5C5850", accent: "#2E2BE8" };

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function OpengraphImage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const { meta } = getMessages(isLocale(locale) ? locale : "en");

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px 72px",
          background: colors.bg,
          color: colors.ink,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16, fontFamily: "Geist Mono", fontSize: 22, letterSpacing: "0.06em", color: colors.muted }}>
          <div style={{ width: 12, height: 12, background: colors.accent }} />
          {meta.ogLabel}
        </div>
        <div style={{ display: "flex", fontFamily: "Instrument Serif", fontSize: 132, lineHeight: 0.95, letterSpacing: "-0.02em", maxWidth: 1000 }}>
          {meta.ogTitle}
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
          <div style={{ display: "flex", alignItems: "flex-end", fontFamily: "Geist", fontSize: 40, letterSpacing: "-0.02em" }}>
            {site.name}
            <div style={{ width: 21, height: 21, marginLeft: 5, marginBottom: 9, background: colors.accent }} />
          </div>
          <div style={{ display: "flex", fontFamily: "Geist Mono", fontSize: 22, letterSpacing: "0.06em", color: colors.muted }}>
            {new URL(site.url).host}
          </div>
        </div>
      </div>
    ),
    { ...size, fonts },
  );
}
