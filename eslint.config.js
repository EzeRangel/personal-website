import globals from "globals";
import tseslint from "typescript-eslint";
import pluginSvelte from "eslint-plugin-svelte";
import prettier from "eslint-config-prettier";

export default [
	{
		ignores: [
			".DS_Store",
			"node_modules",
			"/build",
			"/.svelte-kit",
			"/package",
			".env",
			".env.*",
			"!.env.example",
			"pnpm-lock.yaml",
			"package-lock.json",
			"yarn.lock",
			"/.vercel",
			"/.husky"
		]
	},
	{ files: ["**/*.{js,mjs,cjs,ts,svelte}"] },
	{
		plugins: { "@typescript-eslint": tseslint.plugin },
		languageOptions: {
			globals: { ...globals.browser, ...globals.node },
			parser: tseslint.parser,
			parserOptions: {
				sourceType: "module",
				ecmaVersion: 2020,
				extraFileExtensions: [".svelte"]
			}
		},
		rules: { ...tseslint.configs.recommended.rules }
	},
	{
		files: ["**/*.svelte"],
		plugins: { svelte: pluginSvelte },
		languageOptions: {
			parser: pluginSvelte.parser,
			parserOptions: { parser: tseslint.parser }
		},
		rules: { ...pluginSvelte.configs.recommended.rules }
	},
	prettier,
	...pluginSvelte.configs.prettier
];
