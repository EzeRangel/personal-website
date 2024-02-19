import type {
	DatePropertyItemObjectResponse,
	PageObjectResponse,
	SelectPropertyItemObjectResponse,
	StatusPropertyItemObjectResponse,
	UrlPropertyItemObjectResponse
} from "@notionhq/client/build/src/api-endpoints";
import type { RichTextPropertyObject, TitlePropertyObject } from "./Notion";

export interface NotionPageBook extends PageObjectResponse {
	properties: {
		Score: SelectPropertyItemObjectResponse;
		Type: SelectPropertyItemObjectResponse;
		Status: StatusPropertyItemObjectResponse;
		Link: UrlPropertyItemObjectResponse;
		Started: DatePropertyItemObjectResponse;
		Completed: DatePropertyItemObjectResponse;
		Author: RichTextPropertyObject;
		Name: TitlePropertyObject;
	};
}

export type NotionPageBooks = Array<NotionPageBook>;
