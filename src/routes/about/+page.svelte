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
		</div>
		<p class="about__copy">
			I'm a software engineer who's all about frontend development. I love the web and I'm really
			grateful to be able to make a career in this field.
		</p>
		<p class="about__copy">
			I see myself as a self-taught programmer who's lucky of being surrounded by the right people,
			which has helped me grow both professionally and personally.
		</p>
		<p class="about__copy">
			I have experience building optimized websites with React and more recently with Typescript.
			I've also had the chance to work on mobile apps using React Native that are now available in
			app stores.
		</p>
		<p class="about__copy">
			I have a newsletter (in spanish) about the latest news of the React ecosystem, so if you want
			to get onboard you can find it on <a
				href="https://reacttrends.substack.com"
				target="_blank"
				rel="noopener noreferrer">Substack</a
			>
			or get the
			<a href="https://reacttrends.substack.com/feed" target="_blank" rel="noopener noreferrer"
				>RSS feed here</a
			>.
		</p>
	</section>
</div>

<style lang="postcss">
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

	.about__copy {
		@apply text-xl mb-6 leading-9;
	}

	.about__copy a {
		@apply underline;
	}
</style>
