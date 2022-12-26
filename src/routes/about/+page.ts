import type { PageLoad } from "./$types";

export const load: PageLoad = async () => {
  return {
    seo: {
      title: "About me • Ezequiel Rangel",
      description: "Know more about my career, my professional skills and projects I can help you with."
    }
  }
};