import type { MDXPost } from "$lib/types";
import { error, text, type RequestHandler } from "@sveltejs/kit";

export const GET: RequestHandler = async ({ params }) => {
	// First I need to make sure that the post is enabled for the PromptMode
	const post: MDXPost = await import(`$lib/blog/${params.slug}.md`);
	const { supports_prompt_mode } = post.metadata;

	if (supports_prompt_mode) {
		const markdown = await import(`$lib/llms/${params.slug}.md?raw`);
		const Content = markdown.default;

		return text(Content, { headers: { "Content-Type": "text/plain" } });
	}

	return error(404, "There's no llms file for this route");
};
