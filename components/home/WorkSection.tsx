import Link from "next/link";
import { ProjectRow } from "@/components/home/ProjectRow";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { format, localePath, type Locale, type Messages } from "@/lib/i18n";
import type { Project } from "@/lib/content";

type WorkSectionProps = { locale: Locale; number: number; copy: Messages["home"]["work"]; projects: Project[] };

export function WorkSection({ locale, number, copy, projects }: WorkSectionProps) {
  return (
    <section className="er-work er-on-accent pg-work" aria-labelledby="work-title">
      <div className="pg">
        <SectionLabel number={number}>{copy.label}</SectionLabel>
        <h2 className="er-h2 er-work__title" id="work-title" style={{ marginBottom: "var(--space-4)" }}>
          {copy.title}
        </h2>
        <p className="pg-work-lead">{copy.lead}</p>
        <ul className="er-projects">
          {projects.map((project) => (
            <ProjectRow
              key={project.slug}
              project={project}
              href={localePath(locale, `/work/${project.slug}`)}
              ariaLabel={format(copy.rowAriaLabel, { name: project.name })}
            />
          ))}
        </ul>
        <div className="pg-more">
          <Link className="pg-on-accent-link" href={localePath(locale, "/work")}>
            {copy.allWork}
          </Link>
        </div>
      </div>
    </section>
  );
}
