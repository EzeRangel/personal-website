import Image from "next/image";
import Link from "next/link";
import { StatusChip } from "@/components/ui/StatusChip";
import type { ResolvedImage } from "@/lib/caseImages";
import type { ProjectListing } from "@/lib/content";
import { format, type Messages } from "@/lib/i18n";

type ProductItemProps = {
  product: ProjectListing;
  index: number;
  cover: ResolvedImage | null;
  // Only when the case is published: a draft has no page to link to yet.
  caseHref: string | null;
  copy: Messages["work"]["index"]["products"];
};

// Screenshot (7 columns) · number, name, line, facts and links (5 columns). Stacks below 1024 px.
export function ProductItem({ product, index, cover, caseHref, copy }: ProductItemProps) {
  // No real screenshot = no image at all (never a placeholder box); the body takes the wide column.
  const shot = cover ? (
    <span className="pg-shot__frame wk-shot__frame">
      <Image src={cover.data} alt="" preload={index === 0} sizes="(max-width: 1023px) 100vw, 740px" />
    </span>
  ) : null;

  return (
    <li className={shot ? "wk-item" : "wk-item wk-item--noshot"}>
      {!shot ? null : caseHref ? (
        // Same destination as the name and the button: hidden from keyboard and screen readers.
        <Link className="wk-shot" href={caseHref} prefetch tabIndex={-1} aria-hidden="true">
          {shot}
        </Link>
      ) : (
        <div className="wk-shot">{shot}</div>
      )}

      <div className="wk-body">
        <span className="wk-num er-tabular" aria-hidden="true">
          {String(index + 1).padStart(2, "0")}
        </span>
        <h3 className="er-h2 wk-name">
          {caseHref ? (
            <Link className="wk-name-link" href={caseHref} prefetch>
              {product.name}
            </Link>
          ) : (
            product.name
          )}
        </h3>
        <p className="er-lead wk-line">{product.line}</p>

        <dl className="wk-facts">
          <div>
            <dt>{copy.facts.role}</dt>
            <dd>{product.role}</dd>
          </div>
          <div>
            <dt>{copy.facts.year}</dt>
            <dd className="er-tabular">{product.year}</dd>
          </div>
          <div>
            <dt>{copy.facts.status}</dt>
            <dd>
              <StatusChip>{product.status}</StatusChip>
            </dd>
          </div>
          <div>
            <dt>{copy.facts.stack}</dt>
            <dd>{product.builtWith.length > 0 ? product.builtWith.join(" · ") : "[STACK]"}</dd>
          </div>
        </dl>

        {(caseHref || product.links.length > 0) && (
          <div className="wk-links">
            {caseHref && (
              <Link
                className="er-btn er-btn--secondary"
                href={caseHref}
                prefetch
                data-track="case_open"
                data-track-project={product.slug}
              >
                {copy.cta} <span className="er-btn__arrow" aria-hidden="true">→</span>
              </Link>
            )}
            {product.links.map((link) => (
              <a
                key={link.href}
                className="er-link"
                href={link.href}
                rel="noopener"
                data-track="product_link_click"
                data-track-project={product.slug}
                data-track-link={link.label}
              >
                {link.label.includes(".") ? format(copy.visit, { label: link.label }) : link.label} ↗
              </a>
            ))}
          </div>
        )}
      </div>
    </li>
  );
}
