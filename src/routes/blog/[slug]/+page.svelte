<script lang="ts">
	import dayjs from "dayjs";
	import type { PageData } from "./$types";

	export let data: PageData;
	const { title, published_at, Content } = data.post;
</script>

<article class="page-section">
	<header class="header">
		<div class="header-inner">
			<div>
				<p class="post-meta">
					{dayjs(published_at).format("MMMM DD, YYYY")}
				</p>
				<h1 class="post-title">
					{title}
				</h1>
			</div>
		</div>
	</header>
	<div class="wrapper">
		<div class="prose mx-auto prose-lg md:prose-xl">
			<Content />
		</div>
	</div>
</article>

<style lang="postcss">
	.header {
		@apply w-full mb-10 py-10 flex bg-gradient-to-b from-teal-100 border border-b-stone-200;
	}

	.header-inner {
		@apply w-[1200px] mx-auto py-10 px-4;
		@apply md:px-16;
	}

	.post-title {
		@apply text-5xl leading-[1] tracking-tighter font-display;
		@apply md:text-7xl;
	}

	.post-meta {
		@apply font-body mb-6 text-lg font-bold capitalize;
	}
</style>
