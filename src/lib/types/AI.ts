export interface Completion {
	id?: string;
	title: string;
	text?: string;
	status: "COMPLETED" | "ERROR";
}
