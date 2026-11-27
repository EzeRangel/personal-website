import { site } from "@/config/site";

export const socialLinks = [
  { network: "github", label: "GitHub", href: site.social.github },
  { network: "linkedin", label: "LinkedIn", href: site.social.linkedin },
  { network: "x", label: "X", href: site.social.x },
] as const;
