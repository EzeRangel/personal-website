import type { PageLoad } from "./$types";

export const load = (async () => {
	return {
		seo: {
			title: "Rescue Packages for Small Business Websites | Fix SEO & Speed",
			description:
				"Fix your outdated website in 3 days. Rescue Packages improve SEO, speed, and mobile usability for small businesses. No rebuilds. Just results.",
			url: `https://ezerangel.com/rescue-packages`
		}
	};
}) satisfies PageLoad;
