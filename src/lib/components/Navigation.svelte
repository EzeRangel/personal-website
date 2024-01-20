<header class="header">
	<nav class="nav">
		<a class="nav-item selected" href="/">Home</a>
		<a class="nav-item" href="/writing">Writing</a>
		<a class="nav-item" href="/reading">Reading</a>
		<a class="nav-item" href="/bookmarks">Bookmarks</a>
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
