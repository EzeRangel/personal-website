<script lang="ts">
	import dayjs from "dayjs";
	import type { PageData } from "./$types";
	import { slide } from "svelte/transition";
	import FloatingSidebar from "$lib/components/FloatingSidebar/Sidebar.svelte";
	import { Button } from "$lib/components/ui/button";
	import { promptMode } from "../../../store";
	import { Sparkles } from "lucide-svelte";
	import MediaQuery from "$lib/components/MediaQuery.svelte";
	import { Card, CardDescription, CardHeader, CardTitle } from "$lib/components/ui/card";
	import CardFooter from "$lib/components/ui/card/card-footer.svelte";

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
			<aside class="col-span-10 md:col-start-8 md:col-span-3 md:row-start-2 space-y-4">
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
				{#if supportsPromptMode}
					<div class="mt-4 space-y-3">
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
					</div>
				{/if}
				<Card class="bg-muted">
					<CardHeader>
						<CardTitle>Fix your website this week</CardTitle>
						<CardDescription>
							Get a Website Rescue Pack. A fast, affordable fix to make your site actually work for
							your business. No jargon. No fluff. Just results.
						</CardDescription>
					</CardHeader>
					<CardFooter>
						<Button href="/rescue-packages" size="sm" variant="outline" class="text-xs"
							>Request a free audit</Button
						>
					</CardFooter>
				</Card>
			</aside>
			<div class="col-span-10 md:col-start-1 md:col-span-7">
				<div class="prose prose-gray">
					<Content />
				</div>
			</div>
		</div>
	</article>
	<MediaQuery query="(min-width: 1024px)" let:matches>
		{#if $promptMode}
			<div
				transition:slide={{ axis: matches ? "x" : "y" }}
				class="fixed bottom-0 w-full z-50 lg:relative lg:w-auto"
			>
				<FloatingSidebar
					onClose={() => {
						promptMode.set(false);
					}}
				/>
			</div>
		{/if}
	</MediaQuery>
</section>
