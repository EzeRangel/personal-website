<script>
	import { CircleCheckIcon, Globe } from "lucide-svelte";
	import { Card, CardContent } from "$lib/components/ui/card";
	import Button from "$lib/components/ui/button/button.svelte";
	import CaseStudies from "$lib/components/CaseStudies.svelte";
</script>

<div class="container max-w-5xl">
	<header id="intro" class="section hero">
		<div class="hero-wrap">
			<div class="space-y-4">
				<div class="space-y-2">
					<h1 class="h1">Ezequiel Rangel</h1>
					<p class="text-xl">Frontend Specialist</p>
					<p class="hero-location">
						<span class="mr-1">
							<Globe size={14} />
						</span>
						Mexico, MST
					</p>
				</div>
				<p class="text-lg/7">
					I help businesses stop losing customers to poor web design. I fix UI bugs, slow load
					times, and mobile issues that hurt trust and conversions. Fast, focused, and visible
					improvements.
				</p>
			</div>
		</div>
		<div class="hero-footer">
			<Button
				href="mailto:hey@ezerangel.com?subject=I need an improvement for my site"
				target="_blank"
				class="uppercase"
				rel="noopener noreferrer">Request free site review</Button
			>
		</div>
	</header>
	<CaseStudies />
	<section id="call-to-action" class="section">
		<Card class="p-0 relative overflow-hidden">
			<div class="absolute inset-0">
				<!-- svelte-ignore a11y-img-redundant-alt -->
				<img
					src="/images/homepage-cta.jpg"
					alt="CTA Background image"
					class="w-full h-full object-cover"
				/>
			</div>
			<CardContent class="p-5 md:p-10 bg-card/80 relative">
				<div class="flex flex-col gap-4 max-w-xl mx-auto">
					<h2 class="text-3xl md:text-4xl font-medium text-center">
						Fix Your UI Problems in 48 Hours
					</h2>
					<p class="text-sm text-center text-muted-foreground text-balance">
						Stop losing customers to broken interfaces. Get your biggest UI headaches solved by an
						expert for under $150. No long contracts, no surprise costs, just fast &amp;
						professional fixes that work.
					</p>
					<div class="flex flex-row justify-center mb-6">
						<Button href="https://buy.stripe.com/7sY00ibAFeH15aYbWY5Ne00">
							Start my UI Fix - $75
						</Button>
					</div>
					<p
						class="text-center text-xs text-muted-foreground flex flex-row flex-wrap items-center gap-3 justify-center"
					>
						<span class="flex flex-row gap-1 items-center">
							<CircleCheckIcon class="size-3" />
							Before & after proof
						</span>
						<span class="flex flex-row gap-1 items-center">
							<CircleCheckIcon class="size-3" />
							Fixed price
						</span>
						<span class="flex flex-row gap-1 items-center">
							<CircleCheckIcon class="size-3" />
							Real code fixes
						</span>
						<span class="flex flex-row gap-1 items-center">
							<CircleCheckIcon class="size-3" />
							Delivered in 48 hours
						</span>
					</p>
				</div>
			</CardContent>
		</Card>
	</section>
</div>

<style lang="postcss">
	.section {
		@apply mb-10;
	}

	.emphasis {
		@apply not-italic text-phlox;
	}

	.hero {
		@apply mt-12;
	}

	.hero-wrap {
		@apply mb-3;
	}

	.hero-avatar {
		@apply block w-28 aspect-square rounded-lg bg-white;
	}

	.hero-location {
		@apply font-mono text-sm text-muted-foreground;
		@apply flex flex-row items-center;
	}

	.hero-footer {
		@apply flex flex-row gap-x-1 items-center;
	}
</style>
