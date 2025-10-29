import {
  DataSourceObjectResponse,
  GetPageResponse,
  ListBlockChildrenResponse,
  PageObjectResponse,
  PartialDataSourceObjectResponse,
  PartialPageObjectResponse,
  PartialBlockObjectResponse,
  BlockObjectResponse,
} from "@notionhq/client/build/src/api-endpoints";
import { ImageBlock, RichTextItem } from "../components/NotionRenderer/types";

export enum NOTION_BLOG_RECORDS_PROPERTIES {
  "ID" = "id",
  "TITLE" = "Title",
  "DESCRIPTION" = "Summary",
  "PUBLISHED_DATE" = "Published Date",
  "TAGS" = "Tags",
}

/* 노션 글 작성 시, 제목을 비워두면 nullable 이 될 수 있다. */
export function getTitleFromPageObject(page: GetPageResponse) {
  if (isPageObject(page)) {
    return page.properties[NOTION_BLOG_RECORDS_PROPERTIES.TITLE].type ===
      "title"
      ? page.properties[NOTION_BLOG_RECORDS_PROPERTIES.TITLE].title[0]
          ?.plain_text
      : undefined;
  }

  return undefined;
}

export function getDescriptionFromPageObject(page: GetPageResponse) {
  if (isPageObject(page)) {
    const property =
      page.properties[NOTION_BLOG_RECORDS_PROPERTIES.DESCRIPTION];
    return property.type === "rich_text"
      ? // 노션 글 작성 시, 요약을 비워두면 nullable 이 될 수 있다.
        property.rich_text[0]?.plain_text
      : undefined;
  }

  return undefined;
}

export function getIdFromPageObject(page: GetPageResponse) {
  return page[NOTION_BLOG_RECORDS_PROPERTIES.ID];
}

export function getPublishedDateFromPageObject(page: PageObjectResponse) {
  const property =
    page.properties[NOTION_BLOG_RECORDS_PROPERTIES.PUBLISHED_DATE];
  // 노션 글 작성 시, 발행일을 비워두면 nullable 이 될 수 있다.
  return property.type === "date" && property.date ? property.date?.start : "";
}

export function getTagsFromPageObject(page: PageObjectResponse) {
  const property = page.properties[NOTION_BLOG_RECORDS_PROPERTIES.TAGS];
  return property.type === "multi_select" ? property.multi_select : [];
}

export function isPageObject(
  response:
    | PageObjectResponse
    | PartialPageObjectResponse
    | PartialDataSourceObjectResponse
    | DataSourceObjectResponse,
): response is PageObjectResponse {
  return response.object === "page" && "properties" in response;
}

export function isBlockObject(
  block: PartialBlockObjectResponse | BlockObjectResponse,
): block is BlockObjectResponse {
  return block.object === "block";
}

export function isFullBlock(
  block: PartialBlockObjectResponse | BlockObjectResponse,
): block is BlockObjectResponse {
  return "type" in block;
}

export function isListItemBlock(
  block: PartialBlockObjectResponse | BlockObjectResponse,
): block is BlockObjectResponse &
  ({ type: "bulleted_list_item" } | { type: "numbered_list_item" }) {
  return (
    isFullBlock(block) &&
    (block.type === "bulleted_list_item" || block.type === "numbered_list_item")
  );
}

export function isImageBlock(
  block: PartialBlockObjectResponse | BlockObjectResponse,
): block is ImageBlock {
  return isBlockObject(block) && block.type === "image";
}

export function getFirstImageFromListBlockChildren(
  listBlockChildrenResponse: ListBlockChildrenResponse,
) {
  const blockChildren = listBlockChildrenResponse.results;
  const imageBlock = blockChildren.filter(isImageBlock)[0];

  if (imageBlock && imageBlock.image.type === "file") {
    return imageBlock.image.file.url;
  }

  return undefined;
}

export function getImageUrlFromImageData(
  imageData: ImageBlock["image"],
): string | null {
  if (imageData.type === "file") {
    return imageData.file?.url ?? null;
  } else if (imageData.type === "external") {
    return imageData.external?.url ?? null;
  }
  return null;
}

export function getLinkFromRichTextItem(text: RichTextItem): string | null {
  // First, check if there's a direct href property
  if (text.href) {
    return text.href;
  }

  // For text type, extract link from text.link property
  if (text.type === "text" && text.text?.link) {
    return typeof text.text.link === "string"
      ? text.text.link
      : text.text.link.url;
  }

  return null;
}
