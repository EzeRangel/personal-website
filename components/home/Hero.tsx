import { Cursor } from "@/components/ui/Cursor";
import type { Messages } from "@/lib/i18n";

export function Hero({ copy }: { copy: Messages["home"]["hero"] }) {
  return (
    <div className="pg">
      <section className="er-hero pg-hero" aria-labelledby="hero-title">
        <div className="pg-ident">
          <p className="pg-name">{copy.name}</p>
          <p className="er-meta">{copy.descriptor}</p>
        </div>
        <h1 className="er-display" id="hero-title">
          {copy.tagline.before}
          <em className="er-em">{copy.tagline.emphasis}</em>
          {copy.tagline.after}
          <Cursor variant="serif" blink />
        </h1>
        <p className="er-lead">{copy.lead}</p>
        <div className="er-hero__ctas">
          <a className="er-btn er-btn--primary" href="#contact">
            {copy.cta} <span className="er-btn__arrow" aria-hidden="true">→</span>
          </a>
        </div>
      </section>
    </div>
  );
}
