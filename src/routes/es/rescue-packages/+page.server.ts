import type { Actions } from './$types';

export const actions = {
	submit: async ({ request }) => {
		const formData = await request.formData();
		const url = formData.get('url');
		const email = formData.get('email');

		console.log('Form submission:', { url, email });

		return { success: true };
	}
} satisfies Actions;
