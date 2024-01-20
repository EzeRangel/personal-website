<script>
	import { Github, Globe, Linkedin, Mail } from "lucide-svelte";
	import Button from "$lib/components/ui/button/button.svelte";
	import { cn } from "$lib/util/styles";
	import { buttonVariants } from "$lib/components/ui/button";
</script>

<div class="container max-w-5xl">
	<section id="intro" class="section hero">
		<div class="hero-wrap">
			<div class="space-y-2 max-w-xl">
				<h1 class="h2">Ezequiel Rangel</h1>
				<p class="copy">
					Frontend Developer deeply interested in CSS Architecture and Javascript applications. I
					use the latest technology available to deliver high performing products which can save you
					money and time.
				</p>
				<p class="hero-location">
					<span class="mr-1">
						<Globe size={14} />
					</span>
					Sinaloa, Mexico, MST
				</p>
			</div>
			<div>
				<span class="hero-avatar" />
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
				href="www.linkedin.com/in/ezerangel"
				rel="noopener noreferrer"
				class={cn(buttonVariants({ variant: "outline", size: "icon" }))}
			>
				<Linkedin size={18} />
			</a>
			<a
				href="https://github.com/EzeRangel"
				rel="noopener noreferrer"
				class={cn(buttonVariants({ variant: "outline", size: "icon" }))}
			>
				<Github size={18} />
			</a>
		</div>
	</section>
	<section id="about" class="section">
		<div class="space-y-2">
			<h2 class="h2">About</h2>
			<div class="copy">
				I'm a software engineer who's all about frontend development. I have experience building
				optimized websites with React and more recently with Typescript. I have closely followed the
				React ecosystem and adopting the changes they propose, this has allowed me to work with both
				client-side and server-side rendered apps. I have also been able to work on mobile apps with
				React Native that are already in the app stores.
			</div>
		</div>
	</section>
	<section id="work-experience" class="section">
		<div class="space-y-2">
			<h2 class="h2 mb-4">Work Experience</h2>
			<div class="work">
				<div class="work-header">
					<h3 class="h3">ADHOC TI</h3>
					<time class="work-time">mar. 2017 - current</time>
				</div>
				<h4 class="work-position">Frontend & Mobile Engineer</h4>
				<div class="work-description">
					<p>
						Software engineer oriented to development with Frontend technologies. I am in charge of
						conceiving and developing projects - sites, web applications and mobile applications -
						from a client's perspective.
					</p>
					<p>
						I have worked on performance projects on medium-scale websites and have also had the
						opportunity to develop iOS / Android apps with React Native that are already in
						production.
					</p>
				</div>
			</div>
			<div class="work">
				<div class="work-header">
					<h3 class="h3">ANCLA Studio</h3>
					<time class="work-time">nov. 2011 - mar. 2017</time>
				</div>
				<h4 class="work-position">Web Developer</h4>
				<div class="work-description">
					<p>Frontend developer. With experience in Mobile-friendly and responsive development.</p>
					<p>
						I worked on projects with a scope of mostly national viewing. With ability to analyze
						web projects before conception, develop sitemaps, Information Architecture and make
						suggestions oriented to client's needs.
					</p>
					<p>I developed e-commerce websites mainly in the Shopify platform.</p>
				</div>
			</div>
			<div class="work">
				<div class="work-header">
					<h3 class="h3">Inglés Sin Barreras</h3>
					<time class="work-time">feb. 2011 - nov. 2011</time>
				</div>
				<h4 class="work-position">Webmaster</h4>
				<div class="work-description">
					<p>
						In charge of the sites managed by the company, creation and optimization of web pages,
						development of internal applications.
					</p>
				</div>
			</div>
		</div>
	</section>
</div>

<style lang="postcss">
	.section {
		@apply mb-8;
	}

	.copy {
		@apply font-mono text-muted-foreground leading-7;
	}
	.hero {
		@apply mt-8;
	}

	.hero-wrap {
		@apply flex flex-row items-center justify-between gap-3;
		@apply mb-3;
	}

	.hero-avatar {
		@apply block w-28 aspect-square rounded-lg bg-muted-foreground;
	}

	.hero-location {
		@apply font-mono text-sm text-muted-foreground;
		@apply flex flex-row items-center;
	}

	.hero-footer {
		@apply flex flex-row gap-x-1 items-center;
	}

	.work {
		@apply mb-4 space-y-2;
	}

	.work-header {
		@apply flex flex-row items-center justify-between;
	}

	.work-time {
		@apply text-muted-foreground;
	}

	.work-position {
		@apply font-mono text-primary;
	}

	.work-description {
		@apply font-mono text-sm text-muted-foreground leading-7;
	}

	.social-proof-img {
		@apply grayscale transition-all;
		@apply hover:grayscale-0;
	}
</style>
