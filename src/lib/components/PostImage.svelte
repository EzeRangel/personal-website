<script lang="ts">
	export let src: string;
	export let alt: string;
	export let caption: string;
</script>

<figure class="cms-prose-figure">
	<a class="img-link" href="/images/02-2023/filmstrip-icusa-image-experiment.png" target="_blank">
		<img {src} {alt} loading="lazy" />
	</a>
	<figcaption class="caption">
		{caption}
	</figcaption>
</figure>

<style lang="postcss">
	.img-link {
		@apply hover:cursor-zoom-in;
	}
	.caption {
		@apply text-xs text-[#ebb3a9] font-semibold;
	}
</style>
