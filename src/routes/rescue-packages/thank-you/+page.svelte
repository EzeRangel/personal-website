<script>
	import { Button } from "$lib/components/ui/button";
	import { Separator } from "$lib/components/ui/separator";
</script>

<main class="container max-w-3xl">
	<section class="flex flex-col items-center gap-4 lg:py-40 py-20">
		<h1 class="text-5xl md:text-7xl max-w-2xl tracking-tighter text-center">
			This is the start of something!
		</h1>
		<p
			class="text-lg md:text-xl leading-relaxed tracking-tight text-muted-foreground max-w-2xl text-center"
		>
			You should get a confirmation email soon, right after that I'll send you a Pre-Flight
			Checklist that will start with your website rescue.
		</p>
		<Button href="/">Done</Button>
		<Separator />
		<p class="text-sm text-muted-foreground tracking-tight text-center max-w-xl">
			<strong>Don’t see it yet?</strong> It might be in your spam folder (ugh) – if so, make sure to
			click “not spam” so our updates actually make it to your inbox.
		</p>
	</section>
</main>
