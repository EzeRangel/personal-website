<script lang="ts">
	import OutLinkIcon from "$lib/components/OutLinkIcon.svelte";
	import type { PageData } from "./$types";

	export let data: PageData;
	const { posts } = data;
</script>

<section class="container max-w-5xl mt-12">
	<div class="mb-16">
		<h1 class="h2 mb-3">Writing</h1>
		<div class="max-w-lg">
			<p class="text-lg text-muted-foreground">
				Brain dumps, explorations, and how-to guides. I write about productivity, programming,
				user/dev experience and other topics.
			</p>
		</div>
	</div>
	<div class="grid grid-cols-8 gap-x-3 gap-y-8">
		{#each posts as post}
			<article class="col-span-8 grid grid-cols-subgrid">
				<div class="col-span-8 md:col-span-6">
					<h2 class="h4 mb-1 transition-colors hover:text-phlox">
						<a
							href={post.meta?.link ?? `${post.path}`}
							rel={post.meta?.external ? "noopener noreferrer" : undefined}
						>
							{post.meta.title}
							{#if post.meta?.external}
								<OutLinkIcon />
							{/if}
						</a>
					</h2>
					<p class="text-muted-foreground">
						{post.meta.description}
					</p>
				</div>
				<div class="hidden md:block md:col-span-2">
					<time datetime="2023-10-22" class="block text-right text-sm text-muted-foreground">
						{new Date(post.meta.published_at).toLocaleDateString("en", {
							year: "numeric",
							day: "2-digit",
							month: "long"
						})}
					</time>
				</div>
			</article>
		{/each}
	</div>
</section>
