<script lang="ts">
	import { page } from "$app/stores";
	import { cn } from "$lib/util/styles";
	import { MenuIcon } from "lucide-svelte";
	import { Button } from "./ui/button";
	import {
		DropdownMenu,
		DropdownMenuContent,
		DropdownMenuGroup,
		DropdownMenuItem,
		DropdownMenuLabel,
		DropdownMenuSeparator,
		DropdownMenuTrigger
	} from "./ui/dropdown-menu";

	let items = [
		{ label: "Writing", path: "/writing" },
		{ label: "Reading", path: "/reading" },
		{ label: "Bookmarks", path: "/bookmarks" },
		{ label: "Building", path: "/building" }
	];
</script>

<header class="header">
	<div class="flex flex-row items-center justify-between">
		<a href="/">
			<span class="font-bold text-3xl text-black"> ER </span>
		</a>
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
		<DropdownMenu>
			<DropdownMenuTrigger asChild let:builder>
				<Button builders={[builder]} variant="outline" size="icon" class="inline-flex md:hidden">
					<MenuIcon />
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent class="w-56">
				<DropdownMenuLabel>Navigation</DropdownMenuLabel>
				<DropdownMenuSeparator />
				<DropdownMenuGroup>
					{#each items as item}
						<DropdownMenuItem
							on:click={(e) => {
								e.stopPropagation();
							}}
						>
							<a href={item.path}>
								{item.label}
							</a>
						</DropdownMenuItem>
					{/each}
				</DropdownMenuGroup>
			</DropdownMenuContent>
		</DropdownMenu>
	</div>
</header>

<style lang="postcss">
	.header {
		@apply container max-w-5xl py-2;
	}

	.nav {
		@apply hidden md:flex flex-row items-center gap-2 py-6;
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
