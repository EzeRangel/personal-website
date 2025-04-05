<script lang="ts">
	import {
		ArrowLeftIcon,
		ChevronRightIcon,
		CompassIcon,
		ExpandIcon,
		LightbulbIcon,
		ListCollapseIcon,
		XIcon
	} from "lucide-svelte";
	import { Button } from "./ui/button";
	import { cn } from "$lib/util/styles";
	import { aiResponse } from "../../store";
	import type { Completion } from "$lib/types/AI";
	import Markdown from "./Markdown.svelte";
	import { Badge } from "./ui/badge";

	let isCollapsed = true;
	let currentCompletion: Completion | null = null;
	export let onClose = () => {};
</script>

<aside
	class={cn(
		"rounded-lg border mx-4 mt-10 border-muted shadow-lg transform bg-sidebar-accent",
		"transition-all duration-300 ease-in-out",
		"sticky top-10 bottom-10 max-h-[calc(100vh-100px)] overflow-y-auto overscroll-contain",
		{ ["w-[620px]"]: !isCollapsed },
		{ ["w-[320px]"]: isCollapsed }
	)}
>
	{#if isCollapsed}
		<header class="flex flex-row items-center justify-between py-3 px-4 border-b">
			<h1 class="text-lg font-semibold">AI Insights</h1>
			<Button size="icon" variant="ghost" on:click={onClose}>
				<XIcon size={18} />
			</Button>
		</header>
	{:else}
		<header class="flex flex-row items-center gap-3 py-3 px-4 border-b">
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
		<div class="flex flex-col gap-2 py-3 px-4">
			{#each $aiResponse.completions as item}
				<Button
					size="lg"
					variant="outline"
					on:click={() => {
						currentCompletion = item;
						isCollapsed = false;
					}}
					class="h-auto p-3 flex flex-col gap-2 whitespace-normal items-start"
				>
					<Badge variant="outline">
						{#if item.action === "EXAMPLES"}
							<LightbulbIcon size={18} />
						{:else if item.action === "RESOURCES"}
							<CompassIcon size={18} />
						{:else if item.action === "EXPLORE_MORE"}
							<ExpandIcon size={18} />
						{:else}
							<ListCollapseIcon size={18} />
						{/if}
					</Badge>
					<span class="text-left text-sm">
						{item.title}
					</span>
				</Button>
			{:else}
				<div class="p-4 border rounded-lg space-y-1 text-center bg-card">
					<p class="font-semibold text-sm">No insights generated yet</p>
					<p class="text-xs">
						Hover over a paragraph on the post and select the action you want to ask the AI
					</p>
				</div>
			{/each}
		</div>
	{:else}
		<article class="px-12 py-10 bg-card">
			<div class="prose prose-sm">
				{#if currentCompletion?.text}
					<Markdown source={currentCompletion.text} />
				{/if}
			</div>
		</article>
	{/if}
</aside>
