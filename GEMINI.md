- This is our knowledge context. Before any task read this file to get better understanding about hows and whys.

- Before each commit, reflect on the lessons we've learned together and update GEMINI.md for future use. Focus on generic patterns and techniques, not specifics of a single feature.

## SvelteKit Form Handling

- For handling form submissions, the idiomatic SvelteKit approach is to use Form Actions defined in a `+page.server.ts` file.
- Actions should return a plain object (e.g., `return { success: true }`), not a `json()` response. The framework handles the serialization.
- In the corresponding `+page.svelte` component, use the `form` prop to access the data returned from the action. Use `export let form: ActionData;` to type it, importing `ActionData` from `./$types`.
- If the page does not have a `load` function, do not include a `data` prop or import `PageData`. Keep the component's props minimal.
- Use the `use:enhance` action from `$app/forms` for progressive enhancement. This provides a better user experience by avoiding full-page reloads on submission.

## Project Tooling

- Be mindful of pre-commit hooks (e.g., linters, formatters). If a commit fails due to a formatting error, check the tool's output. Often, the tool will automatically fix the files, and the only required action is to stage the changes again and re-commit.
