<script>
	import { Card } from "$lib/components/ui/card";
	import { FileSearchIcon } from "lucide-svelte";
</script>

<main>
	<section class="container max-w-5xl mt-12">
		<div class="mb-16">
			<h1 class="h2 mb-3">Building</h1>
			<div class="max-w-lg">
				<p class="text-lg text-muted-foreground">
					A collection of personal and professional projects that showcase my experiments with new
					technologies, ideas, or unconventional workflows.
				</p>
			</div>
		</div>
		<div class="grid grid-cols-12 gap-4">
			<div class="col-span-12 md:col-span-6">
				<Card
					class="w-full aspect-[2/1] bg-muted mb-4 border-none flex flex-col items-center justify-center"
				>
					<FileSearchIcon class="size-24" />
				</Card>
				<div class="flex flex-col items-start gap-y-2">
					<h2 class="font-medium text-lg mb-2">Job Snap</h2>
					<p class="text-muted-foreground">
						A CV-Job Compatibility Analyzer powered by AI that provides precise insights into how
						well your qualifications align with job requirements.
					</p>
					<a
						href="https://jobsnap-five.vercel.app"
						target="_blank"
						rel="noopener noreferrer"
						class="underline text-sm">See more</a
					>
				</div>
			</div>
		</div>
	</section>
</main>
