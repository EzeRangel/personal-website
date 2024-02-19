import { Client } from "@notionhq/client";
import type { PageServerLoad } from "./$types";
import { NOTION_INTEGRATION_KEY, NOTION_READING_LIST_DATABASE_ID } from "$env/static/private";
import type { NotionPageBooks } from "$lib/types/NotionBooks";
import type { Config } from "@sveltejs/adapter-vercel";

interface PageProps {
	books: NotionPageBooks;
}

const notion = new Client({ auth: NOTION_INTEGRATION_KEY });
const DATABASE_ID = NOTION_READING_LIST_DATABASE_ID;

export const config: Config = {
	isr: {
		expiration: 60 * 60
	}
};

export const load: PageServerLoad<PageProps> = async () => {
	const database = await notion.databases.query({
		database_id: DATABASE_ID,
		filter: {
			and: [
				{
					property: "Type",
					select: {
						equals: "Book"
					}
				},
				{
					or: [
						{
							property: "Status",
							status: {
								equals: "Done"
							}
						},
						{
							property: "Status",
							status: {
								equals: "In Progress"
							}
						}
					]
				}
			]
		}
	});

	const pagesID = database.results.map((item) => item.id);
	const pagesPromise = pagesID.map((id) => {
		return notion.pages.retrieve({ page_id: id });
	});

	const pages = (await Promise.all(pagesPromise)) as NotionPageBooks;

	return {
		books: pages,
		seo: {
			title: "Reading • Ezequiel Rangel",
			description: "A brief timeline of selected books I have read.",
			url: "https://www.ezerangel.com/reading"
		}
	};
};
