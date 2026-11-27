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
    footer: { builtIn: "Hecho en Mazatlán, México.", privacy: "Privacidad", rss: "RSS", cookieSettings: "Preferencias de cookies" },
    cookies: {
      text: "Este sitio usa Google Analytics para saber qué páginas se leen. Solo se carga si aceptas.",
      accept: "Aceptar",
      decline: "Rechazar",
      privacy: "Privacidad",
      current: "elección actual",
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
  work: {
    // Fuente: "Arquitectura y copy de las páginas internas" (27 nov).
    index: {
      seoTitle: "Trabajo: productos de punta a punta · Ezequiel Rangel",
      description:
        "Fiscalio y Relay: productos que construí de punta a punta desde su primera versión. Además, trabajo para clientes con mi rol y un enlace.",
      ogLabel: "TRABAJO · ES",
      ogTitle: "Lo que he construido.",
      kicker: "Trabajo",
      title: "Lo que he construido.",
      lead: "Primero van mis productos: muestran cómo decido qué construir. Abajo está el trabajo para clientes, donde la idea era de alguien más.",
      products: {
        label: "Productos",
        title: "Mis productos.",
        lead: "Los empiezo, los construyo de punta a punta y los pongo en manos de gente real.",
        facts: { role: "Rol", year: "Año", status: "Estado", stack: "Stack" },
        cta: "Mira cómo se construyó",
        visit: "Visitar {label}",
      },
      clients: {
        label: "Para clientes",
        title: "Construido para clientes.",
        lead: "Trabajo que entregué por contrato. Aquí no hay casos: qué construí, mi rol, el año y un enlace para verlo en vivo.",
        caption: "Trabajo para clientes",
        columns: { client: "Cliente", built: "Qué construí", role: "Rol", year: "Año", link: "Enlace" },
        visit: "Visitar",
        visitAriaLabel: "Visitar el sitio de {client} (se abre en otra pestaña)",
        confidential: "Cliente confidencial",
        underNda: "Bajo NDA",
        noLink: "Sin enlace público",
      },
    },
    case: {
      back: "← Trabajo",
      label: "CASO DE ESTUDIO",
      ogLabel: "CASO DE ESTUDIO · ES",
      facts: { role: "Rol", year: "Año", status: "Estado", platform: "Plataforma", builtWith: "Hecho con", links: "Enlaces" },
      // Igual que caseSections.es en lib/content.ts: los h2 de cada es.mdx.
      sections: ["El problema", "La decisión", "Cómo se construyó", "Dónde está hoy"],
      decision: { built: "Construido primero", left: "Fuera de la primera versión" },
      ai: { product: "IA en el producto", workflow: "IA en mi proceso" },
      noResults: "Todavía no hay resultados que mostrar.",
      next: "Siguiente proyecto",
      nextAriaLabel: "Siguiente proyecto: {name}",
    },
  },
  writing: {
    index: {
      seoTitle: "Escritos: notas de lo que construyo · Ezequiel Rangel",
      description:
        "Notas técnicas de un product engineer en México: las decisiones detrás de lo que construyo, código que funcionó y lo que no. En inglés y en español.",
      ogLabel: "ESCRITOS · ES",
      kicker: "Escritos",
      title: "Notas de lo que construyo.",
      lead: "Notas técnicas y las decisiones detrás de lo que construyo. Cada una dice en qué idioma está.",
      rss: "Suscríbete por RSS",
      label: "Todos los escritos",
      yearCount: { one: "{count} texto", other: "{count} textos" },
      empty: "La primera nota viene en camino.",
      onlyInEnglish: "Solo en inglés",
      readingTime: "{minutes} min de lectura",
    },
    article: {
      back: "← Escritos",
      label: "Artículo",
      ogLabel: "ESCRITOS · ES",
      facts: { published: "Publicado", updated: "Actualizado", language: "Idioma", reading: "Lectura" },
      readingTime: "{minutes} min de lectura",
      otherLanguage: "También en inglés →",
      toc: "En esta página",
      note: "Nota",
      code: { copy: "Copiar", copied: "Copiado", ariaLabel: "Copiar código", announcement: "Código copiado al portapapeles" },
      aging: "Escrito en {year}. Algunos detalles pueden estar desactualizados.",
      published: "Publicado el {date}",
      edit: "Editar en GitHub",
      more: { label: "Más escritos", title: "Sigue leyendo", all: "Todos los escritos →" },
      demo: { reset: "Reiniciar", star: "{count} de 5 estrellas" },
    },
  },
  about: {
    seoTitle: "Sobre mí · Ezequiel Rangel, product engineer",
    description:
      "Soy Ezequiel Rangel, product engineer en Mazatlán, México. Más de 10 años construyendo productos web y móviles. Cómo trabajo y qué estoy buscando.",
    ogLabel: "SOBRE MÍ · ES",
    kicker: "Sobre mí",
    title: "Llevo más de 10 años construyendo producto.",
    bio: "Soy Ezequiel Rangel, product engineer en Mazatlán, México. Llevo más de 10 años construyendo productos web y móviles. Hoy construyo primeras versiones: prototipos que funcionan y que la gente puede usar.",
    products: { before: "Entre mis productos están ", and: " y ", after: "." },
    facts: {
      basedIn: { label: "Vivo en", value: "Mazatlán, México" },
      timeZone: { label: "Zona horaria", value: "UTC−7" },
      languages: { label: "Idiomas", value: "español · inglés" },
      email: { label: "Correo" },
    },
    path: {
      label: "Trayectoria",
      title: "Dónde he construido.",
      now: "hoy",
      allWork: "Todo el trabajo →",
    },
    how: {
      label: "Cómo trabajo",
      title: "Cómo trabajo.",
      items: [
        { title: "Remoto, desde Mazatlán.", text: "Trabajo en UTC−7." },
        { title: "En español o en inglés.", text: "Escribo, hablo y entrego en los dos. El trabajo no cambia con el idioma." },
        { title: "De punta a punta.", text: "Diseño y construyo toda la primera versión, de la interfaz a los datos." },
        { title: "IA en un ciclo que yo controlo.", text: "Los agentes me ayudan a planear, construir y revisar. Reviso cada cambio antes de publicarlo." },
      ],
    },
    seek: {
      label: "Qué busco",
      title: "Qué busco.",
      teams: {
        kicker: "Para equipos",
        title: "Un puesto en un equipo de producto.",
        text: "Product Engineer o Forward Deployed Engineer, donde me haga cargo de un producto desde la idea hasta su uso real.",
        link: "Cuéntame del puesto →",
        subject: "Role",
      },
      founders: {
        kicker: "Para fundadores",
        title: "Una primera versión por construir.",
        text: "Tienes una idea de producto y necesitas verla funcionando con gente real. Construyo esa primera versión contigo.",
        link: "Cuéntame tu idea →",
        subject: "Idea",
      },
    },
  },
  privacy: {
    // BORRADOR, sin revisión legal.
    seoTitle: "Privacidad · Ezequiel Rangel",
    description:
      "Qué datos recoge ezerangel.com y para qué: Google Analytics solo con tu consentimiento y tu correo solo para responderte cuando me escribes. Nada más.",
    kicker: "Privacidad",
    title: "Aviso de privacidad.",
    lead: "Qué recoge este sitio, para qué y cómo cambiar de opinión. Corto a propósito.",
    facts: {
      updated: { label: "Actualizado", value: "27 nov 2026" },
      appliesTo: { label: "Aplica a", value: "ezerangel.com" },
      contact: { label: "Contacto" },
    },
    toc: "En esta página",
    sections: {
      responsible: {
        title: "Quién es responsable",
        text: [
          "Este sitio es de Ezequiel Rangel, product engineer en Mazatlán, Sinaloa, México.",
          "Para cualquier tema sobre tus datos, escribe a {email}.",
        ],
      },
      collect: {
        title: "Qué recojo",
        text: [
          "Nada, salvo que aceptes la analítica.",
          "Si aceptas, Google Analytics 4 registra qué páginas visitas, cómo llegaste, tu dispositivo y navegador, y tu ubicación aproximada. Lo uso para saber qué páginas se leen. No vendo estos datos.",
          "Si me escribes, guardo tu correo y tu mensaje solo para responderte.",
        ],
      },
      cookies: {
        title: "Cookies",
        intro: "Estas son las únicas cookies que crea este sitio, y solo después de que aceptas.",
        columns: { name: "Nombre", purpose: "Para qué", duration: "Duración" },
        rows: [
          { name: "_ga", purpose: "Distingue visitas (Google Analytics)", duration: "2 años" },
          { name: "_ga_PRVB43G65X", purpose: "Mantiene el estado de la sesión (Google Analytics)", duration: "2 años" },
        ],
        outro: "Tu elección, tu tema y tu idioma se guardan en tu navegador y nunca me llegan.",
      },
      processors: {
        title: "Quién más los procesa",
        text: [
          "Google procesa los datos de analítica. Vercel aloja el sitio y procesa datos técnicos de cada visita para servir las páginas.",
        ],
      },
      rights: {
        title: "Tu elección y tus derechos",
        text: [
          "Puedes cambiar tu elección de cookies cuando quieras. También puedes pedir ver, corregir o borrar tus datos, oponerte a su uso (derechos ARCO) o retirar tu consentimiento escribiendo a {email}.",
        ],
        change: "Cambiar elección de cookies",
        google: "Política de privacidad de Google",
      },
      changes: {
        title: "Cambios",
        text: ["Si este aviso cambia, la fecha de arriba también cambia."],
      },
    },
  },
  notFound: {
    seoTitle: "Página no encontrada · Ezequiel Rangel",
    label: "404 · No encontrada",
    text: "Esta página no existe. Esto sí:",
    links: [
      { path: "/", title: "Inicio", text: "Construyo primeras versiones." },
      { path: "/work", title: "Trabajo", text: "Fiscalio y Relay: cómo se construyó cada uno." },
      { path: "/writing", title: "Escritos", text: "Notas de lo que construyo." },
    ],
    mail: "¿Buscas algo en particular?",
  },
  retired: {
    seoTitle: "Página retirada · Ezequiel Rangel",
    label: "410 · Retirada",
    text: "Retiré esta página. Esto es lo que construyo ahora:",
  },
};
