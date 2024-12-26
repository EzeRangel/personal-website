<script lang="ts">
	export let src: string;
	export let alt: string;
	export let caption: string;
	export let href: string;
</script>

<figure class="cms-prose-figure">
	<a class="img-link" {href} target="_blank">
		<img {src} {alt} loading="lazy" />
	</a>
	<figcaption class="caption">
		{caption}
	</figcaption>
</figure>

<style lang="postcss">
	.img-link {
		@apply mb-0 inline-block;
		@apply hover:cursor-zoom-in;
	}

	.img-link img {
		@apply w-full h-auto m-0;
	}

	.caption {
		@apply text-xs text-[#ebb3a9] font-semibold;
	}
</style>
