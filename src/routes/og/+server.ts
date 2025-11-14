import { ImageResponse } from "@ethercorps/sveltekit-og";
import type { RequestHandler } from "@sveltejs/kit";

const buildTemplate = (title: string) => {
	return `
  <section tw="w-full h-full">
		<img src="https://ezerangel.com/images/og-background.png" tw="absolute" />
    <div tw="w-full h-full flex flex-col justify-end py-20 px-16">
      <div tw="flex flex-col">
				<div tw="flex">
					<span
						tw="font-medium text-sm text-white rounded-full bg-fuchsia-900/20 py-2 px-4"
					>
						https://ezerangel.com
					</span>
				</div>
        <div tw="flex">
					<h1 tw="font-bold text-[80px] leading-[1] tracking-tighter text-white">
						${title}
					</h1>
				</div>
      </div>
    </div>
    </section>
  `;
};

const fontFile = await fetch("https://ezerangel.com/fonts/inter-latin-700-normal.woff");
const fontData: ArrayBuffer = await fontFile.arrayBuffer();

export const GET: RequestHandler = async ({ url }) => {
	let title = "Building websites that save money and time";

	const hasTitle = url.searchParams.has("title");

	if (hasTitle) {
		title = url.searchParams.get("title")?.slice(0, 100) as string;
	}

	const htmlTemplate = buildTemplate(title);

	return await new ImageResponse(htmlTemplate, {
		height: 630,
		width: 1200,
		fonts: [
			{
				name: "Inter Latin",
				data: fontData,
				weight: 700
			}
		]
	});
};
