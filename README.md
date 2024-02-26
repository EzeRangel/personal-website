# My website

Hi all this is my personal website, it's built with [Svelte](https://kit.svelte.dev/) and uses a Notion integration for some parts of the content.
I used [shadcn-ui for Svelte](https://www.shadcn-svelte.com/), feel free to look around, fork it or make whatever you want.

# Run it

| Command                 | Action                                             |
| :---------------------- | :------------------------------------------------- |
| `npm install`           | Installs dependencies                              |
| `npm run dev`           | Start a development server                         |
| `npm run dev -- --open` | Start the server and open the app in a browser tab |
| `npm run build`         | Create a production version                        |
| `npm run preview`       | Preview the production build                       |

You may need some env variables to make it work:

```
NOTION_INTEGRATION_KEY=
NOTION_DATABASE_ID=
NOTION_READING_LIST_DATABASE_ID=
```

To deploy the app you need to install an [adapter](https://kit.svelte.dev/docs/adapters) I use the [Vercel Adapter](https://kit.svelte.dev/docs/adapter-vercel)
