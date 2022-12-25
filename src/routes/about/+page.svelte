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
				<a href="/cv.pdf" class="about__cta" download>Download Resume</a>
			</div>
		</div>
		<p class="about__copy">
			I’m a software engineer oriented to development with frontend technologies, I love the web and
			am really thankful to make a career with all these tools available.
		</p>
		<p class="about__copy">
			I describe myself as a self-taught programmer with the lucky of being around the correct
			people that led me grow as a professional and as a person.
		</p>
		<p class="about__copy">
			I have experience developing optimized websites and web applications with React under
			Javascript and in recent years with Typescript. I have also been able to work on mobile apps
			with React Native that are already in the app stores.
		</p>
		<p class="about__copy">
			React has given me a lot and I want to return to the community as much as I can that’s why I
			have a newsletter about this topic, you can subscribe it if you want.
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
		@apply text-xl mb-6 leading-9;
	}
</style>
