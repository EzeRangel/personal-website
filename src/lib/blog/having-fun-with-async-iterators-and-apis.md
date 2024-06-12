---
title: "Having fun with async iterators and paginated APIs"
description: "Making more sense of loops and Promises in JavaScript."
published_at: "2024-06-11"
---

<script lang="ts">
  import { Lightbulb } from "lucide-svelte";
  import * as Alert from "$lib/components/ui/alert";
</script>

Some time ago, I read about concepts like Iterators and Generators but never had the chance to use them in my projects until recently. So, I decided to solve a problem where I needed to consume a third-party API that returns paginated results, and I really liked the overall result of working with this approach.

But first, I need to make a brief introduction about iterators in JavaScript. An iterator is an object that declares a sequence and can return a value on each iteration. The main difference from an Array is that an iterator doesn't need to be allocated in its entirety to traverse it, thus allowing us to express sequences of undetermined length.

An iterator object needs to implement a protocol that defines its behavior. The Iterator Protocol requires the following properties:

- `next()` - It's a method that returns an object with the following properties.
  - value - The next value of the sequence.
  - done - A boolean that indicates if the sequence has finished.

Once created, we can use the `next()` method explicitly to get the next value in the sequence. Now that we have learned this, we can create a function that returns an iterator object which consumes a paginated API on each sequence. Let's use the Ticketmaster API, which returns paginated results on the event search:

```ts
function fetchIterator(baseEndpoint: string) {
	let finished = false;
	let currentPage = 0;

	return {
		async next() {
			if (finished) {
				return { done: true };
			}

			const endpoint = `${baseEndpoint}&size=50&page=${currentPage}`;
			const response = await fetcher<TicketmasterAPIResponse>({
				endpoint
			});

			const {
				page,
				_links,
				_embedded: { events }
			} = response;

			if (!_links?.next) {
				finished = true;
			}

			currentPage = Number(page.number) + 1;

			return {
				value: events,
				done: false
			};
		}
	};
}
```

<!-- prettier-ignore -->
<Alert.Root>
  <Lightbulb />
  <Alert.Description>
		In this example, fetcher is a custom function that internally uses fetch and returns the API response in JSON or throws an exception if something fails.
  </Alert.Description>
</Alert.Root>

So, every time we call `next()`, the endpoint resolves with the API response for the sequence page:

```ts
const endpoint = `https://app.ticketmaster.com/discovery/v2/events.json?apikey=${APIKEY}&countryCode=MX&source=Ticketmaster`;
const fetcher = fetchIterator(endpoint);

await fetcher.next();
```

The above code looks correct but has a little problem: we can't use Promises in an iterator. To solve this, we need to implement a different kind of iterator called `Async Iterator`, which lets you resolve a Promise on each `next()` call.

An async iterator can be defined by implementing the `[Symbol.asyncIterator]()` method on the iterator object, and the `next()` method returns a Promise with the iterator result. Now our code looks like this:

```ts
function fetchIterator(baseEndpoint: string) {
	let finished = false;
	let currentPage = 0;

	return {
		[Symbol.asyncIterator]() {
			return {
				async next() {
					if (finished) {
						return { done: true };
					}

					const endpoint = `${baseEndpoint}&size=50&page=${currentPage}`;
					const response = await fetcher<TicketmasterAPIResponse>({
						endpoint
					});

					const {
						page,
						_links,
						_embedded: { events }
					} = response;

					if (!_links?.next) {
						finished = true;
					}

					currentPage = Number(page.number) + 1;

					return {
						value: events,
						done: false
					};
				}
			};
		}
	};
}
```

I know you are wondering what that `[Symbol.asyncIterator]` method is, and the simplest explanation is that it represents the Async Iterable protocol.

<!-- prettier-ignore -->
<Alert.Root>
  <Lightbulb />
  <Alert.Description>
		The Symbol object has more <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol#well-known_symbols">static properties that represent protocols</a> and those are called `well-known` Symbols.
  </Alert.Description>
</Alert.Root>

Something interesting about async iterators is that we can use the `for await ...of` declaration, which lets you iterate over a sequence of Promises. So, we can get the paginated events like this:

```ts
const endpoint = `https://app.ticketmaster.com/discovery/v2/events.json?apikey=${APIKEY}&countryCode=MX&source=Ticketmaster`;
const appendedEvents = [];

for await (const events of fetchIterator(endpoint)) {
	appendedEvents.push(events);
}

console.log(appendedEvents.flat());
```

What about handling errors on the API call? We can update our code like this:

```ts
function fetchIterator(baseEndpoint: string) {
	let finished = false;
	let currentPage = 0;

	return {
		[Symbol.asyncIterator]() {
			return {
				async next() {
					if (finished) {
						return { done: true };
					}

					try {
						const endpoint = `${baseEndpoint}&size=50&page=${currentPage}`;
						const response = await fetcher<TicketmasterAPIResponse>({
							endpoint
						});

						const {
							page,
							_links,
							_embedded: { events }
						} = response;

						if (!_links?.next) {
							finished = true;
						}

						currentPage = Number(page.number) + 1;

						return {
							value: events,
							done: false
						};
					} catch (err) {
						if (err instanceof FetcherError) {
							switch (err.code) {
								case "400":
								case "404":
									// Continue with the sequence and return an empty value.
									return { done: false, value: [] };
								case "429":
									throw new Error(
										"The rate limit has been reached. Default rate limits are 2,000 calls per hour."
									);
								// Other error codes
								default:
									break;
							}
						}

						throw new Error("An unexpected error has ocurred. Cannot continue");
					}
				}
			};
		}
	};
}
```

This allows us to continue with the sequence call (when possible) or throw an error to stop the loop. In this case, we also need to handle any errors in the fetchIterator call.

```ts
const endpoint = `https://app.ticketmaster.com/discovery/v2/events.json?apikey=${APIKEY}&countryCode=MX&source=Ticketmaster`;
const appendedEvents = [];

try {
	for await (const events of fetchIterator(endpoint)) {
		appendedEvents.push(events);
	}
} catch (e) {
	console.log("The iterator exception:", e);
}

console.log(appendedEvents.flat());
```

Yes, I know there are other ways to achieve this. One way could be using an array of Promises and Promise.all(), but we lose the sequential calling and it's more difficult to handle errors.

I really don't know how optimized this approach is, but I found it interesting enough to try something different with loops and Promises.
