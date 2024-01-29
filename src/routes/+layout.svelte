<script lang="ts">
	import "@fontsource/geist-mono";
	import "@fontsource-variable/inter";
	import "../app.css";
	import { page } from "$app/stores";
	import Navigation from "$lib/components/Navigation.svelte";
	import Footer from "$lib/components/Footer.svelte";

	let currentYear = new Date().getFullYear();

	const canonical = "https://www.ezerangel.com";
	const defaultTitle = "Ezequiel Rangel";
	const defaultDescription = "Have a project or question? Send me a message.";

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

<Navigation />
<slot />
<Footer />
