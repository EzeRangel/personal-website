import { NOTION_DATABASE_ID, NOTION_INTEGRATION_KEY } from "$env/static/private";
import { Client } from "@notionhq/client";
import type { PageServerLoad } from "./$types";
import type { NotionPageLinks } from "$lib/types";
import type { Config } from "@sveltejs/adapter-vercel";

// Not sure if this is the correct way of doing this...
interface PageProps {
	links: NotionPageLinks;
}

const notion = new Client({ auth: NOTION_INTEGRATION_KEY });
const DATABASE_ID = NOTION_DATABASE_ID;

/**
 * The Vercel adapter allows me to implement Incremental Static Regeneration
 * per route (see: svelte.config.js) ...
 */
export const config: Config = {
	isr: {
		expiration: 3600
	}
};

// This is like Nextjs' getServerSideProps, cool...
export const load: PageServerLoad<PageProps> = async () => {
	const database = await notion.databases.query({
		database_id: DATABASE_ID,
		sorts: [
			{
				property: "Date",
				direction: "descending"
			}
		]
	});

	const pagesID = database.results.map((item) => item.id);

	const pagesPromise = pagesID.map((id) => {
		return notion.pages.retrieve({ page_id: id });
	});

	const pages = (await Promise.all(pagesPromise)) as NotionPageLinks;

	return {
		links: pages,
		seo: {
			title: "Bookmarks",
			description: "A list of websites that I liked, have inspired me or have taught me something.",
			url: "https://www.ezerangel.com/bookmarks"
		}
	};
};
