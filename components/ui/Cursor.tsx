type CursorProps = { variant?: "sans" | "serif"; blink?: boolean };

// None of the three fonts has a ■ glyph, so the cursor is always drawn with CSS.
export function Cursor({ variant = "sans", blink = false }: CursorProps) {
  const className = ["er-cursor", variant === "serif" && "er-cursor--serif", blink && "er-cursor--blink"]
    .filter(Boolean)
    .join(" ");
  return <span className={className} aria-hidden="true" />;
}
