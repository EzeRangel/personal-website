import type { MDXComponents } from "mdx/types";

// Required by @next/mdx. Case-study components are passed per page (see components/work/caseMdx.tsx).
const components: MDXComponents = {};

export function useMDXComponents(): MDXComponents {
  return components;
}
