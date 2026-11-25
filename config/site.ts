// Single source for contact data and social links (also used for JSON-LD sameAs).
export const site = {
  url: "https://ezerangel.com",
  name: "Ezequiel Rangel",
  jobTitle: "Product engineer",
  locality: "Mazatlán",
  country: "MX",
  email: "hey@ezerangel.com",
  social: {
    github: "https://github.com/EzeRangel",
    linkedin: "https://www.linkedin.com/in/ezerangel",
    x: "https://x.com/El_Semantico",
  },
  locales: ["en", "es"] as const,
  defaultLocale: "en" as const,
  // GA4 measurement ID — PLACEHOLDER: Ezequiel must provide it. Read from env, never hard-code.
  gaMeasurementId: process.env.NEXT_PUBLIC_GA_ID ?? "",
} as const;
