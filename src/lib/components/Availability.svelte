<script lang="ts">
	export let status: string;
</script>

<span>
	{#if status === "available"}
		<span class="relative inline-flex h-2 w-2">
			<span
				class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"
			/>
			<span class="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
		</span>
	{:else if status === "busy"}
		<span class="relative inline-flex h-2 w-2">
			<span
				class="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"
			/>
			<span class="relative inline-flex rounded-full h-2 w-2 bg-red-500" />
		</span>
	{:else if status === "away"}
		<span class="relative inline-flex">
			<span class="animate-quick-ping inline-flex h-full w-full text-blue-400">z</span>
			<span class="animate-quick-ping text-blue-500">
				<sup>z<sup>z</sup></sup>
			</span>
		</span>
	{/if}
</span>
