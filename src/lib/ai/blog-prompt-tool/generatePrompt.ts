const CONTEXT = "";

export function generateExplanationResponse(paragraph: string) {
	return `
    Context: ${CONTEXT}

    Paragraph: ${paragraph}

    Action: Explore more about this text and provide an insightful response.
  `;
}

export function generateExamplesPrompt(paragraph: string) {
	return `
    Context: ${CONTEXT}

    Paragraph: ${paragraph}

    Action: Give three practical examples that illustrates this concept.
  `;
}
