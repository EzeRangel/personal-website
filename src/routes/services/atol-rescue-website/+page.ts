import type { PageLoad } from "./$types";

export const load: PageLoad = async () => {
	return {
		seo: {
			title: "Quick Wins for ATOL México Website | Ezequiel Rangel",
			description:
				"A quick expert review of an outdated website with clear suggestions to improve design, mobile performance, and user engagement.",
			url: `https://ezerangel.com/services/sb-rescue-website`
		}
	};
};
