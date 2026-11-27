export function SectionLabel({ number, children }: { number: number; children: React.ReactNode }) {
  return (
    <div className="er-label">
      <span className="er-label__mark" aria-hidden="true" />
      <span className="er-label__num">{String(number).padStart(2, "0")}</span>
      <span>{children}</span>
    </div>
  );
}
