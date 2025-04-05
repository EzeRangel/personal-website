export default async function fetchLLMContext(slug: string) {
	const markdown = await import(`$lib/llms/${slug}.md?raw`);

	if (!markdown) {
		throw new Error(
			"An error occurred while trying to fetch the blog post context. Perhaps the post doesn't support Prompt Mode?"
		);
	}

	const Content = markdown.default;

	if (typeof Content !== "string") {
		throw new Error("The content of the LLM text does not have a correct type");
	}

	return Content as string;
}
