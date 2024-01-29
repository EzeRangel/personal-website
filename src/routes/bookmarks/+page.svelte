<script>
	import dayjs from "dayjs";
	import * as Card from "$lib/components/ui/card";
	import CardHeader from "$lib/components/ui/card/card-header.svelte";
	import CardTitle from "$lib/components/ui/card/card-title.svelte";
	import CardDescription from "$lib/components/ui/card/card-description.svelte";
	import CardContent from "$lib/components/ui/card/card-content.svelte";
	import CardFooter from "$lib/components/ui/card/card-footer.svelte";
	import Badge from "$lib/components/ui/badge/badge.svelte";
	import { History } from "lucide-svelte";

	/** @type {import('./$types').PageData} */
	export let data;

	const links = data.links;
</script>

<section class="container max-w-5xl mt-12">
	<div class="mb-16">
		<h1 class="h2 mb-3">Bookmarks</h1>
		<div class="max-w-lg">
			<p class="text-lg text-muted-foreground">
				A list of websites that I liked, have inspired me or have taught me something. It's like my
				timeline evolution as a developer.
			</p>
		</div>
	</div>
	<div class="grid grid-cols-12 gap-x-4 gap-y-6">
		{#each links as link (link.id)}
			<div class="col-span-12 md:col-span-4">
				<Card.Root>
					<CardHeader>
						<CardTitle>
							<a target="_blank" rel="noopener noreferrer" href={link.properties.URL.url}>
								{link.properties.Name.title[0].plain_text}
							</a>
						</CardTitle>
						<CardDescription>
							{link.properties.Description.rich_text[0].plain_text}
						</CardDescription>
					</CardHeader>
					<CardContent>
						<div class="flex flex-row items-center flex-wrap gap-3">
							{#each link.properties.Tags.multi_select as tag (tag.id)}
								<Badge variant="secondary" class="rounded-md">
									{tag.name}
								</Badge>
							{/each}
						</div>
					</CardContent>
					<CardFooter>
						<time class="text-xs flex flex-row items-center gap-2">
							<History size={14} />
							<span>
								{dayjs(link.properties.Date.date?.start).format("DD MMM YYYY")}
							</span>
						</time>
					</CardFooter>
				</Card.Root>
			</div>
		{/each}
	</div>
</section>
