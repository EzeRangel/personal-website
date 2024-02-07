import { ImageResponse } from "@ethercorps/sveltekit-og";
import type { RequestHandler } from "@sveltejs/kit";

const buildTemplate = (title: string, date?: string, description?: string) => {
	const dateTag = `<p class="font-body mb-2 text-xl font-bold capitalize">${date}</p>`;
	const descriptionTag = `<div>
					<p class="font-body text-4xl font-semibold">
						${description}
					</p>
				</div>`;

	return `
  <section tw="w-full h-full flex" style="background-image: linear-gradient(to right bottom, rgb(255, 228, 230), rgb(204, 251, 241))">
    <div tw="w-full h-full flex flex-col justify-between py-10 px-16">
      <div tw="flex flex-col gap-10">
        <div tw="flex">
					${date !== undefined ? dateTag : ""}
					<h1 tw="text-[80px] leading-[1] tracking-tighter">
						${title}
					</h1>
				</div>
				${description !== undefined ? descriptionTag : ""}
      </div>
      <div tw="flex">
        <span tw="rounded-full overflow-hidden inline-block">
          <img src="https://www.ezerangel.com/images/logo.png" width="60" />
        </span>
      </div>
    </div>
    </section>
  `;
};

const fontFile = await fetch(
	"https://www.ezerangel.com/fonts/dm-serif-display-all-400-normal.woff"
);
const fontData = await fontFile.arrayBuffer();

export const GET: RequestHandler = async ({ url }) => {
	let date = undefined;
	let title = "Building websites that save money and time • Ezequiel Rangel";
	let description = undefined;

	const hasTitle = url.searchParams.has("title");
	const hasDate = url.searchParams.has("date");
	const hasDescription = url.searchParams.has("description");

	if (hasTitle) {
		title = url.searchParams.get("title")?.slice(0, 100) as string;
	}

	if (hasDate) {
		const param = url.searchParams.get("date") as string;
		const parsed = new Date(param);
		date = parsed.toLocaleString("en-US", { dateStyle: "medium" });
	}

	if (hasDescription) {
		description = url.searchParams.get("description") as string;
	}

	const htmlTemplate = buildTemplate(title, date, description);

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
