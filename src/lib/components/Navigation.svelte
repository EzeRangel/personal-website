<script lang="ts">
	import { page } from "$app/stores";
	import { cn } from "$lib/util/styles";

	let items = [
		{ label: "Home", path: "/" },
		{ label: "Writing", path: "/writing" },
		{ label: "Reading", path: "/reading" },
		{ label: "Bookmarks", path: "/bookmarks" }
	];
</script>

<header class="header">
	<nav class="nav">
		{#each items as item}
			<a
				href={item.path}
				class={cn("nav-item", {
					["selected"]: $page.url.pathname === item.path
				})}
			>
				{item.label}
			</a>
		{/each}
	</nav>
</header>

<style lang="postcss">
	.header {
		@apply container;
	}

	.nav {
		@apply w-full flex flex-row items-center gap-2 py-6;
		@apply md:gap-4;
	}

	.nav-item {
		@apply text-sm text-muted-foreground/80 py-1 px-3;
		@apply hover:text-muted-foreground;
	}

	.selected {
		@apply bg-accent text-primary rounded-full;
	}
</style>
