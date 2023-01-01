import { NOTION_DATABASE_ID, NOTION_INTEGRATION_KEY } from "$env/static/private";
import { Client } from "@notionhq/client";
import type { PageServerLoad } from "./$types";
import type { NotionPageLinks } from "$lib/types";

// Not sure if this is the correct way of doing this...
interface PageProps {
  links: NotionPageLinks;
}

const notion = new Client({ auth: NOTION_INTEGRATION_KEY });
const DATABASE_ID = NOTION_DATABASE_ID;

// This is the Svelte's way for prerendering a page at build time.
export const prerender = true;

// This is like Nextjs' getServerSideProps, cool...
export const load: PageServerLoad<PageProps> = async ({ url }) => {
  const database = await notion.databases.query({
    database_id: DATABASE_ID,
    sorts: [
      {
        property: "Date",
        direction: "descending",
      }
    ]
  });

  const pagesID = database.results.map(item => item.id);

  const pagesPromise = pagesID.map(id => {
    return notion.pages.retrieve({ page_id: id })
  });

  const pages = await Promise.all(pagesPromise) as NotionPageLinks;

  return {
    links: pages,
    seo: {
      title: "Around the web • Ezequiel Rangel",
      description: "All the cool links I've found while navigating on the Internet",
      url: `${url.href}`
    }
  }
}