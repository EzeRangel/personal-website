<script lang="ts">
	import dayjs from "dayjs";
	import type { PageData } from "./$types";

	export let data: PageData;
	const { title, published_at, Content } = data.post;
</script>

<article class="container max-w-5xl my-12">
	<div class="grid grid-cols-10 gap-5 md:gap-10">
		<header class="col-span-10 md:col-span-7">
			<h1 class="h2">
				{title}
			</h1>
		</header>
		<aside class="col-span-10 md:col-start-8 md:col-span-3 md:row-start-2">
			<div class="mb-4">
				<h4 class="font-medium">Date</h4>
				<time datetime={dayjs(published_at).format()} class="text-sm">
					{dayjs(published_at).format("MMMM DD, YYYY")}
				</time>
			</div>
			<div>
				<h4 class="font-medium">Meta</h4>
				<p class="text-sm">
					{data.post.description}
				</p>
			</div>
		</aside>
		<div class="col-span-10 md:col-start-1 md:col-span-7">
			<div class="prose">
				<Content />
			</div>
		</div>
	</div>
</article>
