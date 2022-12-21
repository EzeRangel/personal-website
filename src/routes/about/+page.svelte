<div class="wrapper">
	<header class="header">
		<h1 class="heading heading--about">
			<span>About me</span>
		</h1>
		<a href="/" class="header__icon">
			<img src="/images/home.png" width="30" height="30" alt="Icono de casa" />
		</a>
	</header>
	<section id="about" class="about">
		<div class="about__head">
			<div>
				<h2 class="heading heading--sub">Ezequiel Rangel</h2>
				<p class="about__sub">Frontend Engineer</p>
			</div>
			<div>
				<a href="#" class="about__cta" download> Download Resume</a>
			</div>
		</div>
		<p class="about__copy">
			Phasellus non faucibus purus, a venenatis diam. In faucibus orci mauris, porttitor egestas
			diam elementum non. Vestibulum non metus tempus, sagittis libero sed, euismod purus. Cras
			dolor nulla, hendrerit vitae libero eu, finibus ultricies dolor.
		</p>
		<p class="about__copy">
			Curabitur quis tortor sit amet ligula lobortis auctor. Class aptent taciti sociosqu ad litora
			torquent per conubia nostra, per inceptos himenaeos. Integer ut turpis eget urna egestas
			maximus.
		</p>
		<p class="about__copy">
			Phasellus non faucibus purus, a venenatis diam. In faucibus orci mauris, porttitor egestas
			diam elementum non. Vestibulum non metus tempus, sagittis libero sed, euismod purus. Cras
			dolor nulla, hendrerit vitae libero eu, finibus ultricies dolor.
		</p>
		<p class="about__copy">
			Curabitur quis tortor sit amet ligula lobortis auctor. Class aptent taciti sociosqu ad litora
			torquent per conubia nostra, per inceptos himenaeos. Integer ut turpis eget urna egestas
			maximus.
		</p>
	</section>
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

	.about__head {
		@apply flex flex-col justify-between mb-8 gap-3;
		@apply md:flex-row md:items-center;
	}

	.about__sub {
		@apply font-bold text-xl my-2;
	}

	.about__cta {
		@apply rounded-3xl text-white uppercase py-4 px-5 text-center bg-emerald-400 inline-block w-full font-semibold;
	}
	.about__copy {
		@apply text-xl mb-6;
	}
</style>
