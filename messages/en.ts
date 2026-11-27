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
    footer: { builtIn: "Built in Mazatlán, Mexico.", privacy: "Privacy", rss: "RSS", cookieSettings: "Cookie settings" },
    cookies: {
      text: "This site uses Google Analytics to see which pages get read. It only loads if you accept.",
      accept: "Accept",
      decline: "Decline",
      privacy: "Privacy",
      // Reopened from "Cookie settings": the current choice is marked.
      current: "current choice",
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
  work: {
    // Work index (/work). Source: "Arquitectura y copy de las páginas internas" (Nov 27).
    index: {
      seoTitle: "Work: products I built end to end · Ezequiel Rangel",
      description:
        "Fiscalio, Relay and JobSnap: products I built end to end, from the first version. Plus work I shipped for clients, with my role and a live link.",
      ogLabel: "WORK · EN",
      ogTitle: "What I’ve built.",
      kicker: "Work",
      // The block cursor goes right after the period.
      title: "What I’ve built.",
      lead: "My own products come first: they show how I decide what to build. Below is work for clients, where someone else owned the idea.",
      products: {
        label: "Products",
        title: "My own products.",
        lead: "I start them, build them end to end and put them in front of real people.",
        facts: { role: "Role", year: "Year", status: "Status", stack: "Stack" },
        cta: "See how it was built",
        // A link whose label is a domain (fiscalio.app) reads "Visit fiscalio.app ↗".
        visit: "Visit {label}",
      },
      clients: {
        label: "Client work",
        title: "Built for clients.",
        lead: "Work I shipped as a contractor. No case studies here: what I built, my role, the year and a link to see it live.",
        caption: "Client work",
        columns: { client: "Client", built: "What I built", role: "Role", year: "Year", link: "Link" },
        visit: "Visit",
        visitAriaLabel: "Visit {client}’s site (opens in a new tab)",
        confidential: "Confidential client",
        underNda: "Under NDA",
        noLink: "No public link",
      },
    },
    // Fixed texts of every case study (/work/[slug]). Source: "Arquitectura de los casos de estudio".
    case: {
      back: "← Work",
      label: "CASE STUDY",
      ogLabel: "CASE STUDY · EN",
      facts: { role: "Role", year: "Year", status: "Status", platform: "Platform", builtWith: "Built with", links: "Links" },
      // Must match caseSections.en in lib/content.ts: the h2s of every en.mdx.
      sections: ["The problem", "The decision", "How it was built", "Where it stands"],
      decision: { built: "Built first", left: "Left out" },
      ai: { product: "AI in the product", workflow: "AI in my workflow" },
      noResults: "No results to show yet.",
      next: "Next project",
      nextAriaLabel: "Next project: {name}",
    },
  },
  writing: {
    // Writing index (/writing). Source: "Arquitectura y copy de las páginas internas".
    index: {
      seoTitle: "Writing: notes from building · Ezequiel Rangel",
      description:
        "Technical notes from a product engineer in Mexico: the decisions behind what I build, code that worked and what did not. In English, some in Spanish.",
      ogLabel: "WRITING · EN",
      kicker: "Writing",
      title: "Notes from building.",
      lead: "Technical notes and the decisions behind what I build. Each one says which language it’s in.",
      rss: "Subscribe via RSS",
      label: "All writing",
      yearCount: { one: "{count} post", other: "{count} posts" },
      empty: "The first note is on its way.",
      onlyInEnglish: "", // English is the original: nothing to say
      readingTime: "{minutes} min read",
    },
    // Article template (/writing/[slug]).
    article: {
      back: "← Writing",
      label: "Article",
      ogLabel: "WRITING · EN",
      facts: { published: "Published", updated: "Updated", language: "Language", reading: "Reading" },
      readingTime: "{minutes} min read",
      otherLanguage: "Also in Spanish →",
      toc: "On this page",
      note: "Note",
      code: { copy: "Copy", copied: "Copied", ariaLabel: "Copy code", announcement: "Code copied to clipboard" },
      aging: "Written in {year}. Some details may be out of date.",
      published: "Published {date}",
      edit: "Edit on GitHub",
      more: { label: "More writing", title: "Keep reading", all: "All writing →" },
      demo: { reset: "Reset", star: "{count} of 5 stars" },
    },
  },
  about: {
    // About (/about). Source: "Arquitectura y copy de las páginas internas".
    seoTitle: "About · Ezequiel Rangel, product engineer",
    description:
      "I’m Ezequiel Rangel, a product engineer in Mazatlán, Mexico. More than 10 years building web and mobile products. How I work and what I’m looking for.",
    ogLabel: "ABOUT · EN",
    kicker: "About",
    title: "I’ve been building product for more than ten years.",
    // Brandbook short bio. "{products}" becomes the three product names, linked when they have a case.
    bio: "I’m Ezequiel Rangel, a product engineer based in Mazatlán, Mexico. For more than a decade I’ve built web and mobile products. Now I build first versions: working prototypes people can use.",
    products: { before: "My own products include ", and: " and ", after: "." },
    facts: {
      basedIn: { label: "Based in", value: "Mazatlán, Mexico" },
      timeZone: { label: "Time zone", value: "UTC−7" },
      languages: { label: "Languages", value: "English · Spanish" },
      email: { label: "Email" },
    },
    path: {
      label: "Path",
      title: "Where I’ve built.",
      now: "now",
      allWork: "All work →",
    },
    how: {
      label: "How I work",
      title: "How I work.",
      items: [
        { title: "Remote, from Mazatlán.", text: "I work in UTC−7." },
        { title: "In English or Spanish.", text: "I write, talk and ship in both. The work doesn’t change with the language." },
        { title: "End to end.", text: "I design and build the whole first version, from the interface to the data." },
        { title: "AI in a loop I control.", text: "Agents help me plan, build and review. I check every change before it ships." },
      ],
    },
    seek: {
      label: "What I’m looking for",
      title: "What I’m looking for.",
      teams: {
        kicker: "For teams",
        title: "A role on a product team.",
        text: "Product Engineer or Forward Deployed Engineer roles, where I own a product from the idea to real use.",
        link: "Tell me about the role →",
        subject: "Role",
      },
      founders: {
        kicker: "For founders",
        title: "A first version to build.",
        text: "You have a product idea and need it working in front of real people. I build that first version with you.",
        link: "Tell me about your idea →",
        subject: "Idea",
      },
    },
  },
  privacy: {
    // Privacy notice (/privacy). DRAFT, not reviewed by a lawyer. Source: "Arquitectura y copy de las páginas internas".
    seoTitle: "Privacy · Ezequiel Rangel",
    description:
      "What ezerangel.com collects and why: Google Analytics only if you give consent, and your email only to reply when you write to me. Nothing else.",
    kicker: "Privacy",
    title: "Privacy notice.",
    lead: "What this site collects, why, and how to change your mind. Short on purpose.",
    facts: {
      updated: { label: "Updated", value: "[DATE]" },
      appliesTo: { label: "Applies to", value: "ezerangel.com" },
      contact: { label: "Contact" },
    },
    toc: "On this page",
    sections: {
      responsible: {
        title: "Who is responsible",
        text: [
          "This site belongs to Ezequiel Rangel, product engineer in Mazatlán, Sinaloa, Mexico. Address for notices: [ADDRESS].",
          "For anything about your data, write to {email}.",
        ],
      },
      collect: {
        title: "What I collect",
        text: [
          "Nothing, unless you accept analytics.",
          "If you accept, Google Analytics 4 records which pages you visit, how you got here, your device and browser, and your approximate location. I use it to see which pages get read. I don’t sell this data.",
          "If you write to me, I keep your email and message only to reply.",
        ],
      },
      cookies: {
        title: "Cookies",
        intro: "These are the only cookies this site sets, and only after you accept.",
        columns: { name: "Name", purpose: "Purpose", duration: "Duration" },
        rows: [
          { name: "_ga", purpose: "Tells visits apart (Google Analytics)", duration: "2 years" },
          { name: "_ga_PRVB43G65X", purpose: "Keeps the session state (Google Analytics)", duration: "2 years" },
        ],
        outro: "Your choice, theme and language are saved in your browser and never sent to me.",
      },
      processors: {
        title: "Who else processes it",
        text: [
          "Google processes the analytics data. Vercel hosts the site and processes technical data from each visit to serve the pages.",
        ],
      },
      rights: {
        title: "Your choice and your rights",
        text: [
          "You can change your cookie choice at any time. You can also ask to see, correct or delete your data, object to its use (ARCO rights) or withdraw your consent by writing to {email}.",
        ],
        change: "Change cookie choice",
        google: "Google’s privacy policy",
      },
      changes: {
        title: "Changes",
        text: ["If this notice changes, the date at the top changes too."],
      },
    },
  },
  notFound: {
    seoTitle: "Page not found · Ezequiel Rangel",
    label: "404 · Not found",
    text: "This page doesn't exist. This does:",
    links: [
      { path: "/", title: "Home", text: "I build first versions." },
      { path: "/work", title: "Work", text: "Fiscalio, Relay and JobSnap: how each one was built." },
      { path: "/writing", title: "Writing", text: "Notes from building." },
    ],
    mail: "Looking for something specific?",
  },
  retired: {
    seoTitle: "Page retired · Ezequiel Rangel",
    label: "410 · Retired",
    text: "I retired this page. This is what I build now:",
  },
} as const;

export type Messages = typeof en;
