<script lang="ts">
	import { Button } from "../ui/button";
	import { ExpandIcon, ListCollapse, MoreHorizontal, XIcon } from "lucide-svelte";
	import { Card, CardContent } from "../ui/card";
	import { aiResponse } from "../../../store";

	let isExpanded = false;
	export let text: string;

	const options = [
		{
			icon: ExpandIcon,
			text: "Explore this concept further",
			action: "EXPLORE_MORE"
		},
		{
			icon: ListCollapse,
			text: "Explain in simpler terms",
			action: "SIMPLIFY"
		}
	];

	async function fetchResponse(action: string, paragraph: string) {
		aiResponse.update((store) => {
			return {
				...store,
				status: "GENERATING"
			};
		});

		try {
			const res = await fetch("/api/ai", {
				method: "POST",
				headers: {
					"Content-Type": "application/json"
				},
				body: JSON.stringify({
					paragraph: `${paragraph}`,
					action: action
				})
			});

			if (!res.ok || !res.body) throw new Error("Error while calling the API");

			const completion = await res.json();
			aiResponse.update((store) => {
				return {
					...store,
					status: "IDLE",
					completions: [...store.completions, completion]
				};
			});
		} catch (error) {
			console.error("Error al llamar al API:", error);
			aiResponse.set({ status: "ERROR", completions: [] });
		}
	}
</script>

<Card class="bg-opacity-80 backdrop-blur-sm shadow-lg inline-flex absolute top-0 right-0">
	<CardContent class="p-2">
		<div class="flex items-center justify-between gap-3">
			<Button
				variant="ghost"
				size="icon"
				class="w-6 h-6 rounded-full"
				on:click={(evt) => {
					evt.stopPropagation();
					isExpanded = !isExpanded;
				}}
			>
				{#if isExpanded}
					<XIcon class="w-4 h-4" />
				{:else}
					<MoreHorizontal class="w-4 h-4" />
				{/if}
			</Button>
			<span class="text-xs font-medium">
				{#if isExpanded}
					Close Prompt Tool
				{:else}
					Open Prompt Tool
				{/if}
			</span>
		</div>
		{#if isExpanded}
			<div class="flex flex-col gap-1 mt-2">
				<form method="POST">
					{#each options as option}
						<div class="relative group">
							<input type="hidden" name="action" value={option.action} />
							<Button
								type="submit"
								variant="ghost"
								size="sm"
								class="w-full justify-start text-left"
								on:click={() => fetchResponse(option.action, text)}
							>
								<svelte:component this={option.icon} class="w-4 h-4" />
								<span class="ml-2 text-xs">{option.text}</span>
							</Button>
						</div>
					{/each}
				</form>
			</div>
		{/if}
	</CardContent>
</Card>
