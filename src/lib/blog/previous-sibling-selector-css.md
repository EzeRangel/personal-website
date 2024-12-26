---
title: "Yes, CSS do :has a previous sibling selector"
description: "How to use the `has` pseudo-class for making a previous sibling CSS selector"
published_at: "2024-12-25"
---

<script lang="ts">
	import { Lightbulb } from "lucide-svelte";
	import Image from '$lib/components/PostImage.svelte';
  import Rating from "$lib/components/demos/Rating.svelte";
	import RatingVariant from "$lib/components/demos/RatingVariant.svelte";
	import DemoWrapper from "$lib/components/DemoWrapper.svelte";
  import * as Alert from "$lib/components/ui/alert";
</script>

CSS is a powerful tool that allows us to create incredible things, although it also has its limitations. CSS selectors are essential for describing relationships between elements, but they have always worked in a forward direction: children, siblings, descendants, but not backwards. Well, not officially, but with some creativity, we can make CSS 'look backwards'.

In this post, we're going to play around with traditional CSS rules. Using a star rating component as an example, I'll show you a clever trick to select 'previous elements' and give them custom styles.

## A Practical Example: A Star Rating Component

Below you can use the component and choose a rating. Normally, you would need to use Javascript to know which rating was chosen and dynamically color the previous stars. Well, now that's no longer necessary.

<!-- prettier-ignore -->
<Alert.Root class="mb-4">
  <Lightbulb />
  <Alert.Description>
		This example is better appreciated on desktop with a mouse, but if you're reading from your mobile device, just tap on a star.
  </Alert.Description>
</Alert.Root>

<DemoWrapper>
	<Rating />
</DemoWrapper>

The HTML code has nothing out of the ordinary. For this example, I used [lucide.dev](https://lucide.dev/) to display the star icon.

```html
<div class="rating-wrapper">
	<span class="item interactive" role="button">
		<span class="icon">
			<i data-lucide="star"></i>
		</span>
	</span>
	<span class="item interactive" role="button">
		<span class="icon">
			<i data-lucide="star"></i>
		</span>
	</span>
	<span class="item interactive" role="button">
		<span class="icon">
			<i data-lucide="star"></i>
		</span>
	</span>
	<span class="item interactive" role="button">
		<span class="icon">
			<i data-lucide="star"></i>
		</span>
	</span>
	<span class="item interactive" role="button">
		<span class="icon">
			<i data-lucide="star"></i>
		</span>
	</span>
</div>
```

This is the CSS code where I used TailwindCSS with the `apply` directive to make writing styles easier, keeping the HTML free of classes. Once again, this code has nothing out of the ordinary, except for the last line which is what we're interested in.

```css
.rating-wrapper {
	@apply flex flex-row items-center gap-3;
}

.icon {
	@apply inline-block transition-all duration-200 opacity-20 text-yellow-500;
	@apply transform scale-100;
}

.item:hover > .icon {
	@apply text-yellow-500 opacity-100 scale-110;
}

.item:has(~ .item:hover) > .icon {
	@apply text-yellow-500 opacity-100;
}
```

Why does this work? The main reason is that the `:has()` pseudo-class allows us to select an element based on the existence of another element related to it. Our CSS mental model tells us that the final element of a selector is the target, but `:has()` changes the rules of the game: now we can use it to select an element if it meets a condition based on its relationship with other elements.

That's why `:has()` opens the door for us to behave like a parent selector or even as a previous sibling selector, as in our example.

It's like saying: _Select this element only if it has something specific inside or near it_.

This is a graphical representation of what happens in the selector.

<Image
  src="/images/12-2024/rating-demo-illustration-v3.png"
	href="/images/12-2024/rating-demo-illustration-v3.png"
  caption="How the CSS :has() pseudo-class works as a previous sibling selector"
	alt="Illustration demonstrating how the CSS :has() pseudo-class works as a previous sibling selector. Five stars are displayed in a row, with four stars highlighted in purple to represent the currently selected elements, and one teal star representing the element in :hover state. Arrows and labels explain the connection between the elements and the selector parts (.item:has(~ .item:hover) > .icon)."
/>

## The Importance of the Subsequent-sibling Combinator

The previous sibling selector couldn't work without the `~` combinator. This special selector allows us to create a sibling relationship (not necessarily direct) by selecting all instances that share the same parent. In our case, we select all stars that are siblings of the element being hovered.

This contrasts with the next-sibling combinator (`+`) which only allows us to select the direct sibling and not the previous ones.

In this example you can see what the result would be if we use the next-sibling combinator:

```css
.item:has(+ .item:hover) > .icon {
	@apply text-yellow-500 opacity-100;
}
```

<DemoWrapper>
	<RatingVariant />
</DemoWrapper>

CSS rules are constantly evolving, and although we traditionally had certain limitations, pseudo-classes like `:has()` are allowing us to think differently about how we structure our selectors. This star rating component is just an small and practical example of what we can achieve.

What other use cases can you think of? What other design patterns could you simplify using `:has()`?

It is worth noting that, `:has()` is relatively new but support in modern browsers is quite good. So go ahead, play with the rules, experiment, and share what you discover.
