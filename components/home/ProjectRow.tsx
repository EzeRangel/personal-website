import Link from "next/link";
import { StatusChip } from "@/components/ui/StatusChip";
import type { Project } from "@/lib/content";

export function ProjectRow({ project, href, ariaLabel }: { project: Project; href: string; ariaLabel: string }) {
  return (
    <li>
      <Link className="er-project" href={href} prefetch aria-label={ariaLabel} data-track="case_open" data-track-project={project.slug}>
        <span>
          <span className="er-project__name">{project.name}</span>
          <span className="er-project__line" style={{ display: "block" }}>
            {project.line}
          </span>
        </span>
        <span className="er-project__year">{project.year}</span>
        <StatusChip>{project.status}</StatusChip>
        <span className="er-project__arrow" aria-hidden="true">
          →
        </span>
      </Link>
    </li>
  );
}
