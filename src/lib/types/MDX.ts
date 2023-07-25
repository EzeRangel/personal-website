export interface MDXPost {
	metadata: {
		title: string;
		description: string;
		published_at: string;
		updated_at?: string;
	};
	default: any;
}
