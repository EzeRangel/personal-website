export interface MDXPost {
	metadata: {
		title: string;
		description: string;
		published_at: string;
		updated_at?: string;
	};
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	default: any;
}
