import type {
	RichTextItemResponse,
	RichTextPropertyItemObjectResponse,
	TitlePropertyItemObjectResponse
} from "@notionhq/client/build/src/api-endpoints";

export type TitlePropertyObject = Omit<TitlePropertyItemObjectResponse, "title"> & {
	title: Array<RichTextItemResponse>;
};

export type RichTextPropertyObject = Omit<RichTextPropertyItemObjectResponse, "rich_text"> & {
	rich_text: Array<RichTextItemResponse>;
};
