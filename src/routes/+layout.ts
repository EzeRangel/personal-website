import posthog from "posthog-js";
import { browser } from "$app/environment";
import type { LayoutLoad } from "./$types";
import { PUBLIC_POSTHOG_API_KEY } from "$env/static/public";

export const load: LayoutLoad = async ({ data }) => {
	if (browser && process.env.NODE_ENV === "production") {
		posthog.init(PUBLIC_POSTHOG_API_KEY, {
			api_host: "https://app.posthog.com",
			capture_pageview: false,
			capture_pageleave: false,
			loaded: (ph) => {
				if (location.pathname === "localhost" || location.hostname === "127.0.0.1") {
					ph.opt_out_capturing();
				}
			}
		});
	}

	return data ?? {};
};
