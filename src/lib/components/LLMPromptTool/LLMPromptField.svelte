<script lang="ts">
	import LlmPromptTool from "./LLMPromptTool.svelte";
	import { promptMode } from "../../../store";

	let isVisible = false;
	export let text: string;
</script>

{#if $promptMode}
	<div class="overflow-hidden z-20 relative rounded-lg">
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<div
			role="button"
			tabindex="0"
			class="w-full rounded-lg relative cursor-pointer p-2 border-2 border-transparent transition-all duration-300 animated-border"
			on:mouseenter={() => (isVisible = true)}
			on:mouseleave={() => (isVisible = false)}
			on:click={() => (isVisible = !isVisible)}
		>
			<slot />
			<span class="bg-animated-border">
				<span class="trail-animated-border" />
			</span>
			{#if isVisible}
				<LlmPromptTool {text} />
			{/if}
		</div>
	</div>
{:else}
	<slot />
{/if}
