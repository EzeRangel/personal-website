<script lang="ts">
	import { Button } from "../ui/button";
	import { CompassIcon, ExpandIcon, LightbulbIcon, MoreHorizontal, XIcon } from "lucide-svelte";
	import { Card, CardContent } from "../ui/card";

	let isExpanded = false;
	export let text: string;

	const options = [
		{
			icon: ExpandIcon,
			text: "Explain more"
		},
		{
			icon: LightbulbIcon,
			text: "Give me examples"
		},
		{
			icon: CompassIcon,
			text: "Explore this concept further"
		}
	];
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
				{#each options as option}
					<div class="relative group">
						<Button
							variant="ghost"
							size="sm"
							class="w-full justify-start text-left"
							on:click={async () => {
								await fetch("/api/ai", {
									method: "POST",
									headers: {
										"Content-Type": "application/json"
									},
									credentials: "include",
									body: JSON.stringify({
										prompt: `${option.text}: ${text}`
									})
								});
							}}
						>
							<svelte:component this={option.icon} class="w-4 h-4" />
							<span class="ml-2 text-xs">{option.text}</span>
						</Button>
					</div>
				{/each}
			</div>
		{/if}
	</CardContent>
</Card>
