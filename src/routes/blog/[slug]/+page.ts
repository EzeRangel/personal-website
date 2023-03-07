import type { MDXPost } from "$lib/types";
import type { SvelteComponent } from "svelte";
import type { PageLoad } from "./$types";

interface PageProps {
	post: {
		title: string;
		published_at: string;
		Content: SvelteComponent;
	};
}

export const load: PageLoad<PageProps> = async ({ params }) => {
	const post: MDXPost = await import(`../../../lib/blog/${params.slug}.md`);
	const { title, published_at } = post.metadata;
	const Content = post.default;

	return {
		post: {
			title,
			published_at,
			Content
		}
	};
};
