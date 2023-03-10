<script lang="ts">
	import '@fontsource/dm-serif-display';
	import '@fontsource/inter';
	import '@fontsource/inter/600.css';
	import '@fontsource/inter/700.css';
	import '../app.css';
	import { page } from '$app/stores';

	let currentYear = new Date().getFullYear();

	const canonical = 'https://www.ezerangel.com';
	const defaultTitle = 'Ezequiel Rangel';
	const defaultDescription = 'Have a project or question? Send me a message.';

	$: seoURL = $page.data?.seo?.url ?? canonical;
	$: seoTitle = $page.data?.seo?.title ?? defaultTitle;
	$: seoDescription = $page.data?.seo?.description ?? defaultDescription;
</script>

<svelte:head>
	<title>
		{seoTitle}
	</title>
	<link rel="canonical" href={seoURL} />
	<meta property="og:title" content={seoTitle} />
	<meta name="description" content={seoDescription} />
	<meta property="description" content={seoDescription} />
	<meta property="og:type" content="website" />
	<meta property="og:url" content={seoURL} />
	<meta property="og:image" content={`https://www.ezerangel.com/og?title=${seoTitle}`} />
	<meta name="twitter:card" content="summary_large_image" />
	<meta property="twitter:domain" content="www.ezerangel.com" />
	<meta property="twitter:url" content={seoURL} />
	<meta name="twitter:title" content={seoTitle} />
	<meta name="twitter:description" content={seoDescription} />
	<meta name="twitter:image" content={`https://www.ezerangel.com/og?title=${seoTitle}`} />
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
