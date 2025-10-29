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
import { ImageBlock } from "../components/NotionRenderer/types";

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
