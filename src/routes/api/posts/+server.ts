import { json } from "@sveltejs/kit";
import fetchPosts from "$lib/util/fetchPosts";

export const GET = async () => {
	const posts = await fetchPosts();

	return json(posts);
};
