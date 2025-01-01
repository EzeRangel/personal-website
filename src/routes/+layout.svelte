<script lang="ts">
	import "@fontsource/geist-mono";
	import "@fontsource-variable/inter";
	import "../app.css";
	import posthog from "posthog-js";
	import { page } from "$app/stores";
	import Navigation from "$lib/components/Navigation.svelte";
	import Footer from "$lib/components/Footer.svelte";
	import type { LayoutServerData } from "./$types";
	import { browser } from "$app/environment";
	import { afterNavigate, beforeNavigate } from "$app/navigation";

	if (browser && process.env.NODE_ENV === "production") {
		beforeNavigate(() => posthog.capture("$pageleave"));
		afterNavigate(() => posthog.capture("$pageview"));
	}

	const canonical = "https://www.ezerangel.com";
	const defaultTitle = "Ezequiel Rangel";
	const defaultDescription = "Have a project or question? Send me a message.";

	$: seoURL = $page.data?.seo?.url ?? canonical;
	$: seoTitle = $page.data?.seo?.title ?? defaultTitle;
	$: seoDescription = $page.data?.seo?.description ?? defaultDescription;

	export let data: LayoutServerData;
</script>

<svelte:head>
	<title>
		{seoTitle}
	</title>
	<link rel="canonical" href={seoURL} />
	<meta property="og:title" content={seoTitle} />
	<meta property="description" content={seoDescription} />
	<meta property="og:description" content={seoDescription} />
	<meta property="og:type" content="website" />
	<meta property="og:url" content={seoURL} />
	<meta property="og:image" content={`https://www.ezerangel.com/og?title=${seoTitle}`} />
	<meta name="twitter:card" content="summary_large_image" />
	<meta property="twitter:domain" content="www.ezerangel.com" />
	<meta property="twitter:url" content={seoURL} />
	<meta name="twitter:title" content={seoTitle} />
	<meta property="twitter:description" content={seoDescription} />
	<meta name="twitter:image" content={`https://www.ezerangel.com/og?title=${seoTitle}`} />
</svelte:head>

<Navigation />
<slot />
<Footer commitSha={data.deploymentCommitSha} />
