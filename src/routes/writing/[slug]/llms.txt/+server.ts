import type { MDXPost } from "$lib/types";
import fetchLLMContext from "$lib/util/fetchLLMContext";
import { error, text, type RequestHandler } from "@sveltejs/kit";

export const GET: RequestHandler = async ({ params }) => {
	// First I need to make sure that the post is enabled for the PromptMode
	const post: MDXPost = await import(`$lib/blog/${params.slug}.md`);
	const { supports_prompt_mode } = post.metadata;

	if (supports_prompt_mode && params.slug) {
		const content = await fetchLLMContext(params.slug);

		return text(content, { headers: { "Content-Type": "text/plain" } });
	}

	return error(404, "There's no llms file for this route");
};
