import type { Actions } from "./$types";
import Airtable from "airtable";
import { AIRTABLE_ACCESS_TOKEN, AIRTABLE_BASE_ID } from "$env/static/private";

Airtable.configure({
	endpointUrl: "https://api.airtable.com",
	apiKey: AIRTABLE_ACCESS_TOKEN
});

const base = Airtable.base(AIRTABLE_BASE_ID);

export const actions = {
	submit: async ({ request }) => {
		const formData = await request.formData();
		const url = formData.get("url");
		const email = formData.get("email");

		console.log("Form submission:", { url, email });

		base("Leads").create(
			[
				{
					fields: {
						"URL Website": url as string,
						Email: email as string
					}
				}
			],
			function (err) {
				if (err) {
					console.error(err);
					return;
				}
			}
		);

		return { success: true };
	}
} satisfies Actions;
