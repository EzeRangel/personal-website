# Yes, CSS do :has a previous sibling selector

> Technical blog post explaining how to create a previous sibling selector in CSS using the :has() pseudo-class, demonstrated through a star rating component implementation. The post shows how to overcome traditional CSS forward-only selection limitations without JavaScript. It explains the relationship between :has() and the subsequent-sibling combinator (~) to achieve backwards selection of elements using the key selector '.item:has(~ .item:hover)'. The post includes practical code examples using TailwindCSS.

## Current CSS Limitations

CSS is a powerful tool that allows us to create incredible things, although it also has its limitations. CSS selectors are essential for describing relationships between elements, but they have always worked in a forward direction: children, siblings, descendants, but not backwards. Well, not officially, but with some creativity, we can make CSS 'look backwards'.

## The Code for a previous sibling selector

```html
<div class="rating-wrapper">
	<span class="item" role="button">
		<span class="icon">
			<i data-lucide="star"></i>
		</span>
	</span>
	<span class="item" role="button">
		<span class="icon">
			<i data-lucide="star"></i>
		</span>
	</span>
	<span class="item" role="button">
		<span class="icon">
			<i data-lucide="star"></i>
		</span>
	</span>
	<span class="item" role="button">
		<span class="icon">
			<i data-lucide="star"></i>
		</span>
	</span>
	<span class="item" role="button">
		<span class="icon">
			<i data-lucide="star"></i>
		</span>
	</span>
</div>
```

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

## Why does this work

This works because of the `:has()` pseudo-class allows us to select an element based on the existence of another element related to it. Now we can use `:has()` to select an element if it meets a condition based on its relationship with other elements.

It's like saying: _Select this element only if it has something specific inside or near it_.

## The Importance of the Subsequent-sibling Combinator

The `~` combinator allows to create a sibling relationship (not necessarily direct) by selecting all instances that share the same parent. Like the example: select all stars that are siblings of the element being hovered.
