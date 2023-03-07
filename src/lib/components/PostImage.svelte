<script lang="ts">
	export let src: string;
	export let alt: string;
	export let caption: string;
</script>

<figure class="cms-prose-figure">
	<div>
		<img {src} {alt} loading="lazy" />
	</div>
	<figcaption class="caption">
		{caption}
	</figcaption>
</figure>

<style lang="postcss">
	.caption {
		@apply text-xs text-[#ebb3a9] font-semibold;
	}
</style>
