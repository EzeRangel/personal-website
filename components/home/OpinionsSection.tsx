import { SectionLabel } from "@/components/ui/SectionLabel";
import type { Messages } from "@/lib/i18n";

export function OpinionsSection({ number, copy }: { number: number; copy: Messages["home"]["opinions"] }) {
  return (
    <div className="pg">
      <section className="pg-sec" aria-labelledby="op-title">
        <div className="pg-grid">
          <div className="pg-full">
            <SectionLabel number={number}>{copy.label}</SectionLabel>
          </div>
          <h2 className="er-h2 pg-full" id="op-title">
            {copy.title}
          </h2>
          <ol className="er-opinions pg-full">
            {copy.items.map((item, index) => (
              <li key={item} className="er-opinion">
                <span className="er-opinion__num">{String(index + 1).padStart(2, "0")}</span>
                <p className="er-opinion__text">{item}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </div>
  );
}
