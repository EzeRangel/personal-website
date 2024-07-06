<script lang="ts">
	import dayjs from "dayjs";
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
	<div class="space-y-4 divide-y">
		{#each posts as post}
			<article class="py-6 md:px-6 flex flex-col md:flex-row items-start justify-between">
				<div class="flex-1">
					<time datetime={post.meta.published_at} class="block text-sm text-muted-foreground">
						{dayjs(post.meta.published_at).format("MMMM DD, YYYY")}
					</time>
				</div>
				<div class="flex-1">
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
					<p class="text-muted-foreground text-sm">
						{post.meta.description}
					</p>
				</div>
			</article>
		{/each}
	</div>
</section>
