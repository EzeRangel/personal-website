import type { StaticImageData } from "next/image";
import type { CaseImage, CaseScreen } from "@/lib/content";

export type ResolvedImage = { data: StaticImageData; alt: string };
export type ResolvedScreen = ResolvedImage & { caption: string };

// Screenshots live in content/work/{slug}/screens/ and are imported statically: the URL carries a
// content hash (a re-cropped file shows up right away, no stale image cache) and next/image gets the
// real width and height.
async function load(slug: string, file: string): Promise<StaticImageData> {
  if (!/^[\w-]+\.(jpe?g|png|webp|avif)$/i.test(file)) throw new Error(`content/work/${slug}: unsupported screenshot "${file}"`);
  return (await import(`@/content/work/${slug}/screens/${file}`)).default;
}

export async function resolveImage(slug: string, image: CaseImage): Promise<ResolvedImage> {
  return { data: await load(slug, image.src), alt: image.alt };
}

export async function resolveScreens(slug: string, screens: CaseScreen[]): Promise<ResolvedScreen[]> {
  return Promise.all(screens.map(async (screen) => ({ ...(await resolveImage(slug, screen)), caption: screen.caption })));
}
