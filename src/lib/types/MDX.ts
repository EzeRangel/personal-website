export interface MDXPost {
	metadata: {
		title: string;
		description: string;
		published_at: string;
		external?: boolean;
		link?: string;
		updated_at?: string;
		supports_prompt_mode?: boolean;
	};
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	default: any;
}
