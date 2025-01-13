import { env } from "$env/dynamic/private";
import { createGroq } from "@ai-sdk/groq";
import { type RequestHandler } from "@sveltejs/kit";
import { generateText } from "ai";
import { v4 as uuidv4 } from "uuid";
import { serialize } from "cookie";

const groq = createGroq({
	apiKey: env.GROQ_API_KEY
});

const SYSTEM_PROMPT = `You are an interactive helper system designed to enrich the reader experience on a technical blog. Your task is to generate dynamic responses based on the reader's interaction with specific content in a post. The full context of the post and its relevant sections are available, but will only be provided during initial setup. In subsequent interactions, you will receive partial information about the user's request and must generate relevant responses using the associated context.
Guidelines:

1. Initial Setup:
The full context will include a general summary of the post and a list of sections with brief descriptions. This context will be used as a basis for all subsequent interactions.

2. Subsequent Interactions:
- You will receive partial information including:
	- The specific action requested by the user (e.g., "Explain more").
	- The relevant section selected by the user.
- Assume that you already know the initial context related to this interaction and use that information to generate your response.

3. Default Options:
- Provide specific responses based on the option chosen:
	- Explain more: Provide a more detailed explanation of the selected section.
	- Give me examples: Provide practical examples related to the selected section.
	- Explore this concept further: Expand on the concept with additional information or relate the section to other concepts or blog posts.

4. Custom Response:
- Adjust the level of detail and focus of the response to align with the user's needs, as indicated in their request.

Model Input:
- During initial setup: The full context of the post.
- In subsequent interactions: The selected section and the specific option requested by the user.

Expected Output:
- A clear and helpful response based on the user's request and known context.
	`;

const CONTEXT = `Technical blog post explaining how to create a previous sibling selector in CSS using the :has() pseudo-class, demonstrated through a star rating component implementation. The post shows how to overcome traditional CSS forward-only selection limitations without JavaScript. It explains the relationship between :has() and the subsequent-sibling combinator () to achieve backwards selection of elements using the key selector '.item:has(~ .item:hover)'. The post includes practical code examples using TailwindCSS.`;

export const POST: RequestHandler = async ({ request, cookies }) => {
	let sessionId = cookies.get("sessionId");

	if (!sessionId) {
		console.log("No session ID found, generating a new one...");
		sessionId = uuidv4();

		await generateText({
			model: groq("llama-3.3-70b-versatile"),
			system: SYSTEM_PROMPT,
			prompt: CONTEXT
		});
	}

	const { prompt } = await request.json();

	const { text } = await generateText({
		model: groq("llama-3.3-70b-versatile"),
		system: SYSTEM_PROMPT,
		prompt
	});

	return new Response(JSON.stringify({ message: text }), {
		headers: {
			"Set-Cookie": serialize("sessionId", sessionId, {
				path: "/",
				maxAge: 180 // 3 minutes
			}),
			"Content-Type": "application/json"
		}
	});
};
