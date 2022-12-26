<div class="wrapper">
	<header class="header">
		<h1 class="heading heading--about">
			<span>Case Studies</span>
		</h1>
		<a href="/" class="header__icon">
			<img src="/images/home.png" width="30" height="30" alt="Home icon" />
		</a>
	</header>
	<slot />
</div>

<style>
	.header {
		@apply text-center;
	}

	.heading--about {
		@apply mb-12;
	}

	.header__icon {
		@apply inline-block p-4 rounded-full border-2 border-black;
	}
</style>
