<section class="project">
	<figure class="project__figure">
		<span />
	</figure>
	<div class="project__meta">
		<h1 class="heading heading--sub">ICUSA</h1>
		<p class="project__subtitle">Web development</p>
	</div>
	<div class="project__content">
		<p>
			Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione repudiandae maxime iure
			tempore iusto ad esse commodi minima similique dolores ea fuga facilis consequuntur quis
			quisquam est laborum, accusantium hic?
		</p>
		<h2>Subtitle</h2>
		<p>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum dolorum nostrum rerum quis
			totam tempore laboriosam minima quo ratione nesciunt, modi aspernatur nihil possimus quasi.
			Quisquam, blanditiis dolore? Minima, quisquam!
		</p>
		<h3>Subtitle</h3>
		<p>
			Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis minima aliquam quia sit
			quam perferendis repellat veritatis assumenda repudiandae voluptate ipsam dolores nulla fugiat
			debitis, cumque ipsum natus vel totam.
		</p>
	</div>
</section>

<style>
	.project__figure {
		@apply mb-16 relative overflow-hidden;
	}

	.project__figure > span {
		@apply bg-gray-400 w-full h-44 inline-block;
	}

	.project__subtitle {
		@apply font-bold text-xl my-2;
	}

	.project__meta {
		@apply mb-8;
	}

	.project__meta,
	.project__content {
		@apply px-2;
	}

	.project__content p,
	.project__content ul {
		@apply text-xl mb-8 leading-9;
	}

	.project__content h2,
	.project__content h3 {
		@apply text-4xl font-display mb-4;
	}
</style>
