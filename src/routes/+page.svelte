<script>
	import { Github, Globe, Linkedin, Mail } from "lucide-svelte";
	import { cn } from "$lib/util/styles";
	import { buttonVariants } from "$lib/components/ui/button";
</script>

<div class="container max-w-5xl">
	<section id="intro" class="section hero">
		<div class="hero-wrap">
			<div class="space-y-2 max-w-xl">
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
	<section id="about" class="section">
		<div class="space-y-2">
			<h1 class="h2">About</h1>
			<div class="copy">
				I'm a software engineer with experience building digital products with <em class="emphasis"
					>Next.js</em
				>,
				<em class="emphasis">React</em>,
				<em class="emphasis">Typescript</em> and <em class="emphasis">TailwindCSS</em>; working in
				projects with client-side and server-side rendered apps. I have also been able to work on
				mobile apps using React Native that are already in the app stores.
			</div>
		</div>
	</section>
	<section id="work-experience" class="section">
		<div class="space-y-2">
			<h1 class="h2 mb-4">Work Experience</h1>
			<div class="work">
				<div class="work-header">
					<h2 class="h3">ADHOC TI</h2>
					<span class="work-time">mar. 2017 - current</span>
				</div>
				<h3 class="work-position">Frontend Engineer</h3>
				<div class="work-description">
					<ul class="list-disc list-inside">
						<li>
							Led development of tens large scale mobile and web applications, improving page views
							and user engagement by more than 50%.
						</li>
						<li>
							Optimized performance on medium-scale websites, reducing load times by 70% through
							<em class="emphasis">Lighthouse</em> auditing and <em class="emphasis">Pagespeed</em> metrics.
						</li>
						<li>
							Developed and launched four cross-platform mobile applications using React Native that
							are currently in production with more than 200k downloads.
						</li>
						<li>
							Implemented modern CSS architecture using <em class="emphasis">BEM methodology</em>,
							improving maintainability and reducing style conflicts.
						</li>
						<li>
							Collaborated with <em class="emphasis">UX/UI</em> designers to implement intuitive interfaces
							adhering to design systems
						</li>
						<li>
							Mentored external teams of developers in frontend best practices and modern JavaScript
							techniques.
						</li>
					</ul>
				</div>
			</div>
			<div class="work">
				<div class="work-header">
					<h2 class="h3">ANCLA Studio</h2>
					<span class="work-time">nov. 2011 - mar. 2017</span>
				</div>
				<h3 class="work-position">Senior Web Developer</h3>
				<div class="work-description">
					<ul class="list-disc list-inside">
						<li>
							Developed responsive, mobile-friendly websites for national-level clients across
							various industries
						</li>
						<li>
							Created comprehensive sitemaps and <em class="emphasis">Information Architecture</em> documentation
							for a variety of large-scale projects
						</li>
						<li>
							Conducted technical analysis for new projects, providing recommendations to optimize
							development processes and user experience.
						</li>
						<li>
							Collaborated with cross-functional teams to deliver projects on time and within scope.
						</li>
					</ul>
				</div>
			</div>
			<div class="work">
				<div class="work-header">
					<h2 class="h3">Ingles Sin Barreras</h2>
					<span class="work-time">feb. 2011 - nov. 2011</span>
				</div>
				<h3 class="work-position">Webmaster</h3>
				<div class="work-description">
					<ul class="list-disc list-inside">
						<li>Developed internal web applications to streamline business processes.</li>
						<li>
							Optimized web pages for improved performance and <em class="emphasis">SEO</em> rankings.
						</li>
					</ul>
				</div>
			</div>
		</div>
	</section>
</div>

<style lang="postcss">
	.section {
		@apply mb-8;
	}

	.emphasis {
		@apply not-italic text-phlox;
	}

	.copy {
		@apply font-mono text-muted-foreground leading-7;
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

	.work {
		@apply mb-4 space-y-2;
	}

	.work-header {
		@apply flex flex-col;
		@apply md:flex-row md:items-baseline md:justify-between;
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
