// Page head for inner pages: mono kicker, serif h1 with the block cursor, lead (max 2 sentences),
// then whatever the page adds (facts, links).
type PageHeadProps = {
  kicker?: string;
  title: string;
  lead?: React.ReactNode;
  className?: string;
  children?: React.ReactNode;
};

export function PageHead({ kicker, title, lead, className, children }: PageHeadProps) {
  return (
    <header className={["pg-pagehead", className].filter(Boolean).join(" ")}>
      {kicker && <p className="er-meta">{kicker}</p>}
      <h1 className="er-h1">
        {title}
        <span className="er-cursor er-cursor--serif" aria-hidden="true" />
      </h1>
      {lead && <p className="er-lead">{lead}</p>}
      {children}
    </header>
  );
}
