export interface MDXPost {
	metadata: {
		title: string;
		description: string;
		published_at: string;
		external?: boolean;
		link?: string;
		lang?: string;
		updated_at?: string;
		supports_prompt_mode?: boolean;
	};

	default: any;
}
