import { error, redirect, type RequestHandler } from "@sveltejs/kit";

const REDIRECTS: Record<string, string> = {
	"/about": "/",
	"/blog": "/writing",
	"/around-the-web": "/bookmarks"
};

export const GET: RequestHandler = async ({ url }) => {
	if (url.pathname in REDIRECTS) {
		redirect(301, REDIRECTS[url.pathname]);
	} else if (url.pathname?.includes("/blog")) {
		const slug = url.pathname.split("/").filter(Boolean)[1];
		redirect(301, `/writing/${slug}`);
	}

	error(400);
};
