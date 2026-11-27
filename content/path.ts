// "Path" on /about, newest first. Products take their role and line from content/work/{slug}/{locale}.mdx;
// jobs carry their own. Source: "Arquitectura y copy de las páginas internas" (Nov 27).
// Only ADHOC TI appears among jobs: the NDA contract and anything before 2017 stay out.

export type PathStop =
  | { kind: "product"; slug: string; from: string; to: string | null } // to: null = ongoing ("now")
  | {
      kind: "job";
      company: string;
      from: string;
      to: string | null;
      role: { en: string; es: string };
      line: { en: string; es: string };
    };

export const path: PathStop[] = [
  { kind: "product", slug: "fiscalio", from: "2025", to: null },
  { kind: "product", slug: "relay", from: "[YEAR]", to: null },
  {
    kind: "job",
    company: "ADHOC TI",
    from: "2017",
    to: "2025",
    role: { en: "Senior Fullstack Engineer", es: "Senior Fullstack Engineer" },
    line: {
      en: "Products for clients like Subastas Love To Help, Citicinemas and Cuida Mi Mascota.",
      es: "Productos para clientes como Subastas Love To Help, Citicinemas y Cuida Mi Mascota.",
    },
  },
];
