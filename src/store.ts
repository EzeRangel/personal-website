import type { Completion } from "$lib/types/AI";
import { writable } from "svelte/store";

export const aiResponse = writable<Completion[]>([]);
