import Image from "next/image";
import type { ResolvedScreen } from "@/lib/caseImages";

// Rendered by the page between 03 and 04 from the `screens` frontmatter. Real screenshots only.
export function ScreenGallery({ screens }: { screens: ResolvedScreen[] }) {
  return (
    <ul className="pg-gallery">
      {screens.map((screen) => (
        <li key={screen.data.src}>
          <figure className="pg-shot">
            <div className="pg-shot__frame">
              <Image src={screen.data} alt={screen.alt} sizes="(max-width: 640px) 100vw, (max-width: 1360px) 50vw, 620px" />
            </div>
            <figcaption className="er-small pg-shot__caption">{screen.caption}</figcaption>
          </figure>
        </li>
      ))}
    </ul>
  );
}
