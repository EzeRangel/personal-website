<script lang="ts">
	import LlmPromptTool from "./LLMPromptTool.svelte";

	let isVisible = false;
	export let text: string;
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div
	role="button"
	tabindex="0"
	class="w-full rounded-lg relative cursor-pointer p-2 bg-white border-2 border-transparent transition-all duration-300 aiBorderField"
	on:mouseenter={() => (isVisible = true)}
	on:mouseleave={() => (isVisible = false)}
	on:click={() => (isVisible = !isVisible)}
>
	<slot />
	<div class="aiBorder" />
	{#if isVisible}
		<LlmPromptTool {text} />
	{/if}
</div>
