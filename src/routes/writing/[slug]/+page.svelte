<script lang="ts">
	import dayjs from "dayjs";
	import type { PageData } from "./$types";
	import { slide } from "svelte/transition";
	import FloatingSidebar from "$lib/components/FloatingSidebar.svelte";
	import { Button } from "$lib/components/ui/button";
	import { promptMode } from "../../../store";
	import { Sparkles } from "lucide-svelte";
	import MediaQuery from "$lib/components/MediaQuery.svelte";
	import { cn } from "$lib/util/styles";

	export let data: PageData;
	const { title, publishedAt, updatedAt, supportsPromptMode, Content } = data.post;
</script>

<section class="relative flex">
	<article class="container max-w-5xl my-12 flex-1">
		<div class="grid grid-cols-10 gap-5 md:gap-10">
			<header class="col-span-10 md:col-span-7">
				<h1 class="h2">
					{title}
				</h1>
			</header>
			<aside class="col-span-10 md:col-start-8 md:col-span-3 md:row-start-2">
				<div class="mb-4 text-muted-foreground">
					<h4 class="font-medium">Published on</h4>
					<time datetime={dayjs(publishedAt).format()} class="text-sm">
						{dayjs(publishedAt).format("MMMM DD, YYYY")}
					</time>
				</div>
				{#if updatedAt}
					<div class="mb-4 text-muted-foreground">
						<h4 class="font-medium">Updated on</h4>
						<time datetime={dayjs(updatedAt).format()} class="text-sm">
							{dayjs(updatedAt).format("MMMM DD, YYYY")}
						</time>
					</div>
				{/if}
				<div class="text-muted-foreground">
					<h4 class="font-medium">Meta</h4>
					<p class="text-sm">
						{data.post.description}
					</p>
				</div>
				<MediaQuery query="(min-width: 1024px)" let:matches>
					{#if supportsPromptMode}
						<div class="mt-4 space-y-3">
							{#if !matches}
								<p class="text-xs text-phlox">Prompt Mode is not yet supported on small screens</p>
							{:else}
								<Button
									variant={$promptMode ? "secondary" : "default"}
									on:click={() => {
										promptMode.set(!$promptMode);
									}}
								>
									{#if $promptMode}
										Turn Off Prompt Mode
									{:else}
										Turn On Prompt Mode
									{/if}
									<Sparkles class="ml-2" size={16} />
								</Button>
							{/if}
						</div>
					{/if}
				</MediaQuery>
			</aside>
			<div class="col-span-10 md:col-start-1 md:col-span-7">
				<div class="prose prose-gray">
					<Content />
				</div>
			</div>
		</div>
	</article>
	<MediaQuery query="(min-width: 1024px)" let:matches>
		{#if $promptMode && matches}
			<div transition:slide={{ axis: "x" }}>
				<FloatingSidebar
					onClose={() => {
						promptMode.set(false);
					}}
				/>
			</div>
		{/if}
	</MediaQuery>
</section>
