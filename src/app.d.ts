// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces

import type { SEO } from "$lib/types";

// and what to do when importing types
declare namespace App {
	// interface Error {}
	// interface Locals {}
	interface PageData {
		seo: SEO;
	}
	// interface Platform {}
}
