import Link from "next/link";
import { format, type Messages } from "@/lib/i18n";
import type { CaseStudy } from "@/lib/content";

type NextProjectProps = { from: string; next: CaseStudy; href: string; copy: Messages["work"]["case"] };

// The page's one colour block: the work block's treatment, one row wide.
export function NextProject({ from, next, href, copy }: NextProjectProps) {
  return (
    <nav className="er-on-accent pg-next" aria-label={copy.next}>
      <div className="pg">
        <Link
          className="pg-next__link"
          href={href}
          prefetch
          aria-label={format(copy.nextAriaLabel, { name: next.name })}
          data-track="next_project_click"
          data-track-from={from}
          data-track-to={next.slug}
        >
          <span className="er-meta pg-next__label">{copy.next}</span>
          <span className="er-h2 pg-next__name">{next.name}</span>
          <span className="pg-next__line">{next.line}</span>
          <span className="pg-next__arrow" aria-hidden="true">
            →
          </span>
        </Link>
      </div>
    </nav>
  );
}
