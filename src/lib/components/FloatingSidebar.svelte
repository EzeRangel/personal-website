<script lang="ts">
	import { ArrowLeftIcon, ChevronRightIcon, CompassIcon, XIcon } from "lucide-svelte";
	import { Button } from "./ui/button";
	import { cn } from "$lib/util/styles";
	import { aiResponse } from "../../store";
	import type { Completion } from "$lib/types/AI";
	import Markdown from "./Markdown.svelte";

	let isCollapsed = true;
	let currentCompletion: Completion | null = null;
</script>

<aside
	class={cn(
		"p-2 rounded-lg border mx-4 mt-12 bg-card border-muted shadow-lg",
		"transition-all duration-300 ease-in-out",
		{ ["w-[620px]"]: !isCollapsed },
		{ ["w-[320px]"]: isCollapsed }
	)}
>
	{#if isCollapsed}
		<header class="flex flex-row items-center justify-between mb-3">
			<h1 class="text-lg font-semibold">AI Insights</h1>
			<Button size="icon" variant="ghost">
				<XIcon size={18} />
			</Button>
		</header>
	{:else}
		<header class="flex flex-row items-center gap-3 mb-3">
			<Button
				size="icon"
				variant="ghost"
				on:click={() => {
					currentCompletion = null;
					isCollapsed = true;
				}}
				class="shrink-0"
			>
				<ArrowLeftIcon size={18} />
			</Button>
			<h1 class="text-lg font-semibold truncate flex-1">
				{currentCompletion?.title}
			</h1>
			<Button size="icon" variant="ghost" class="shrink-0">
				<XIcon size={18} />
			</Button>
		</header>
	{/if}
	{#if isCollapsed}
		<div class="flex flex-col gap-2">
			{#each $aiResponse as item}
				<Button
					size="lg"
					variant="outline"
					on:click={() => {
						currentCompletion = item;
						isCollapsed = false;
					}}
					class="px-4"
				>
					<div class="flex-1 flex items-center truncate">
						<CompassIcon size={18} class="mr-2 shrink-0" />
						<span class="overflow-ellipsis">
							{item.title}
						</span>
					</div>
					<ChevronRightIcon size={18} />
				</Button>
			{:else}
				<div class="p-4 border rounded-lg space-y-1 text-center">
					<p class="font-semibold text-sm">No insights generated yet</p>
					<p class="text-xs">
						Hover over a paragraph on the post and select the action you want to ask the AI
					</p>
				</div>
			{/each}
		</div>
	{:else}
		<article class="px-12">
			<!-- <Card class="pt-6">
				<CardContent class="font-mono text-muted-foreground text-sm">
					{currentCompletion?.text}
				</CardContent>
			</Card> -->
			<div class="prose prose-sm">
				{#if currentCompletion?.text}
					<Markdown source={currentCompletion.text} />
				{/if}
			</div>
		</article>
	{/if}
</aside>
