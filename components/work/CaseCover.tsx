import Image from "next/image";
import type { ResolvedImage } from "@/lib/caseImages";

// The cover is the LCP element, so it's preloaded. It keeps the proportion of its file.
// No cover in the frontmatter = no block.
export function CaseCover({ image }: { image: ResolvedImage }) {
  return (
    <figure className="pg-shot pg-case-cover">
      <div className="pg-shot__frame">
        <Image src={image.data} alt={image.alt} preload sizes="(max-width: 1360px) 100vw, 1264px" />
      </div>
    </figure>
  );
}
