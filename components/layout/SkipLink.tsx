export function SkipLink({ label }: { label: string }) {
  return (
    <a className="pg-skip" href="#main">
      {label}
    </a>
  );
}
