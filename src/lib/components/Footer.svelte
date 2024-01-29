<script>
	import dayjs from "dayjs";
	import utc from "dayjs/plugin/utc";
	import Separator from "./ui/separator/separator.svelte";
	import { onMount } from "svelte";
	import { ArrowRight, Github } from "lucide-svelte";
	import { env } from "$env/dynamic/public";

	dayjs.extend(utc);
	const utcOffset = -420;
	let localTime = dayjs.utc().utcOffset(utcOffset);

	$: time = localTime.format("hh:mm A");

	onMount(() => {
		const interval = setInterval(() => {
			localTime = dayjs.utc().utcOffset(utcOffset);
		}, 1000);

		return () => {
			clearInterval(interval);
		};
	});
</script>

<footer class="mt-10 bg-muted">
	<div class="container max-w-5xl">
		<div class="flex flex-col md:flex-row justify-between gap-y-4 py-8">
			<div>
				<p class="text-accent-foreground text-sm">Currently</p>
				<p class="text-muted-foreground text-sm">Available for new opportunities</p>
				<a
					href="mailto:hey@ezerangel.com"
					class="text-muted-foreground text-sm hover:text-accent-foreground transition-colors"
				>
					<span>
						Contact me <ArrowRight class="inline-block" size={14} />
					</span>
				</a>
			</div>
			<div>
				<span class="block text-muted-foreground text-7xl">
					{time}
				</span>
			</div>
		</div>
		<Separator />
		<div class="py-6">
			<div class="flex flex-col md:flex-row justify-between items-center gap-y-2">
				<p class="text-muted-foreground/60 text-xs">
					{new Date().getFullYear()} - Made with ❤️ in 🇲🇽
				</p>
				<a
					target="_blank"
					href="https://github.com/EzeRangel/personal-website"
					rel="noopener noreferrer"
					class="text-muted-foreground/60 text-xs underline"
				>
					<Github size={14} class="inline-block" />
					<span>{`EzeRangel/personal-website#${env.PUBLIC_VITE_VERCEL_GIT_COMMIT_SHA}`}</span>
				</a>
			</div>
		</div>
	</div>
</footer>
