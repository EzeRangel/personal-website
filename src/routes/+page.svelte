<script lang="ts">
	import { ArrowRightIcon, CheckCircleIcon, Globe, LockIcon } from "lucide-svelte";
	import Button from "$lib/components/ui/button/button.svelte";
	import CaseStudies from "$lib/components/CaseStudies.svelte";
	import type { ActionData } from "./$types";
	import { enhance } from "$app/forms";

	export let form: ActionData;
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
	<section class="my-40">
		<div class="grid grid-cols-12 items-center gap-6 mb-10">
			<div class="col-span-12 lg:col-span-6 space-y-4">
				<h2 class="text-3xl md:text-5xl tracking-tighter">
					Want to Know What’s Holding Your Website Back?
				</h2>
				<p class="text-lg leading-relaxed tracking-tight text-muted-foreground">
					Let me take a quick look for you. I'll send you a short video explaining how to improve
					your site's speed, SEO, and design. No pressure, no strings attached.
				</p>
			</div>
			<div class="col-span-12 lg:col-span-6">
				{#if form?.success}
					<div class="flex flex-col items-center gap-4 p-8 bg-muted rounded-lg">
						<CheckCircleIcon class="w-20 h-20 text-primary" />
						<h2 class="text-2xl font-medium text-center">Thanks!</h2>
						<p class="text-center text-muted-foreground">
							I've received your request and will send the audit to your email in the next few days.
						</p>
					</div>
				{:else}
					<form
						action="?/submit"
						method="POST"
						class="space-y-8 px-4 py-6 rounded-lg bg-muted"
						use:enhance
					>
						<div class="space-y-2">
							<label for="url" class="block text-sm text-muted-foreground">Your website (URL)</label
							>
							<input
								id="url"
								type="url"
								name="url"
								required
								class="w-full rounded-sm bg-card text-base p-2 border border-muted-foreground"
							/>
						</div>
						<div class="space-y-2">
							<label for="email" class="block text-sm text-muted-foreground">Your email</label>
							<input
								id="email"
								type="email"
								name="email"
								required
								class="w-full rounded-sm bg-card text-base p-2 border border-muted-foreground"
							/>
						</div>
						<div class="space-y-2">
							<Button type="submit" class="w-full">Request a free review</Button>
							<p class="text-xs text-muted-foreground flex flex-row gap-2">
								<LockIcon class="size-4" />
								<span> I won't send you spam. I promise. </span>
							</p>
						</div>
					</form>
				{/if}
			</div>
		</div>
	</section>
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
