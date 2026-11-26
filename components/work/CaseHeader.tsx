import Link from "next/link";
import { StatusChip } from "@/components/ui/StatusChip";
import type { CaseStudy } from "@/lib/content";
import type { Messages } from "@/lib/i18n";

type CaseHeaderProps = { study: CaseStudy; backHref: string; copy: Messages["work"]["case"] };

export function CaseHeader({ study, backHref, copy }: CaseHeaderProps) {
  const { facts } = copy;
  return (
    <header className="pg-case-head">
      <Link className="pg-case-back" href={backHref}>
        {copy.back}
      </Link>
      <p className="er-meta pg-case-kicker">
        <span className="er-label__mark" aria-hidden="true" />
        {copy.label}
      </p>
      <h1 className="er-h1 pg-case-title">{study.name}</h1>
      <p className="er-lead pg-case-lead">{study.lead}</p>

      <dl className="pg-facts">
        <div className="pg-facts__item">
          <dt>{facts.role}</dt>
          <dd>{study.role}</dd>
        </div>
        <div className="pg-facts__item">
          <dt>{facts.year}</dt>
          <dd className="er-tabular">{study.year}</dd>
        </div>
        <div className="pg-facts__item">
          <dt>{facts.status}</dt>
          <dd>
            <StatusChip>{study.status}</StatusChip>
          </dd>
        </div>
        <div className="pg-facts__item">
          <dt>{facts.platform}</dt>
          <dd>{study.platform}</dd>
        </div>
        <div className="pg-facts__item">
          <dt>{facts.builtWith}</dt>
          <dd>{study.builtWith.join(" · ")}</dd>
        </div>
        {study.links.length > 0 && (
          <div className="pg-facts__item">
            <dt>{facts.links}</dt>
            <dd>
              <ul className="pg-facts__links">
                {study.links.map((link) => (
                  <li key={link.href}>
                    <a
                      className="er-link"
                      href={link.href}
                      rel="noopener"
                      data-track="case_link_click"
                      data-track-project={study.slug}
                      data-track-link={link.label}
                    >
                      {link.label} ↗
                    </a>
                  </li>
                ))}
              </ul>
            </dd>
          </div>
        )}
      </dl>
    </header>
  );
}
