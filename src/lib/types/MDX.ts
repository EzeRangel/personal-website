export interface MDXPost {
	metadata: {
		title: string;
		published_at: string;
		updated_at?: string;
	};
	default: any;
}
