<script lang="ts">
	import { cn } from "$lib/util/styles";
	import { Star } from "lucide-svelte";
	import { Button } from "../ui/button";

	export let readOnly = false;
	export let defaultRating = 0;

	const stars = Array(5).fill(0);
	let rating = defaultRating;

	function handleClick(index: number) {
		if (readOnly) return;
		rating = index + 1;
	}
</script>

<div class="component-wrapper">
	<div class="rating-wrapper">
		{#each stars as _, index}
			<span
				class={cn("item", { ["active"]: index < rating })}
				role={readOnly ? "presentation" : "button"}
				on:click={() => handleClick(index)}
			>
				<span class="icon">
					<Star size={40} fill="#eab308" />
				</span>
			</span>
		{/each}
	</div>
	{#if !readOnly && rating > 0}
		<Button size="sm" variant="secondary" class="ml-3 px-4" on:click={() => (rating = 0)}
			>Reset</Button
		>
	{/if}
</div>

<style lang="postcss">
	.component-wrapper {
		@apply flex flex-col md:flex-row items-center gap-4;
	}

	.rating-wrapper {
		@apply flex flex-row items-center gap-3;
	}

	.item:hover > .icon,
	.active > .icon {
		@apply text-yellow-500 opacity-100 scale-110;
	}

	.icon {
		@apply inline-block transition-all duration-200 opacity-20 text-yellow-500;
		@apply transform scale-100;
	}

	.item:has(+ .item:hover) > .icon {
		@apply text-yellow-500 opacity-100;
	}
</style>
