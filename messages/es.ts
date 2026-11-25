// Copy del Homepage v1 — Español (/es). Fuente: "ezerangel.com — Arquitectura del sitio y copy del Homepage v1".
// Mismas claves que en.ts. No cambiar redacción sin actualizar el documento de copy.
import type { Messages } from "./en";

type DeepString<T> = { [K in keyof T]: T[K] extends string ? string : T[K] extends readonly (infer U)[] ? readonly (U extends string ? string : DeepString<U>)[] : DeepString<T[K]> };

export const es: DeepString<Messages> = {
  meta: {
    title: "Ezequiel Rangel — Product engineer en México",
    description:
      "Ezequiel Rangel, product engineer en Mazatlán, México. Construyo primeras versiones de productos web y móviles: prototipos que la gente puede usar.",
    ogTitle: "Construyo primeras versiones.",
    ogLabel: "INICIO · ES",
  },
  global: {
    skipToContent: "Saltar al contenido",
    nav: { work: "Trabajo", writing: "Escritos", about: "Sobre mí", contact: "Contacto" },
    navLabel: "Principal",
    menu: { open: "Menú", close: "Cerrar" },
    theme: { label: "Tema", system: "Sistema", light: "Claro", dark: "Oscuro" },
    language: {
      label: "Idioma",
      switchTo: "EN",
      switchAriaLabel: "Leer esta página en inglés",
      suggestion: "Esta página también está en inglés.",
      suggestionLink: "Leerla en inglés →",
    },
    footer: { builtIn: "Hecho en Mazatlán, México.", privacy: "Privacidad", rss: "RSS" },
    cookies: {
      text: "Este sitio usa Google Analytics para saber qué páginas se leen. Solo se carga si aceptas.",
      accept: "Aceptar",
      decline: "Rechazar",
      privacy: "Privacidad",
    },
  },
  home: {
    hero: {
      name: "Ezequiel Rangel",
      descriptor: "Product engineer",
      tagline: { before: "Construyo ", emphasis: "primeras", after: " versiones." },
      lead: "Convierto ideas de producto en prototipos que funcionan y que la gente real puede usar. Llevo más de 10 años construyendo productos web y móviles.",
      cta: "Cuéntame qué quieres construir",
    },
    work: {
      label: "Trabajo",
      title: "Mira lo que construyo.",
      lead: "Tres productos propios, construidos de punta a punta. Son la prueba de cómo trabajo.",
      allWork: "Todo el trabajo →",
      rowAriaLabel: "Mira cómo se construyó {name}",
    },
    how: {
      label: "Cómo construyo",
      title: "De la idea a algo que la gente puede usar.",
      steps: [
        {
          title: "Entender el problema.",
          text: "Empiezo por quién tiene el problema y qué debe pasar para resolverlo. El stack viene después.",
        },
        {
          title: "Construir la primera versión.",
          text: "Decido qué entra primero y qué se queda fuera. Después la diseño y la construyo de punta a punta.",
        },
        {
          title: "Ponerla en manos reales.",
          text: "La usa la gente que tiene el problema. Miro lo que hacen, no lo que dicen.",
        },
        {
          title: "Decidir el siguiente paso.",
          text: "El uso real decide qué construir después, qué cambiar y qué quitar.",
        },
      ],
      note: "La IA es parte de mi proceso. Los agentes me ayudan a construir más rápido; el resultado lo controlo yo.",
    },
    opinions: {
      label: "Opiniones",
      title: "Opiniones con las que construyo.",
      items: [
        "Un prototipo que nadie usa es un mockup caro.",
        "Elige el problema antes que el stack.",
        "La primera versión se valida con un usuario real, no con una presentación.",
        "No reconstruyas lo que ya existe; constrúyele encima.",
        "A tu cliente no le importa tu stack.",
        "La IA acelera al que ya sabe qué construir.",
      ],
    },
    writing: {
      label: "Escritos",
      title: "Notas sobre construir con IA.",
      lead: "Escribo cuando un proyecto me enseña algo: lo que funcionó y lo que no.",
      readingTime: "{minutes} min de lectura",
      onlyInEnglish: "Solo en inglés",
      allWriting: "Todos los escritos →",
    },
    contact: {
      label: "Contacto",
      title: "Cuéntame qué quieres construir.",
      text: "Una idea de producto o un puesto en tu equipo. Con unas líneas basta para empezar.",
      copy: "Copiar",
      copied: "Copiado",
      copyAriaLabel: "Copiar correo",
      copiedAnnouncement: "Correo copiado al portapapeles",
    },
  },
  notFound: {
    text: "Esta página no existe. Esto sí:",
  },
};
