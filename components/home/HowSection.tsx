import { SectionLabel } from "@/components/ui/SectionLabel";
import type { Messages } from "@/lib/i18n";

export function HowSection({ number, copy }: { number: number; copy: Messages["home"]["how"] }) {
  return (
    <div className="pg">
      <section className="pg-sec" aria-labelledby="how-title">
        <div className="pg-grid">
          <div className="pg-full">
            <SectionLabel number={number}>{copy.label}</SectionLabel>
          </div>
          <h2 className="er-h2 pg-full" id="how-title">
            {copy.title}
          </h2>
          <ol className="er-steps pg-full">
            {copy.steps.map((step, index) => (
              <li key={step.title} className="er-step">
                <span className="er-step__num">{String(index + 1).padStart(2, "0")}</span>
                <h3 className="er-step__title">{step.title}</h3>
                <p className="er-step__text">{step.text}</p>
              </li>
            ))}
          </ol>
          <p className="er-body pg-full pg-note">{copy.note}</p>
        </div>
      </section>
    </div>
  );
}
