// Homepage copy v1 — English (/). Source: "ezerangel.com — Arquitectura del sitio y copy del Homepage v1".
// Same keys as es.ts. Do not edit wording without updating the copy doc.

export const en = {
  meta: {
    title: "Ezequiel Rangel — Product engineer",
    description:
      "Ezequiel Rangel, product engineer in Mazatlán, Mexico. I build first versions of web and mobile products: working prototypes people can use.",
    ogTitle: "I build first versions.",
    ogLabel: "HOME · EN",
  },
  global: {
    skipToContent: "Skip to content",
    nav: { work: "Work", writing: "Writing", about: "About", contact: "Contact" },
    navLabel: "Main",
    menu: { open: "Menu", close: "Close" },
    theme: { label: "Theme", system: "System", light: "Light", dark: "Dark" },
    language: {
      label: "Language",
      switchTo: "ES",
      switchAriaLabel: "Read this page in Spanish",
      suggestion: "This page is also in Spanish.",
      suggestionLink: "Read it in Spanish →",
    },
    footer: { builtIn: "Built in Mazatlán, Mexico.", privacy: "Privacy", rss: "RSS" },
    cookies: {
      text: "This site uses Google Analytics to see which pages get read. It only loads if you accept.",
      accept: "Accept",
      decline: "Decline",
      privacy: "Privacy",
    },
  },
  home: {
    hero: {
      name: "Ezequiel Rangel",
      descriptor: "Product engineer",
      // Render "first" in Instrument Serif italic. The block cursor goes right after the period.
      tagline: { before: "I build ", emphasis: "first", after: " versions." },
      lead: "I turn product ideas into working prototypes that real people can use. More than 10 years building web and mobile products.",
      cta: "Tell me what you want to build",
    },
    work: {
      label: "Work",
      title: "Look at what I build.",
      lead: "Three products of my own, built end to end. They are the proof of how I work.",
      allWork: "All work →",
      rowAriaLabel: "See how {name} was built",
    },
    how: {
      label: "How I build",
      title: "From idea to something people can use.",
      steps: [
        {
          title: "Understand the problem.",
          text: "I start with who has the problem and what must be true to solve it. The stack comes later.",
        },
        {
          title: "Build the first version.",
          text: "I decide what goes in first and what stays out. Then I design and build it end to end.",
        },
        {
          title: "Put it in real hands.",
          text: "The people who have the problem use it. I watch what they do, not what they say.",
        },
        {
          title: "Decide the next step.",
          text: "Real use decides what to build next, what to change and what to drop.",
        },
      ],
      note: "AI is part of my workflow. Agents help me build faster; I stay in control of the result.",
    },
    opinions: {
      label: "Opinions",
      title: "Opinions I build by.",
      // EN versions are a draft pending Ezequiel's review; ES versions are approved.
      items: [
        "A prototype nobody uses is an expensive mockup.",
        "Pick the problem before the stack.",
        "A first version is validated by a real user, not by a pitch deck.",
        "Don’t rebuild what already exists. Build on top of it.",
        "Your client doesn’t care about your stack.",
        "AI speeds up the people who already know what to build.",
      ],
    },
    writing: {
      label: "Writing",
      title: "Notes on building with AI.",
      lead: "I write when a project teaches me something: what worked, and what didn’t.",
      readingTime: "{minutes} min read",
      onlyInEnglish: "", // not shown in English: English is the original
      allWriting: "All writing →",
    },
    contact: {
      label: "Contact",
      title: "Tell me what you want to build.",
      text: "An idea for a product, or a role on your team. A few lines are enough to start.",
      copy: "Copy",
      copied: "Copied",
      copyAriaLabel: "Copy email address",
      copiedAnnouncement: "Email copied to clipboard",
    },
  },
  notFound: {
    text: "This page doesn't exist. This does:",
  },
} as const;

export type Messages = typeof en;
