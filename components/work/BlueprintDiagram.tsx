type BlueprintDiagramProps = { svg: string; alt: string; description: string };

function attribute(value: string): string {
  return value.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");
}

// The SVG comes from content/work/{slug}/ and is inlined so its classes pick up the theme tokens
// (styles/case.css). It gets role="img" and the alt as its name; the description is the text version
// below it. On narrow screens the drawing keeps its size and scrolls sideways inside its frame.
export function BlueprintDiagram({ svg, alt, description }: BlueprintDiagramProps) {
  const labelled = svg.replace(/<svg\b/, `<svg role="img" aria-label="${attribute(alt)}"`);
  return (
    <figure className="pg-blueprint">
      <div className="pg-blueprint__scroll" dangerouslySetInnerHTML={{ __html: labelled }} />
      {description && <figcaption className="er-small pg-blueprint__description">{description}</figcaption>}
    </figure>
  );
}
