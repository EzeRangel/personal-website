<script lang="ts">
	import {
		ArrowLeftIcon,
		ChevronDown,
		ChevronUpIcon,
		CompassIcon,
		ExpandIcon,
		LightbulbIcon,
		ListCollapseIcon,
		MessageSquare,
		XIcon
	} from "lucide-svelte";
	import { Button } from "./ui/button";
	import { cn } from "$lib/util/styles";
	import { aiResponse } from "../../store";
	import type { Completion } from "$lib/types/AI";
	import Markdown from "./Markdown.svelte";
	import MediaQuery from "./MediaQuery.svelte";

	let isCollapsed = true;
	let isMobileCollapsed = false;
	let currentCompletion: Completion | null = null;
	export let onClose = () => {};
</script>

<MediaQuery query="(max-width: 1024px)" let:matches>
	<aside
		class={cn(
			"rounded-lg border mx-4 mt-10 border-muted shadow-lg transform bg-sidebar-accent",
			"transition-all duration-300 ease-in-out",
			"sticky top-10 bottom-10 overflow-y-auto overscroll-contain",
			{ ["max-h-[calc(100vh-100px)] lg:w-[620px]"]: !isCollapsed },
			{ ["max-h-[50vh] lg:max-h-full lg:w-[320px]"]: isCollapsed },
			{ ["max-h-[57px]"]: isMobileCollapsed }
		)}
	>
		{#if isCollapsed}
			<header class="flex flex-row items-center justify-between py-2 px-4 border-b">
				<h1 class="text-lg font-semibold">AI Insights</h1>
				<div class="flex flex-row gap-2">
					{#if matches}
						<Button
							size="icon"
							variant="ghost"
							on:click={() => {
								isMobileCollapsed = !isMobileCollapsed;
							}}
						>
							<ChevronUpIcon
								size={18}
								class={cn("transition-transform", { ["rotate-180"]: !isMobileCollapsed })}
							/>
						</Button>
					{/if}
					<Button size="icon" variant="ghost" on:click={onClose}>
						<XIcon size={18} />
					</Button>
				</div>
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
						{#if item.action === "EXAMPLES"}
							<LightbulbIcon size={18} />
						{:else if item.action === "RESOURCES"}
							<CompassIcon size={18} />
						{:else if item.action === "EXPLORE_MORE"}
							<ExpandIcon size={18} />
						{:else}
							<ListCollapseIcon size={18} />
						{/if}
						<span class="text-left text-sm">
							{item.title}
						</span>
					</Button>
				{:else}
					<div class="p-4 border rounded-lg space-y-1 text-center bg-card">
						<div class="flex flex-col items-center justify-center text-center">
							<div class="flex items-center justify-center w-16 h-16 mb-6 bg-gray-100 rounded-full">
								<MessageSquare class="w-8 h-8 text-gray-400" />
							</div>
							<h3 class="mb-2 text-lg font-medium">No insights generated yet</h3>
							<p class="max-w-xs text-sm text-gray-500">
								Hover over a paragraph on the post and select the action you want to ask the AI
							</p>
						</div>
					</div>
				{/each}
			</div>
		{:else}
			<article class="px-6 py-5 lg:px-12 lg:py-10 bg-card">
				<div class="prose prose-sm">
					{#if currentCompletion?.text}
						<Markdown source={currentCompletion.text} />
					{/if}
				</div>
			</article>
		{/if}
	</aside>
</MediaQuery>
