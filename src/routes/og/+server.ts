import { ImageResponse } from "@ethercorps/sveltekit-og";
import type { RequestHandler } from "@sveltejs/kit";

const template = (title: string) => {
  return `
  <section tw="w-full h-full flex items-center bg-gradient-to-r from-rose-100 to-teal-100" style="background-image: linear-gradient(to right, #ffe4e6, #ccfbf1)">
    <div tw="mx-auto flex">
      <h1 tw="text-[80px] leading-[1] tracking-tighter font-display text-right">
        ${title}
      </h1>
    </div>
    </section>
  `
};

const fontFile = await fetch("https://ezerangel.com/fonts/dm-serif-display-all-400-normal.woff");
const fontData = await fontFile.arrayBuffer();

export const GET: RequestHandler = async ({ url }) => {
  const hasTitle = url.searchParams.has("title");
  const title = hasTitle ? url.searchParams.get("title")?.slice(0, 100) as string : "A default title";
  const htmlTemplate = template(title);

  return await ImageResponse(htmlTemplate, {
    height: 630,
    width: 1200,
    fonts: [
      {
        name: "DM Serif Display",
        data: fontData,
        weight: 400
      }
    ]
  });
};