<div class="wrapper">
	<header class="header">
		<a href="/">Ezequiel Rangel</a>
	</header>
	<section id="intro" class="section">
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
	<section id="social-proof" class="section">
		<div class="section-head">
			<h2 class="heading heading--sub">Work</h2>
			<p>These are some companies I've collaborated with.</p>
		</div>
		<div class="social-proof-grid">
			<span>
				<img src="/images/topdoctors-logo.webp" alt="Logo de TopDoctors" width="300" />
			</span>
			<span>
				<img src="/images/citicinemas-logo.webp" alt="Logo de Citicinemas" width="300" />
			</span>
			<span>
				<img src="/images/maxilana-logo.webp" alt="Logo de Maxilana" width="300" />
			</span>
			<span>
				<img src="/images/sweetleaf-logo.webp" alt="Logo de SweetLeaf" width="300" />
			</span>
			<span>
				<img src="/images/icusa-logo.svg" alt="Logo de ICUSA" width="300" />
			</span>
			<span>
				<img src="/images/logo-coppel.webp" alt="Logo de Coppel" width="300" />
			</span>
			<span>
				<img src="/images/viva-aerobus.webp" alt="Logo de VivaAerobus" width="300" />
			</span>
		</div>
	</section>
</div>

<style>
	.section {
		@apply mb-20;
	}

	.section-head {
		@apply mb-5;
	}

	.hero__title {
		@apply text-4xl leading-[4rem] font-display mb-12 font-normal;
		@apply md:leading-[6rem] md:text-[4.3rem];
	}

	.hero__title > span {
		@apply border-b-[15px] border-featured;
	}

	.hero__copy {
		@apply leading-7 mb-8 max-w-xl;
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

	.social-proof-grid {
		@apply grid grid-cols-4 gap-6 items-center max-w-2xl;
		@apply md:gap-8;
	}
</style>
