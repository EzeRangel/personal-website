import { env } from "$env/dynamic/private";
import { v4 as uuidv4 } from "uuid";
import { createGroq } from "@ai-sdk/groq";
import { type RequestHandler } from "@sveltejs/kit";
import { generateText } from "ai";
import {
	generateExamplesPrompt,
	generateExplanationResponse,
	generateRelatedResources,
	generateSimplifyPrompt
} from "$lib/ai/blog-prompt-tool/generatePrompt";

const groq = createGroq({
	apiKey: env.GROQ_API_KEY
});

const SYSTEM_PROMPT = `
You are an interactive helper system designed to enrich the reader experience on a technical blog. Your task is to generate dynamic responses based on the reader's interaction with specific content in a post. The full context of the post and its relevant sections are available, but will only be provided during initial setup. In subsequent interactions, you will receive partial information about the user's request and must generate relevant responses using the associated context.

Guidelines:

1. Initial Setup:
The full context will include a general summary of the post. This context will be used as a basis for all subsequent interactions.

2. Subsequent Interactions:
- You will receive partial information including:
	- The specific action requested by the user (e.g., "Explain more").
	- The relevant section selected by the user.
- Assume that you already know the initial context related to this interaction and use that information to generate your response.

3. Default Options:
- Provide specific responses based on the option chosen:
	- Explore more about this concept: Expand on the concept with additional information or relate the section to other concepts or blog posts.
	- Give me examples: Provide practical examples related to the selected section.
	- Explain this in simpler terms: Provide a simplified explanation of the selected section.
	- Provide related resources: Offer links to other blog posts, articles, or resources that are relevant to the selected section.

4. Custom Response:
- Adjust the level of detail and focus of the response to align with the user's needs, as indicated in their request.

Model Input:
- During initial setup: The full context of the post.
- In subsequent interactions: The selected section and the specific option requested by the user.

Expected Output:
- A clear and helpful response based on the user's request and known context formatted as Markdown
`;

export const POST: RequestHandler = async ({ request }) => {
	const { paragraph, action } = await request.json();

	let prompt = "";

	if (action === "EXPLORE_MORE") {
		prompt = generateExplanationResponse(paragraph);
	} else if (action === "EXAMPLES") {
		prompt = generateExamplesPrompt(paragraph);
	} else if (action === "SIMPLIFY") {
		prompt = generateSimplifyPrompt(paragraph);
	} else if (action === "RESOURCES") {
		prompt = generateRelatedResources(paragraph);
	}

	const { text } = await generateText({
		model: groq("llama-3.3-70b-versatile"),
		system: SYSTEM_PROMPT,
		temperature: 1,
		maxTokens: 1024,
		prompt
	});

	const id = uuidv4();

	const { text: title } = await generateText({
		model: groq("llama-3.3-70b-versatile"),
		system: SYSTEM_PROMPT,
		temperature: 1,
		maxTokens: 1024,
		prompt: `Generate a concise and descriptive title for the following response in plain text: ${text}`
	});

	return Response.json({ id, title, text, status: "COMPLETED" });
};
