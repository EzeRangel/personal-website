import { Children, isValidElement, type ReactElement, type ReactNode } from "react";
import Image, { type StaticImageData } from "next/image";
import type { MDXComponents } from "mdx/types";
import { CodeBlock } from "@/components/writing/CodeBlock";
import { RatingDemo } from "@/components/writing/RatingDemo";
import { headingId } from "@/lib/content";
import type { Messages } from "@/lib/i18n";

function text(node: ReactNode): string {
  if (typeof node === "string" || typeof node === "number") return String(node);
  if (Array.isArray(node)) return node.map(text).join("");
  if (isValidElement(node)) return text((node as ReactElement<{ children?: ReactNode }>).props.children);
  return "";
}

type ArticleMdxContext = { copy: Messages["writing"]["article"] };

// Elements an article body can use: h2 (serif, anchored, listed in "On this page"), h3, lists,
// fenced code with Copy, <Note>, <Figure>, <PullQuote> and the post-specific <RatingDemo>.
export function articleMdxComponents({ copy }: ArticleMdxContext): MDXComponents {
  return {
    h2: ({ children }) => <h2 id={headingId(text(children))}>{children}</h2>,
    a: ({ href = "", children }) => {
      const external = /^https?:\/\//.test(href);
      return (
        <a className="er-link" href={href} rel={external ? "noopener" : undefined}>
          {children}
          {external && " ↗"}
        </a>
      );
    },
    pre: ({ children }) => {
      const child = Children.only(children) as ReactElement<{ className?: string; children?: ReactNode }>;
      const language = child.props.className?.match(/language-(\w+)/)?.[1] ?? null;
      const code = text(child.props.children).replace(/\n$/, "");
      return (
        <CodeBlock language={language} code={code} labels={copy.code}>
          <code>{code}</code>
        </CodeBlock>
      );
    },
    Note: ({ children }: { children: ReactNode }) => (
      <aside className="wr-note" aria-label={copy.note}>
        <span className="er-meta" aria-hidden="true">
          {copy.note}
        </span>
        {children}
      </aside>
    ),
    Figure: ({ image, alt, caption }: { image: StaticImageData; alt: string; caption?: string }) => (
      <figure className="wr-fig">
        <span className="pg-shot__frame">
          <Image src={image} alt={alt} sizes="(max-width: 1023px) 100vw, 760px" />
        </span>
        {caption && <figcaption>{caption}</figcaption>}
      </figure>
    ),
    PullQuote: ({ children }: { children: ReactNode }) => <p className="wr-pull">{children}</p>,
    RatingDemo: ({ combinator }: { combinator?: "subsequent" | "next" }) => <RatingDemo combinator={combinator} labels={copy.demo} />,
  };
}
