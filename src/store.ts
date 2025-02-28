import type { AIResponse } from "$lib/types/AI";
import { writable } from "svelte/store";

const INITIAL_STATE: AIResponse = {
	status: "IDLE",
	completions: []
};

// Prompt Mode is turned off by default
export const promptMode = writable(false);

export const aiResponse = writable<AIResponse>(INITIAL_STATE);
