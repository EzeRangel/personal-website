import type { AIResponse } from "$lib/types/AI";
import { writable } from "svelte/store";

const INITIAL_STATE: AIResponse = {
	status: "IDLE",
	completions: []
};

export const aiResponse = writable<AIResponse>(INITIAL_STATE);
