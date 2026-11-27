import { useId } from "react";

export type DecisionItem = { what: string; why: string };

type DecisionListsProps = {
  built: DecisionItem[];
  left: DecisionItem[];
  labels: { built: string; left: string };
};

function DecisionList({ title, items }: { title: string; items: DecisionItem[] }) {
  const id = useId();
  return (
    <section className="pg-decision" aria-labelledby={id}>
      <h3 className="er-h3 pg-decision__title" id={id}>
        {title}
      </h3>
      <ul className="pg-decision__list">
        {items.map((item, index) => (
          <li key={item.what} className="pg-decision__item">
            <span className="pg-decision__num" aria-hidden="true">
              {String(index + 1).padStart(2, "0")}
            </span>
            <p>
              <strong>{item.what}</strong> {item.why}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}

// "Built first" and "Left out", side by side on desktop. Each item is "what — why".
export function DecisionLists({ built, left, labels }: DecisionListsProps) {
  return (
    <div className="pg-decisions">
      <DecisionList title={labels.built} items={built} />
      <DecisionList title={labels.left} items={left} />
    </div>
  );
}
