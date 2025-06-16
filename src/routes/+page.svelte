<script>
	import { CircleCheckIcon, Github, Globe, Linkedin, Mail } from "lucide-svelte";
	import { cn } from "$lib/util/styles";
	import { buttonVariants } from "$lib/components/ui/button";
	import { Card, CardContent } from "$lib/components/ui/card";
	import Button from "$lib/components/ui/button/button.svelte";
</script>

<div class="container max-w-5xl">
	<section id="intro" class="section hero">
		<div class="hero-wrap">
			<div class="space-y-2">
				<h1 class="h2">Ezequiel Rangel</h1>
				<p class="copy">
					Frontend developer with 10+ years of experience specializing in <em class="emphasis"
						>CSS Architecture</em
					>, <em class="emphasis">JavaScript applications</em>, and mobile development. I enjoy
					optimizing webapps performance and delivering cross-platform mobile applications using
					<em class="emphasis">React Native</em>. Passionate about implementing scalable frontend
					solutions for complex problems.
				</p>
				<p class="hero-location">
					<span class="mr-1">
						<Globe size={14} />
					</span>
					Mexico, MST
				</p>
			</div>
		</div>
		<div class="hero-footer">
			<a
				href="mailto:hey@ezerangel.com"
				class={cn(buttonVariants({ variant: "outline", size: "icon" }))}
			>
				<Mail size={18} />
			</a>
			<a
				href="https://linkedin.com/in/ezerangel"
				rel="noopener noreferrer"
				target="_blank"
				class={cn(buttonVariants({ variant: "outline", size: "icon" }))}
			>
				<Linkedin size={18} />
			</a>
			<a
				href="https://github.com/EzeRangel"
				rel="noopener noreferrer"
				target="_blank"
				class={cn(buttonVariants({ variant: "outline", size: "icon" }))}
			>
				<Github size={18} />
			</a>
		</div>
	</section>
	<section id="call-to-action" class="section">
		<Card class="p-10 bg-muted border border-transparent hover:border-phlox/30">
			<CardContent class="p-0">
				<div class="flex flex-col gap-4 max-w-xl mx-auto">
					<h2 class="text-4xl font-medium text-center">Fix Your UI Problems in 48 Hours</h2>
					<p class="text-sm text-center text-muted-foreground text-balance">
						Stop losing customers to broken interfaces. Get your biggest UI headaches solved by an
						expert for under $150. No long contracts, no surprise costs, just fast &amp;
						professional fixes that work.
					</p>
					<div class="flex flex-row justify-center mb-6">
						<Button href="https://buy.stripe.com/test_cNibJ06lYdnLcO64ibcMM00">
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

	.copy {
		@apply text-muted-foreground leading-7;
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
