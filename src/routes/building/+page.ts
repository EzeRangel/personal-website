import type { PageLoad } from "./$types";

export const prerender = true;

export const load: PageLoad = async () => {
	return {
		seo: {
			title: "Building",
			description: `
      A collection of personal and professional projects that showcase my experiments with new technologies, ideas, or unconventional workflows.
      `,
			url: "https://ezerangel.com/building"
		}
	};
};
