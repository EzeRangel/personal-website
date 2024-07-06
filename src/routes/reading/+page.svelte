<script lang="ts">
	import dayjs from "dayjs";
	import Badge from "$lib/components/ui/badge/badge.svelte";
	import { cn } from "$lib/util/styles";
	import type { PageData } from "./$types";

	export let data: PageData;

	const books = data.books;
</script>

<section class="container max-w-5xl mt-12">
	<div class="mb-16">
		<h1 class="h2 mb-3">Reading</h1>
		<div class="max-w-lg">
			<p class="text-lg text-muted-foreground">A brief timeline of selected books I have read</p>
		</div>
	</div>
	<div>
		{#each books as book (book.id)}
			<div class="relative pl-8 py-8 sm:pl-32">
				<div
					class={cn(
						"flex flex-col items-start justify-start",
						"after:block after:h-full after:absolute after:left-0 after:border-l-2",
						"before:inline-block before:w-4 before:h-4 before:absolute before:left-0 before:-translate-x-[7px] before:bg-phlox before:rounded-full before:z-10 before:border-4 before:border-white",
						"sm:flex-row sm:after:ml-24 sm:before:ml-24"
					)}
				>
					<Badge
						class={cn("mb-1", "sm:absolute sm:left-0")}
						variant={book.properties.Status.status?.name === "In progress"
							? "outline"
							: "secondary"}
					>
						{#if book.properties.Status.status?.name === "In progress"}
							In Progress
						{:else if book.properties.Status.status?.name === "Ditched"}
							Ditched
						{:else}
							<time datetime={book.properties.Completed.date?.start}>
								{dayjs(book.properties.Completed.date?.start).format("MMM, YYYY")}
							</time>
						{/if}
					</Badge>
					<p class="h4">
						<span>
							{book.properties.Name.title?.[0]?.plain_text}
						</span>
						by
						<span>
							{book.properties.Author.rich_text[0]?.plain_text}
						</span>
					</p>
				</div>
			</div>
		{/each}
	</div>
</section>
