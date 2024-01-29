import { VERCEL_GIT_COMMIT_SHA } from "$env/static/private";
import type { LayoutServerLoad } from "./$types";

export const load: LayoutServerLoad = () => {
	return {
		deploymentCommitSha: VERCEL_GIT_COMMIT_SHA
	};
};
