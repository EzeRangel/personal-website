<script>
	import { Badge } from "$lib/components/ui/badge";
	import { Button } from "$lib/components/ui/button";
	import Separator from "$lib/components/ui/separator/separator.svelte";
	import {
		ArrowRightIcon,
		BadgeCheckIcon,
		DatabaseZapIcon,
		GaugeIcon,
		LayoutPanelTopIcon,
		MousePointerClickIcon,
		PaintbrushIcon,
		ProportionsIcon,
		TrendingUpIcon,
		XIcon
	} from "lucide-svelte";
</script>

<main class="container max-w-5xl">
	<header class="w-full">
		<div class="flex gap-8 py-20 lg:py-40 items-center justify-center flex-col">
			<div class="flex gap-4 flex-col">
				<h1 class="text-5xl md:text-7xl max-w-2xl tracking-tighter text-center">
					Modernize your Website & Grow Your Business
				</h1>
				<p
					class="text-lg md:text-xl leading-relaxed tracking-tight text-muted-foreground max-w-2xl text-center"
				>
					Start converting visitors into customers. Our Rescue Packages combine essential website
					fixes, SEO, and performance upgrades into one easy subscription plan for local businesses
					and solopreneurs.
				</p>
			</div>
			<div class="flex flex-row gap-3">
				<Button size="lg" class="gap-4">
					Sign up here <ArrowRightIcon class="w-4 h-4" />
				</Button>
			</div>
		</div>
	</header>
	<section class="mb-20">
		<div class="flex flex-col items-center gap-4 max-w-2xl mx-auto">
			<p class="text-center">
				<Badge variant="secondary" class="py-2 px-4 bg-card shadow-sm border border-border">
					Real businesses with real results
				</Badge>
			</p>
			<blockquote
				class="text-xl font-medium text-center text-balance leading-relaxed tracking-tight"
			>
				&quot;They perfectly captured what we needed. We improved the design, structure, and mobile
				experience. Management was very pleased with the result.&quot;
			</blockquote>
			<p class="text-lg font-medium text-primary">
				Germán Nieves
				<span class="text-muted-foreground"> Sales Coordinator at ICUSA </span>
			</p>
		</div>
	</section>
	<section class="my-20">
		<div class="">
			<div>
				<div class="flex gap-4 flex-col items-start">
					<div>
						<Badge>The Problem</Badge>
					</div>
					<div class="flex gap-2 flex-col">
						<h2 class="text-3xl md:text-5xl tracking-tighter lg:max-w-xl font-regular">
							Outdated Sites Are Costing You Customers
						</h2>
						<p
							class="text-lg max-w-xl lg:max-w-xl leading-relaxed tracking-tight text-muted-foreground"
						>
							A clunky website deters customers and makes your business look unprofessional. Mobile
							visitors struggle with poor layouts, and search engines can’t rank your site without
							proper SEO.
						</p>
					</div>
					<div class="flex gap-10 pt-12 flex-col w-full">
						<div class="grid grid-cols-1 items-start lg:grid-cols-3 gap-4 lg:gap-10">
							<div class="flex flex-row gap-4 w-full items-start">
								<XIcon class="w-4 h-4 mt-2 text-primary shrink-0" />
								<div class="flex flex-col gap-1">
									<h3 class="font-medium">Loss of leads</h3>
									<p class="text-muted-foreground text-sm">
										Slow load times and confusing design frustrate visitors.
									</p>
								</div>
							</div>
							<div class="flex flex-row gap-4 items-start">
								<XIcon class="w-4 h-4 mt-2 text-primary shrink-0" />
								<div class="flex flex-col gap-1">
									<h3 class="font-medium">Poor visibility</h3>
									<p class="text-muted-foreground text-sm">
										Outdated SEO means your site hides behind competitors in Google searches.
									</p>
								</div>
							</div>
							<div class="flex flex-row gap-4 items-start">
								<XIcon class="w-4 h-4 mt-2 text-primary shrink-0" />
								<div class="flex flex-col gap-1">
									<h3 class="font-medium">Missed Trust signals</h3>
									<p class="text-muted-foreground text-sm">
										No reviews, certifications, or clear branding reduces credibility.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
	<section class="my-20">
		<div class="grid grid-cols-12 items-center gap-4 mb-10">
			<div class="col-span-12 lg:col-span-4 space-y-4">
				<Badge>The Solution</Badge>
				<h2 class="text-3xl md:text-5xl tracking-tighter lg:max-w-xl font-regular">
					A Package to Rescue Your Website
				</h2>
			</div>
			<div class="col-span-12 lg:col-span-6 lg:col-start-6">
				<p
					class="text-lg max-w-xl lg:max-w-xl leading-relaxed tracking-tight text-muted-foreground"
				>
					We offer a three-tier subscription service to rescue your website: a complete overhaul
					plus continuous improvements. Each package starts with a one-time setup fee and includes
					monthly optimization to keep your site updated.
				</p>
			</div>
		</div>
		<div class="grid grid-cols-12 gap-4">
			<div class="col-span-12 md:col-span-4 lg:col-span-3 md:p-4 rounded-lg hover:bg-muted">
				<h3 class="font-medium flex flex-row items-center gap-2">
					<ProportionsIcon size={16} />
					Mobile Issues
				</h3>
				<p class="text-sm text-muted-foreground">Fix mobile isues and improve usability</p>
			</div>
			<div class="col-span-12 md:col-span-4 lg:col-span-3 md:p-4 rounded-lg hover:bg-muted">
				<h3 class="font-medium flex flex-row items-center gap-2">
					<TrendingUpIcon size={16} />
					Boost SEO
				</h3>
				<p class="text-sm text-muted-foreground">So customers find you online</p>
			</div>
			<div class="col-span-12 md:col-span-4 lg:col-span-3 md:p-4 rounded-lg hover:bg-muted">
				<h3 class="font-medium flex flex-row items-center gap-2">
					<PaintbrushIcon size={16} />
					Refreshed design
				</h3>
				<p class="text-sm text-muted-foreground">For a modern, professional look</p>
			</div>
			<div class="col-span-12 md:col-span-4 lg:col-span-3 md:p-4 rounded-lg hover:bg-muted">
				<h3 class="font-medium flex flex-row items-center gap-2">
					<GaugeIcon size={16} />
					Speed up your site
				</h3>
				<p class="text-sm text-muted-foreground">Tactics to reduce load time and bounce rate.</p>
			</div>
			<div class="col-span-12 md:col-span-4 lg:col-span-3 md:p-4 rounded-lg hover:bg-muted">
				<h3 class="font-medium flex flex-row items-center gap-2">
					Visitors <ArrowRightIcon size={16} /> Customers
				</h3>
				<p class="text-sm text-muted-foreground">By enhancing CTAs &amp; landing pages</p>
			</div>
			<div class="col-span-12 md:col-span-4 lg:col-span-3 md:p-4 rounded-lg hover:bg-muted">
				<h3 class="font-medium flex flex-row items-center gap-2">
					<MousePointerClickIcon size={16} />
					Real ROI
				</h3>
				<p class="text-sm text-muted-foreground">Setup conversion tracking</p>
			</div>
			<div class="col-span-12 md:col-span-4 lg:col-span-3 md:p-4 rounded-lg hover:bg-muted">
				<h3 class="font-medium flex flex-row items-center gap-2">
					<DatabaseZapIcon size={16} />
					Forms functionality
				</h3>
				<p class="text-sm text-muted-foreground">Check your contact &amp; conversion forms</p>
			</div>
			<div class="col-span-12 md:col-span-4 lg:col-span-3 md:p-4 rounded-lg hover:bg-muted">
				<h3 class="font-medium flex flex-row items-center gap-2">
					<LayoutPanelTopIcon size={16} />
					Review Sitemaps
				</h3>
				<p class="text-sm text-muted-foreground">To inform Google your inner changes</p>
			</div>
		</div>
	</section>
	<section class="my-20">
		<div class="space-y-4 text-center mb-10">
			<Badge>Packages &amp; Pricing</Badge>
			<h2 class="text-3xl md:text-5xl tracking-tighter font-regular">Pricing for everyone</h2>
		</div>
		<div class="grid grid-cols-12 gap-4">
			<div class="col-span-12 lg:col-span-4 rounded-[18px] border-2 border-border p-4 shadow-sm">
				<div>
					<h3 class="font-medium tracking-tighter">Starter Rescue</h3>
					<div class="my-5">
						<span class="text-muted-foreground/80 text-6xl block"> $497 </span>
						<span class="text-muted-foreground text-xs">Setup. Then $97/month</span>
					</div>
					<div class="space-y-3 mb-5">
						<p class="text-muted-foreground text-sm">
							Best for: Local shops, restaurants, or service providers who just need a modern,
							functional presence.
						</p>
						<Button size="sm" class="w-full">Get Started</Button>
					</div>
					<Separator />
					<ul class="space-y-3 py-4">
						<li class="flex flex-row items-center gap-2 text-sm text-muted-foreground">
							<BadgeCheckIcon class="size-5" />
							Mobile responsiveness fixes
						</li>
						<li class="flex flex-row items-center gap-2 text-sm text-muted-foreground">
							<BadgeCheckIcon class="size-5" />
							Basic design improvements
						</li>
						<li class="flex flex-row items-center gap-2 text-sm text-muted-foreground">
							<BadgeCheckIcon class="size-5" />
							Speed optimization (images, lazy loading)
						</li>
						<li class="flex flex-row items-center gap-2 text-sm text-muted-foreground">
							<BadgeCheckIcon class="size-5" />
							Improved contact form
						</li>
					</ul>
				</div>
			</div>
			<div class="col-span-12 lg:col-span-4 rounded-[18px] border-2 border-primary p-4 shadow-sm">
				<div>
					<h3 class="font-medium tracking-tighter">Growth Rescue</h3>
					<div class="my-5">
						<span class="text-muted-foreground/80 text-6xl block"> $997 </span>
						<span class="text-muted-foreground text-xs">Setup. Then $197/month</span>
					</div>
					<div class="space-y-3 mb-5">
						<p class="text-muted-foreground text-sm">
							Best for: Businesses trying to rank on Google and generate leads.
						</p>
						<Button size="sm" class="w-full">Get Started</Button>
					</div>
					<Separator />
					<ul class="space-y-3 py-4">
						<li class="flex flex-row items-center gap-2 text-sm text-muted-foreground">
							<BadgeCheckIcon class="size-5" />
							Everything in Starter
						</li>
						<li class="flex flex-row items-center gap-2 text-sm text-muted-foreground">
							<BadgeCheckIcon class="size-5" />
							SEO Optimization
						</li>
						<li class="flex flex-row items-center gap-2 text-sm text-muted-foreground">
							<BadgeCheckIcon class="size-5" />
							Google Analytics setup
						</li>
						<li class="flex flex-row items-center gap-2 text-sm text-muted-foreground">
							<BadgeCheckIcon class="size-5" />
							Basic conversion tracking
						</li>
						<li class="flex flex-row items-center gap-2 text-sm text-muted-foreground">
							<BadgeCheckIcon class="size-5" />
							1 Landing page optimization
						</li>
					</ul>
				</div>
			</div>
			<div class="col-span-12 lg:col-span-4 rounded-[18px] border-2 border-border p-4 shadow-sm">
				<div>
					<h3 class="font-medium tracking-tighter">Premium Rescue</h3>
					<div class="my-5">
						<span class="text-muted-foreground/80 text-6xl block"> $1,997 </span>
						<span class="text-muted-foreground text-xs">Setup. Then $397/month</span>
					</div>
					<div class="space-y-3 mb-5">
						<p class="text-muted-foreground text-sm">
							Best for: Active businesses that rely heavily on their website or want ongoing
							improvements without hiring a full-time dev.
						</p>
						<Button size="sm" class="w-full">Get Started</Button>
					</div>
					<Separator />
					<ul class="space-y-3 py-4">
						<li class="flex flex-row items-center gap-2 text-sm text-muted-foreground">
							<BadgeCheckIcon class="size-5" />
							Everything in Growth
						</li>
						<li class="flex flex-row items-center gap-2 text-sm text-muted-foreground">
							<BadgeCheckIcon class="size-5" />
							Technical SEO audit
						</li>
						<li class="flex flex-row items-center gap-2 text-sm text-muted-foreground">
							<BadgeCheckIcon class="size-5" />
							Performance monitoring dashboard
						</li>
						<li class="flex flex-row items-center gap-2 text-sm text-muted-foreground">
							<BadgeCheckIcon class="size-5" />
							Monthly content updates
						</li>
						<li class="flex flex-row items-center gap-2 text-sm text-muted-foreground">
							<BadgeCheckIcon class="size-5" />
							Priority support
						</li>
					</ul>
				</div>
			</div>
		</div>
	</section>
</main>
