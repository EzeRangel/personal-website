import type { PageLoad } from "./$types";

export const prerender = true;

export const load: PageLoad = async () => {
	return {
		seo: {
			title: "Building websites that makes PageSpeed happy • Ezequiel Rangel",
			description: `
      I am a Frontend Developer deeply interested in Javascript applications. I use the latest
      technology available to deliver highly performant products that saves money and time.
      `,
			url: "https://www.ezerangel.com/"
		}
	};
};
