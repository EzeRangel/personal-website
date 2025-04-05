import type { MDXPost } from "$lib/types";
import type { SvelteComponent } from "svelte";
import type { PageLoad } from "./$types";
import type { Config } from "@sveltejs/adapter-vercel";
import { redirect } from "@sveltejs/kit";

interface PageProps {
	post: {
		title: string;
		description: string;
		publishedAt: string;
		updatedAt?: string;
		supportsPromptMode?: boolean;
		Content: SvelteComponent;
	};
}

export const config: Config = {
	isr: {
		expiration: 60 * 60
	}
};

export const load: PageLoad<PageProps> = async ({ params }) => {
	const post: MDXPost = await import(`../../../lib/blog/${params.slug}.md`);
	const { title, description, published_at, updated_at, external, link, supports_prompt_mode } =
		post.metadata;
	const Content = post.default;

	if (external && link) {
		redirect(301, link);
	}

	return {
		seo: {
			title: `${title}`,
			description: description,
			url: `https://ezerangel.com/writing/${params.slug}`
		},
		post: {
			title,
			description,
			publishedAt: published_at,
			updatedAt: updated_at,
			supportsPromptMode: supports_prompt_mode,
			Content
		}
	};
};
