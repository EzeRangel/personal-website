<script lang="ts">
	import {
		ArrowLeftIcon,
		CompassIcon,
		ExpandIcon,
		LightbulbIcon,
		ListCollapseIcon,
		MessageSquareIcon,
		Sparkles,
		XIcon
	} from "lucide-svelte";
	import {
		Drawer,
		DrawerClose,
		DrawerContent,
		DrawerHeader,
		DrawerTitle,
		DrawerTrigger
	} from "./ui/drawer";
	import { Button } from "./ui/button";
	import type { Completion } from "$lib/types/AI";
	import Markdown from "./Markdown.svelte";
	import { aiResponse } from "../../store";

	type Status = "CLOSED" | "OPEN" | "IDLE";

	let open = false;
	let onClose = () => {};
	let status: Status = "CLOSED";
	export let onOpenChange = (status: Status) => {};
	let currentCompletion: Completion | null = null;

	const onBack = () => {
		currentCompletion = null;
	};
</script>

<Drawer
	bind:open
	onOpenChange={(isOpen) => {
		if (isOpen && status === "CLOSED") {
			status = "OPEN";
		} else if (!isOpen && status === "OPEN") {
			status = "IDLE";
		} else {
			status = "CLOSED";
		}

		onOpenChange(status);
	}}
>
	<DrawerTrigger let:builder>
		<Button
			variant={["OPEN", "IDLE"].includes(status) ? "secondary" : "default"}
			builders={[builder]}
			class="mt-4"
		>
			{#if ["OPEN", "IDLE"].includes(status)}
				Turn Off Prompt Mode
			{:else}
				Turn On Prompt Mode
			{/if}
			<Sparkles class="ml-2" size={16} />
		</Button>
	</DrawerTrigger>
	<DrawerContent class={"max-h-[85vh]"}>
		<DrawerHeader class="flex flex-row items-center justify-between">
			{#if !currentCompletion}
				<DrawerTitle class="text-lg font-semibold">AI Insights</DrawerTitle>
				<DrawerClose asChild let:builder>
					<Button size="icon" variant="ghost" builders={[builder]}>
						<XIcon size={18} />
					</Button>
				</DrawerClose>
			{:else}
				<Button size="icon" variant="ghost" on:click={onBack} class="shrink-0">
					<ArrowLeftIcon size={18} />
				</Button>
				<DrawerTitle class="text-lg font-semibold truncate flex-1">
					{currentCompletion?.title}
				</DrawerTitle>
				<DrawerClose asChild let:builder>
					<Button size="icon" variant="ghost" builders={[builder]}>
						<XIcon size={18} />
					</Button>
				</DrawerClose>
			{/if}
		</DrawerHeader>
		<div class="p-6 overflow-y-auto">
			{#if currentCompletion !== null}
				<article class="bg-card">
					<div class="prose prose-sm">
						{#if currentCompletion?.text}
							<Markdown source={currentCompletion.text} />
						{/if}
					</div>
				</article>
			{:else}
				<div class="flex flex-col gap-2">
					{#each $aiResponse.completions as item}
						<Button
							size="lg"
							variant="outline"
							on:click={() => {
								currentCompletion = item;
							}}
							class="w-full p-4 text-left bg-gray-50 rounded-lg border hover:bg-gray-100 transition-colors h-auto flex flex-col gap-2 whitespace-normal items-start"
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
						<div class="flex flex-col items-center justify-center text-center">
							<div class="flex items-center justify-center w-16 h-16 mb-6 bg-gray-100 rounded-full">
								<MessageSquareIcon class="w-8 h-8 text-gray-400" />
							</div>
							<h3 class="mb-2 text-lg font-medium">No insights generated yet</h3>
							<p class="max-w-xs text-sm text-gray-500">
								Hover over a paragraph on the post and select the action you want to ask the AI
							</p>
						</div>
					{/each}
				</div>
			{/if}
		</div>
	</DrawerContent>
</Drawer>
