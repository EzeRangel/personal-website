import type { Actions } from "./$types";
import Airtable from "airtable";
import { PostHog } from "posthog-node";
import { AIRTABLE_ACCESS_TOKEN, AIRTABLE_BASE_ID } from "$env/static/private";
import { PUBLIC_POSTHOG_API_KEY } from "$env/static/public";

Airtable.configure({
	endpointUrl: "https://api.airtable.com",
	apiKey: AIRTABLE_ACCESS_TOKEN
});

const client = new PostHog(PUBLIC_POSTHOG_API_KEY, {
	host: "https://us.i.posthog.com"
});

const base = Airtable.base(AIRTABLE_BASE_ID);

export const actions = {
	submit: async ({ request }) => {
		const formData = await request.formData();
		const url = formData.get("url");
		const email = formData.get("email");

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

		client.capture({
			event: "user sent lead form",
			properties: {
				email,
				website: url
			}
		});

		client.shutdown();

		return { success: true };
	}
} satisfies Actions;
