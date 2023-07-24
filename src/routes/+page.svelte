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
		<a href="/about" class="page-link"> About me </a>
	</section>
	<section id="blog-list" class="page-section">
		<div class="section-head">
			<h2 class="heading heading--sub">Latest posts</h2>
		</div>
		<ul class="space-y-4">
			<li>
				<a
					href="https://typeshare.co/ezerangel/posts/-MnccuWBHwavQTd9gvWg"
					class="external-link"
					target="_blank"
				>
					A tu cliente no le importa si usas TailwindCSS
					<span>
						<svg
							width="15"
							height="15"
							viewBox="0 0 15 15"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
							><path
								d="M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6465L10.2929 4L6 4C5.72386 4 5.5 3.77614 5.5 3.5C5.5 3.22386 5.72386 3 6 3L11.5 3C11.6326 3 11.7598 3.05268 11.8536 3.14645C11.9473 3.24022 12 3.36739 12 3.5L12 9.00001C12 9.27615 11.7761 9.50001 11.5 9.50001C11.2239 9.50001 11 9.27615 11 9.00001V4.70711L4.35355 11.3536C4.15829 11.5488 3.84171 11.5488 3.64645 11.3536Z"
								fill="currentColor"
								fill-rule="evenodd"
								clip-rule="evenodd"
							/></svg
						>
					</span>
				</a>
			</li>
			<li>
				<a
					href="https://typeshare.co/ezerangel/posts/-MjjrL-96b7vsNXXdth_"
					class="external-link"
					target="_blank"
				>
					Publicando en tiendas una app en Expo
					<span>
						<svg
							width="15"
							height="15"
							viewBox="0 0 15 15"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
							><path
								d="M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6465L10.2929 4L6 4C5.72386 4 5.5 3.77614 5.5 3.5C5.5 3.22386 5.72386 3 6 3L11.5 3C11.6326 3 11.7598 3.05268 11.8536 3.14645C11.9473 3.24022 12 3.36739 12 3.5L12 9.00001C12 9.27615 11.7761 9.50001 11.5 9.50001C11.2239 9.50001 11 9.27615 11 9.00001V4.70711L4.35355 11.3536C4.15829 11.5488 3.84171 11.5488 3.64645 11.3536Z"
								fill="currentColor"
								fill-rule="evenodd"
								clip-rule="evenodd"
							/></svg
						>
					</span>
				</a>
			</li>
		</ul>
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
		<a href="/around-the-web" class="page-link"> See the links </a>
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
