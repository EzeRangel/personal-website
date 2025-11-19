import type { PageLoad } from "./$types";

export const load: PageLoad = async () => {
	return {
		seo: {
			title: "Building websites that save money and time",
			description: `
      I help businesses stop losing customers to poor web design. I fix UI bugs, slow load times, and mobile issues that hurt trust and conversions.
      `,
			url: "https://ezerangel.com"
		}
	};
};
