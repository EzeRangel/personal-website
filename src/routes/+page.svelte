<div class="wrapper">
	<header class="header">
		<a href="/">Ezequiel Rangel</a>
	</header>
	<section id="intro">
		<div class="hero">
			<h1 class="hero__title">
				<span>
					I build websites
					<br />
					that makes Google
					<br />
					<a href="https://pagespeed.web.dev/" rel="noopener noreferrer" target="_blank">
						PageSpeed
					</a>
					happy
				</span>
			</h1>
			<p class="hero__copy">
				I am a Frontend Developer deeply interested in Javascript applications. I use the latest
				technology available to deliver highly performant products that saves money and time.
			</p>
			<a href="/about" class="hero__cta">
				About me
				<span>&rarr;</span>
			</a>
		</div>
	</section>
</div>

<style>
	.hero__title {
		@apply text-4xl leading-[4rem] font-display mb-12 font-normal;
		@apply md:leading-[6rem] md:text-[4.3rem];
	}

	.hero__title > span {
		@apply border-b-[15px] border-featured;
	}

	.hero__copy {
		@apply leading-7 mb-12 max-w-xl;
	}

	.hero__cta {
		@apply font-semibold transition-colors;
		@apply hover:text-featured-dark;
	}

	.hero__cta > span {
		@apply transition-transform translate-x-0 inline-block;
	}

	.hero__cta:hover > span {
		@apply translate-x-4;
	}
</style>
