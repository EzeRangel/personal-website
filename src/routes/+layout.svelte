<script>
	import '../app.css';
	import { page } from '$app/stores';

	let currentYear = new Date().getFullYear();
</script>

<svelte:head>
	<title>
		{$page.data.seo.title}
	</title>
	<meta name="description" content={$page.data.seo.description} />
</svelte:head>

<slot />

<footer id="main-footer" class="footer">
	<div class="wrapper">
		<div class="foot-cta">
			<h4 class="foot-cta__title">Let's Talk</h4>
			<p class="foot-cta__copy">Have a project or question? Send me a message.</p>
		</div>
		<div class="social">
			<a href="mailto:hey@ezerangel.com" class="social__email"> hey@ezerangel.com </a>
			<ul class="social__icons">
				<li>
					<a href="https://github.com/EzeRangel" target="_blank" rel="noopener noreferrer">
						<img src="/images/github-icon.svg" width="40" alt="Icono de Github" />
					</a>
				</li>
				<li>
					<a href="https://twitter.com/El_Semantico" target="_blank" rel="noopener noreferrer">
						<img src="/images/twitter-icon.svg" width="40" alt="Icono de Twitter" />
					</a>
				</li>
				<li>
					<a
						href="https://www.linkedin.com/in/ezerangel/"
						target="_blank"
						rel="noopener noreferrer"
					>
						<img src="/images/linkedin-icon.svg" width="40" alt="Icono de LinkedIn" />
					</a>
				</li>
			</ul>
		</div>
		<div class="copyright">
			<small>&copy; {currentYear} All rights reserved.</small>
		</div>
	</div>
</footer>

<style>
	.footer {
		@apply py-8;
	}

	.foot-cta__title {
		@apply font-bold text-6xl mb-6;
		@apply md:text-7xl;
	}

	.foot-cta__copy {
		@apply text-lg;
	}

	.social {
		@apply py-16 flex flex-col justify-center items-center gap-y-3;
		@apply md:flex-row md:justify-between md:pt-16 md:pb-8;
	}

	.social__email {
		@apply text-3xl font-semibold inline-block relative;
	}

	.social__email::after {
		content: '';
		@apply absolute bottom-0 left-0 w-full h-3 bg-featured -z-10;
	}

	.social__icons {
		@apply flex flex-row gap-6;
	}

	.copyright {
		@apply text-lg text-center;
		@apply md:text-right;
	}

	.copyright small {
		@apply text-lg;
	}
</style>
