import type { MDXComponents } from "mdx/types";
import { BlueprintDiagram } from "@/components/work/BlueprintDiagram";
import { CaseReadMarker } from "@/components/work/CaseReadMarker";
import { DecisionLists, type DecisionItem } from "@/components/work/DecisionLists";
import { ScreenGallery } from "@/components/work/ScreenGallery";
import type { ResolvedScreen } from "@/lib/caseImages";
import type { CaseStudy } from "@/lib/content";
import type { Messages } from "@/lib/i18n";

const sectionKeys = ["problem", "decision", "build", "stands"] as const;

type CaseMdxContext = {
  study: CaseStudy;
  copy: Messages["work"]["case"];
  diagramSvg: string | null;
  screens: ResolvedScreen[];
};

// The MDX body is flat (h2, p, h3…). It renders inside a 12-column grid (.pg-case-body): each h2 becomes
// the numbered section label in columns 1–3 with a full-width rule above it, and the rest flows from
// column 4. The screen gallery isn't in the MDX: it's drawn right before "04 Where it stands".
export function caseMdxComponents({ study, copy, diagramSvg, screens }: CaseMdxContext): MDXComponents {
  const sections = copy.sections as readonly string[];

  return {
    h2: ({ children }) => {
      const index = sections.indexOf(String(children));
      const key = sectionKeys[index] ?? "section";
      return (
        <>
          {key === "stands" && screens.length > 0 && (
            <div className="pg-case-wide">
              <ScreenGallery screens={screens} />
            </div>
          )}
          <div className="pg-case-rule" aria-hidden="true" />
          <h2 className="er-label pg-case-h2" id={key} data-section={key}>
            <span className="er-label__mark" aria-hidden="true" />
            <span className="er-label__num">{String(index + 1).padStart(2, "0")}</span>
            <span>{children}</span>
            {key === "stands" && <CaseReadMarker project={study.slug} />}
          </h2>
        </>
      );
    },
    h3: ({ children }) => <h3 className="er-h3 pg-case-h3">{children}</h3>,
    a: ({ href = "", children }) => {
      const external = /^https?:\/\//.test(href);
      return (
        <a className="er-link" href={href} rel={external ? "noopener" : undefined}>
          {children}
          {external && " ↗"}
        </a>
      );
    },
    DecisionLists: ({ built, left }: { built: DecisionItem[]; left: DecisionItem[] }) => (
      <DecisionLists built={built} left={left} labels={copy.decision} />
    ),
    // No diagram file = section 03 stays text-only. Never a list of logos instead.
    BlueprintDiagram: () =>
      study.diagram && diagramSvg ? (
        <BlueprintDiagram svg={diagramSvg} alt={study.diagram.alt} description={study.diagram.description} />
      ) : null,
  };
}
