<div class="wrapper">
	<header class="header">
		<a href="/">Ezequiel Rangel</a>
	</header>
	<section id="intro" class="section hero">
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
			technology available to deliver high performing products which can save you money and time.
		</p>
		<a href="/about" class="page-link">
			About me
			<span>&rarr;</span>
		</a>
	</section>
	<section id="social-proof" class="page-section">
		<div class="section-head">
			<h2 class="heading heading--sub">Work</h2>
			<p>These are some companies I have collaborated with.</p>
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
	<section id="around-the-web" class="page-section">
		<h2 class="heading heading--sub">Around the web</h2>
		<p class="mb-4">A list of sites that I liked or have taught me something</p>
		<a href="/around-the-web" class="page-link">
			See the links
			<span>&rarr;</span>
		</a>
	</section>
</div>

<style lang="postcss">
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

	.hero__title > span:hover {
		@apply border-none;
	}

	.hero__title > span {
		@apply border-b-[15px] border-featured;
	}

	.hero__title a {
		@apply relative;
	}

	.hero__title a::after {
		content: "";
		@apply w-0 h-[15px] bg-featured absolute -bottom-[15px] left-0;
		@apply transition-all duration-300;
	}

	.hero__title > span:hover a::after {
		@apply w-full;
	}

	.hero__copy {
		@apply leading-9 text-xl mb-8 max-w-xl;
	}

	.social-proof-grid {
		@apply grid grid-cols-4 gap-6 items-center max-w-2xl;
		@apply md:gap-8;
	}
</style>
