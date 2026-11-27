// Client work shown on /work, newest first. Proof of work, not case studies: no page of its own.
//
// Rules (brandbook):
// - Real clients only. Never invent a client, a year or a result. YouOut and ICUSA are never listed.
// - `line` says what I built, in one sentence, written natively in each language.
// - `url` only when the work is public and still live.
// - `confidential: true` for work under NDA: the row shows "Confidential client" instead of `name`,
//   `line` lists technologies only (no product details) and the link column says "Under NDA".
// - Missing data goes in brackets ([CLIENT], [YEAR]…). Production builds leave out entries
//   that still have one; dev and previews show them as they are.

export type ClientWork = {
  slug: string; // used for analytics only
  name: string; // the client's name; not translated. Ignored when confidential
  year: string; // "2024" or "2023–2024"
  url?: string;
  confidential?: boolean;
  role: { en: string; es: string };
  line: { en: string; es: string };
};

export const clients: ClientWork[] = [
  {
    slug: "subastas-love-to-help",
    name: "Subastas Love to Help",
    year: "2025",
    url: "https://subastaslovetohelp.com/",
    role: { en: "Frontend Engineer", es: "Frontend Engineer" },
    line: {
      en: "Auctions of high-end items for social causes.",
      es: "Subastas de artículos high-end para causas sociales.",
    },
  },
  {
    slug: "citicinemas",
    name: "Citicinemas",
    year: "2023",
    url: "https://www.citicinemas.com/",
    role: { en: "Mobile Engineer", es: "Mobile Engineer" },
    line: {
      en: "Version 3 of the cinema app: showtimes, schedules, promotions and tickets.",
      es: "La versión 3 de la app del cine: funciones, horarios, promociones y boletos.",
    },
  },
  {
    slug: "cuida-mi-mascota",
    name: "Cuida Mi Mascota",
    year: "2020–2022",
    url: "https://www.cuidamimascota.com.mx/",
    role: { en: "Frontend Engineer", es: "Frontend Engineer" },
    line: {
      en: "Website and app to find sitters for your pets. I built new features and maintained both.",
      es: "Sitio y app para encontrar cuidadores para tus mascotas. Construí funciones nuevas y mantuve ambos.",
    },
  },
];
