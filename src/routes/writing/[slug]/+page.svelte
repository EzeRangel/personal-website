<script lang="ts">
	import dayjs from "dayjs";
	import type { PageData } from "./$types";

	export let data: PageData;
	const { title, publishedAt, updatedAt, Content } = data.post;
</script>

<article class="container max-w-5xl my-12">
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
		</aside>
		<div class="col-span-10 md:col-start-1 md:col-span-7">
			<div class="prose prose-gray">
				<Content />
			</div>
		</div>
	</div>
</article>
