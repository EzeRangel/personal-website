export function generateExplanationResponse(paragraph: string, context: string) {
	return `
    Provide a concise and insightful explanation of the paragraph mentioned in the INPUT that is related to the CONTEXT. Expand on the idea with relevant examples or analogies, and ensure the response is easy to understand for a reader unfamiliar with the topic. You are interested in answering the whys, how, who and what questions that helps the reader understand better the topic.
    
    CONTEXT

    "${context}"

    INPUT

    "${paragraph}"
  `;
}

export function generateExamplesPrompt(paragraph: string, context: string) {
	return `
    Provide 2-3 practical examples that illustrate the concept or idea mentioned in the paragraph. Ensure the examples are relevant and easy to understand. Use code snippets if necessary to demonstrate the implementation of the concept.

    CONTEXT

    "${context}"

    INPUT

    "${paragraph}"
  `;
}

export function generateSimplifyPrompt(paragraph: string, context: string) {
	return `
    Rewrite the paragraph in simpler terms, using plain language and avoiding jargon. Ensure the explanation is clear and accessible to a reader with no prior knowledge of the topic. Limit the response to 2-3 sentences.

    CONTEXT

    "${context}"

    INPUT

    "${paragraph}"
  `;
}

export function generateRelatedResources(paragraph: string, context: string) {
	return `
    Context: ${context}

    Paragraph: ${paragraph}

    Action: Suggest 2-3 high-quality resources (e.g., articles, books, videos) that provide additional information on the concept mentioned in the paragraph. Include a brief description of each resource and explain how it relates to the paragraph. Use bullet points for clarity.
  `;
}
