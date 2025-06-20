<script>
	import { ArrowRightIcon } from "lucide-svelte";
	import Button from "./ui/button/button.svelte";
	import OutLinkIcon from "./OutLinkIcon.svelte";
</script>

<section class="py-20">
	<div>
		<div class="flex flex-col gap-6 text-center">
			<h2 class="text-4xl font-bold text-balance">Real results that transformed real businesses</h2>
			<h3 class="font-medium">
				Stories from clients who boosted their online presence and accelerated growth
			</h3>
		</div>
		<div class="mt-20">
			<div class="grid gap-16 lg:grid-cols-3 xl:gap-24">
				<div
					class="flex flex-col gap-10 border-border sm:flex-row lg:col-span-2 lg:border-r lg:pr-16 xl:pr-24"
				>
					<div class="flex h-full flex-col justify-between gap-10">
						<div class="space-y-3">
							<q class="sm:text-xl block">
								They perfectly captured what we needed. We improved the design, structure, and
								mobile experience. Management was very pleased with the result.
							</q>
							<Button
								href="/writing/icusa-case-study"
								variant="link"
								class="px-0 gap-2 items-center hover:no-underline hover:text-muted-foreground *:hover:translate-x-2"
							>
								Read Case Study
								<ArrowRightIcon class="size-5 transition-transform translate-x-0" />
							</Button>
						</div>
						<div class="flex items-end gap-6">
							<div class="flex flex-col gap-1">
								<p class="text-lg font-semibold text-primary">Germán Nieves</p>
								<p class="text-muted-foreground">Sales Coordinator</p>
							</div>
							<img src="/images/icusa-logo.svg" alt="Logo de ICUSA" width="120" />
						</div>
					</div>
				</div>
				<div class="flex gap-10 self-center lg:flex-col">
					<div class="flex flex-col gap-2">
						<p class="text-4xl font-medium text-primary sm:text-5xl">100%</p>
						<p class="font-semibold text-primary">Performance Optimization</p>
						<a
							class="text-muted-foreground flex items-center gap-2"
							href="https://pagespeed.web.dev/analysis/https-icusa-com-mx/pz085xtcrp?form_factor=desktop"
							target="_blank"
							rel="noopener noreferrer"
						>
							Google PageSpeed
							<OutLinkIcon />
						</a>
					</div>
					<div class="flex flex-col gap-2">
						<p class="text-4xl font-medium text-primary sm:text-5xl">&lt;1s</p>
						<p class="font-semibold text-primary">Loading Time</p>
						<p class="text-muted-foreground">From 8s to 1s</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
