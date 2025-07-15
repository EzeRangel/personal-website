- This is our knowledge context. Before any task read this file to get better understanding about hows and whys.

- Before each commit, reflect on the lessons we've learned together and update GEMINI.md for future use. Focus on generic patterns and techniques, not specifics of a single feature.

## SvelteKit Form Handling

- Use SvelteKit Form Actions for handling form submissions. They are defined in the `+page.server.ts` file.
- Form Actions should return a plain object (e.g., `{ success: true }`) rather than a JSON response.
- In the `+page.svelte` component, use the `form` prop to access the data returned from the form action.
- For typing in older SvelteKit versions, import `ActionData` from `./$types` and type the `form` prop as `export let form: ActionData;`.
- If the page has a `load` function, also import `PageData` and type the `data` prop as `export let data: PageData;`.
- Use the `enhance` action from `$app/forms` for progressive enhancement of forms, which avoids full-page reloads on submission.
