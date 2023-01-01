<script>
	import dayjs from 'dayjs';

	/** @type {import('./$types').PageData} */
	export let data;

	const links = data.links;
</script>

<header class="page-header">
	<div class="wrapper">
		<h1 class="heading heading__page">
			<span> Around the web </span>
		</h1>
		<p class="page-header-copy">
			This is a list of websites that I liked, have inspired me or have taught me something. Is like
			my timeline evolution as a developer.
		</p>
	</div>
</header>

<section class="page-section">
	<div class="wrapper">
		<div class="grid-links">
			{#each links as link (link.id)}
				<div class="grid-links-item">
					<div class="link-item">
						<div class="link-head">
							<h2 class="link-title">
								<a href={link.properties.URL.url} target="_blank" rel="noopener noreferrer">
									{link.properties.Name.title[0].plain_text}
								</a>
								<span>
									<svg viewBox="0 0 24 24">
										<path
											d="M17 13v6c0 0.276-0.111 0.525-0.293 0.707s-0.431 0.293-0.707 0.293h-11c-0.276 0-0.525-0.111-0.707-0.293s-0.293-0.431-0.293-0.707v-11c0-0.276 0.111-0.525 0.293-0.707s0.431-0.293 0.707-0.293h6c0.552 0 1-0.448 1-1s-0.448-1-1-1h-6c-0.828 0-1.58 0.337-2.121 0.879s-0.879 1.293-0.879 2.121v11c0 0.828 0.337 1.58 0.879 2.121s1.293 0.879 2.121 0.879h11c0.828 0 1.58-0.337 2.121-0.879s0.879-1.293 0.879-2.121v-6c0-0.552-0.448-1-1-1s-1 0.448-1 1zM10.707 14.707l9.293-9.293v3.586c0 0.552 0.448 1 1 1s1-0.448 1-1v-6c0-0.136-0.027-0.265-0.076-0.383s-0.121-0.228-0.216-0.323c-0.001-0.001-0.001-0.001-0.002-0.002-0.092-0.092-0.202-0.166-0.323-0.216-0.118-0.049-0.247-0.076-0.383-0.076h-6c-0.552 0-1 0.448-1 1s0.448 1 1 1h3.586l-9.293 9.293c-0.391 0.391-0.391 1.024 0 1.414s1.024 0.391 1.414 0z"
										/>
									</svg>
								</span>
							</h2>
						</div>
						<div class="link-body">
							<p class="link-copy">
								{link.properties.Description.rich_text[0].plain_text}
							</p>
							<div class="link-tags">
								{#each link.properties.Tags.multi_select as tag (tag.id)}
									<span>
										{tag.name}
									</span>
								{/each}
							</div>
						</div>
						<time class="link-meta">
							<span>
								<svg viewBox="0 0 17 16">
									<path
										d="M10 1c3.866 0 7 3.134 7 7s-3.134 7-7 7v-1.5c1.469 0 2.85-0.572 3.889-1.611s1.611-2.42 1.611-3.889c0-1.469-0.572-2.85-1.611-3.889s-2.42-1.611-3.889-1.611c-1.469 0-2.85 0.572-3.889 1.611-0.799 0.799-1.322 1.801-1.52 2.889h2.909l-3.5 4-3.5-4h2.571c0.485-3.392 3.402-6 6.929-6zM13 7v2h-4v-5h2v3z"
									/>
								</svg>
							</span>
							{dayjs(link.properties.Date.date?.start).format('DD MMM YYYY')}
						</time>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>

<style>
	.grid-links {
		@apply grid grid-cols-12 gap-x-4 gap-y-6;
	}

	.grid-links-item {
		@apply col-span-12;
		@apply md:col-span-6;
		@apply lg:col-span-4;
	}

	.link-item {
		@apply relative rounded-md p-2;
		@apply hover:bg-teal-50/50;
	}

	.link-head {
		@apply flex flex-row gap-x-2 mb-1;
	}

	.link-title {
		@apply font-semibold text-sm;
	}

	.link-title span {
		@apply w-3 h-3 inline-block;
	}

	.link-body {
		@apply mb-1;
	}

	.link-copy {
		@apply text-xs mb-1;
	}

	.link-tags {
		@apply flex flex-row flex-wrap gap-x-1;
	}

	.link-tags > span {
		@apply rounded-sm text-[10px] leading-3 inline-block py-[2px] px-2 bg-teal-100 text-teal-800 cursor-pointer;
	}

	.link-meta {
		@apply text-[10px];
	}

	.link-meta span {
		@apply w-2 h-2 inline-block text-gray-400;
	}
</style>
