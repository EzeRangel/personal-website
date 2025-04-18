import adapter from "@sveltejs/adapter-vercel";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";
import { mdsvex } from "mdsvex";
import preprocess from "svelte-preprocess";

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: [
		mdsvex({
			extensions: [".md"],
			highlight: {
				alias: {
					ts: "typescript"
				}
			}
		}),
		vitePreprocess(),
		preprocess({
			postcss: true
		})
	],
	kit: {
		adapter: adapter()
	},

	extensions: [".svelte", ".md"]
};

export default config;
