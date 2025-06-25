import type { PageLoad } from "./$types";

export const load = (async () => {
	return {
		seo: {
			title: "Thank You - Rescue Package",
			description:
				"Fix your outdated website in 3 days. Rescue Packages improve SEO, speed, and mobile usability for small businesses. No rebuilds. Just results."
		}
	};
}) satisfies PageLoad;
