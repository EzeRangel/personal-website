<script>
	import { ArrowRightIcon, CircleCheckIcon, Globe } from "lucide-svelte";
	import { Card, CardContent } from "$lib/components/ui/card";
	import Button from "$lib/components/ui/button/button.svelte";
	import CaseStudies from "$lib/components/CaseStudies.svelte";
</script>

<div class="container max-w-5xl">
	<header id="intro" class="section hero">
		<div class="hero-wrap">
			<div class="space-y-4">
				<div class="space-y-2">
					<h1 class="text-5xl md:text-7xl max-w-2xl tracking-tighter">Ezequiel Rangel</h1>
					<p class="text-xl">Frontend Specialist</p>
					<p class="hero-location">
						<span class="mr-1">
							<Globe size={14} />
						</span>
						Mexico, MST
					</p>
				</div>
				<p class="text-lg md:text-xl leading-relaxed tracking-tight text-muted-foreground">
					I help businesses stop losing customers to poor web design. I fix UI bugs, slow load
					times, and mobile issues that hurt trust and conversions. Fast, focused, and visible
					improvements.
				</p>
			</div>
		</div>
		<div class="hero-footer">
			<Button href="/rescue-packages" rel="noopener noreferrer">
				Help me rescue my website
				<ArrowRightIcon class="size-5 ml-3" />
			</Button>
		</div>
	</header>
	<CaseStudies />
</div>

<style lang="postcss">
	.section {
		@apply mb-10;
	}

	.hero {
		@apply mt-12;
	}

	.hero-wrap {
		@apply mb-3;
	}

	.hero-location {
		@apply font-mono text-sm text-muted-foreground;
		@apply flex flex-row items-center;
	}

	.hero-footer {
		@apply flex flex-row gap-x-1 items-center;
	}
</style>
