import { env } from "$env/dynamic/private";
import { v4 as uuidv4 } from "uuid";
import { createGroq } from "@ai-sdk/groq";
import { type RequestHandler } from "@sveltejs/kit";
import { generateText } from "ai";
import {
	generateExamplesPrompt,
	generateExplanationResponse,
	generateSimplifyPrompt
} from "$lib/ai/blog-prompt-tool/generatePrompt";
import type { Actions } from "$lib/types/AI";

const groq = createGroq({
	apiKey: env.GROQ_API_KEY
});

const SYSTEM_PROMPT = `
You are an interactive helper system designed to enrich the reader experience on a blog. Your task is to generate dynamic responses based on the reader's interaction with specific content in a post. The full context of the post and its relevant sections are available. In subsequent interactions, you will receive partial information about the user's request and must generate relevant responses using the associated context.

OUTPUT INSTRUCTIONS

- Do not give warnings or notes; only output the requested sections.
- Do not start items or paragraphs with the same opening words.
- Do not explain the general subject of the content 
- A clear and helpful response based on the user's request and known context formatted as Markdown.
`;

export const POST: RequestHandler = async ({ request }) => {
	const { paragraph, action }: { paragraph: string; action: Actions } = await request.json();

	let prompt = "";

	if (action === "EXPLORE_MORE") {
		prompt = generateExplanationResponse(paragraph);
	} else if (action === "EXAMPLES") {
		prompt = generateExamplesPrompt(paragraph);
	} else if (action === "SIMPLIFY") {
		prompt = generateSimplifyPrompt(paragraph);
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

	return Response.json({ id, title, text, status: "COMPLETED", action });
};
