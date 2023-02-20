import type {
	DatePropertyItemObjectResponse,
	MultiSelectPropertyItemObjectResponse,
	PageObjectResponse,
	RichTextItemResponse,
	RichTextPropertyItemObjectResponse,
	TitlePropertyItemObjectResponse,
	UrlPropertyItemObjectResponse
} from "@notionhq/client/build/src/api-endpoints";

type TitlePropertyObject = Omit<TitlePropertyItemObjectResponse, "title"> & {
	title: Array<RichTextItemResponse>;
};

type RichTextPropertyObject = Omit<RichTextPropertyItemObjectResponse, "rich_text"> & {
	rich_text: Array<RichTextItemResponse>;
};

export interface NotionPageLink extends PageObjectResponse {
	properties: {
		URL: UrlPropertyItemObjectResponse;
		Date: DatePropertyItemObjectResponse;
		Tags: MultiSelectPropertyItemObjectResponse;
		Name: TitlePropertyObject;
		Description: RichTextPropertyObject;
	};
}

export type NotionPageLinks = Array<NotionPageLink>;
