import type { MDXPost } from "$lib/types";
import fetchPosts from "$lib/util/fetchPosts";
import dayjs from "dayjs";
import type { PageLoad } from "./$types";
import type { Config } from "@sveltejs/adapter-vercel";

type PostMeta = MDXPost["metadata"];

interface PageProps {
	posts: {
		path: string;
		meta: PostMeta;
	}[];
}

export const config: Config = {
	isr: {
		expiration: 60 * 60
	}
};

export const load: PageLoad<PageProps> = async () => {
	const rawPosts = await fetchPosts();
	const posts = rawPosts.sort((a, b) => {
		return dayjs(b.meta.published_at).unix() - dayjs(a.meta.published_at).unix();
	});

	return {
		posts,
		seo: {
			title: `Writing`,
			description:
				"Brain dumps, explorations, and how-to guides. " +
				"I write about productivity, programming, user/dev experience and other topics.",
			url: `https://www.ezerangel.com/writing`
		}
	};
};
