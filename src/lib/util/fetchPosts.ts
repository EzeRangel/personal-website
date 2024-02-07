import type { MDXPost } from "$lib/types";

export default async function fetchPosts() {
	const allFiles = import.meta.glob<MDXPost>("/src/lib/blog/*.md");
	const iterableFiles = Object.entries(allFiles);

	const allPosts = await Promise.all(
		iterableFiles.map(async ([path, promise]) => {
			const post = await promise();
			const postPath = path.slice(8, -3).replace("blog", "writing");

			return {
				path: postPath,
				meta: post.metadata
			};
		})
	);

	return allPosts;
}
