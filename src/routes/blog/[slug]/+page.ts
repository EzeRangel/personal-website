import type { MDXPost } from "$lib/types";
import type { SvelteComponent } from "svelte";
import type { PageLoad } from "./$types";

interface PageProps {
	post: {
		title: string;
		description: string;
		published_at: string;
		Content: SvelteComponent;
	};
}

export const load: PageLoad<PageProps> = async ({ params }) => {
	const post: MDXPost = await import(`../../../lib/blog/${params.slug}.md`);
	const { title, description, published_at } = post.metadata;
	const Content = post.default;

	return {
		seo: {
			title: `${title} • Ezequiel Rangel`,
			description: description,
			url: `https://www.ezerangel.com/blog/${params.slug}`
		},
		post: {
			title,
			description,
			published_at,
			Content
		}
	};
};
