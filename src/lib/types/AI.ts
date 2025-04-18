export interface Completion {
	id?: string;
	title: string;
	text?: string;
	status: "COMPLETED" | "ERROR";
	action?: Actions;
}

export type Actions = "EXPLORE_MORE" | "EXAMPLES" | "RESOURCES" | "SIMPLIFY";

export interface AIResponse {
	completions: Completion[];
	status: "IDLE" | "GENERATING" | "ERROR";
}
