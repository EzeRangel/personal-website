import localFont from "next/font/local";

export const serif = localFont({
  src: [
    { path: "../assets/fonts/InstrumentSerif-Regular.woff2", weight: "400", style: "normal" },
    { path: "../assets/fonts/InstrumentSerif-Italic.woff2", weight: "400", style: "italic" },
  ],
  variable: "--font-serif",
  display: "swap",
  fallback: ["Georgia", "Times New Roman", "serif"],
});

export const sans = localFont({
  src: "../assets/fonts/Geist-Variable.woff2",
  weight: "100 900",
  variable: "--font-sans",
  display: "swap",
  fallback: ["system-ui", "-apple-system", "Segoe UI", "sans-serif"],
});

export const mono = localFont({
  src: "../assets/fonts/GeistMono-Variable.woff2",
  weight: "100 900",
  variable: "--font-mono",
  display: "swap",
  preload: false,
  fallback: ["ui-monospace", "SFMono-Regular", "Menlo", "monospace"],
});

export const fontVariables = `${serif.variable} ${sans.variable} ${mono.variable}`;
