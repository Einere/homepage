import {
  GetPageResponse,
  PageObjectResponse,
} from "@notionhq/client/build/src/api-endpoints";
import { isPageObject } from "@homepage/notion-renderer";

export enum NOTION_BLOG_RECORDS_PROPERTIES {
  "ID" = "id",
  "TITLE" = "Title",
  "DESCRIPTION" = "Summary",
  "PUBLISHED_DATE" = "Published Date",
  "TAGS" = "Tags",
}

// Best Practice: js-early-exit - 조기 반환으로 가독성 향상
/* 노션 글 작성 시, 제목을 비워두면 nullable 이 될 수 있다. */
export function getTitleFromPageObject(page: GetPageResponse) {
  if (!isPageObject(page)) return undefined;

  const property = page.properties[NOTION_BLOG_RECORDS_PROPERTIES.TITLE];
  if (property.type !== "title") return undefined;

  return property.title[0]?.plain_text;
}

export function getDescriptionFromPageObject(page: GetPageResponse) {
  if (!isPageObject(page)) return undefined;

  const property = page.properties[NOTION_BLOG_RECORDS_PROPERTIES.DESCRIPTION];
  if (property.type !== "rich_text") return undefined;

  // 노션 글 작성 시, 요약을 비워두면 nullable 이 될 수 있다.
  return property.rich_text[0]?.plain_text;
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

// Re-export from package for backward compatibility
export {
  isBlockObject,
  isFullBlock,
  isListItemBlock,
  isImageBlock,
  isPageObject,
  getImageUrlFromImageData,
  getLinkFromRichTextItem,
  getFirstImageFromListBlockChildren,
  getFirstImageBlockIdFromListBlockChildren,
} from "@homepage/notion-renderer";
export type { ImageBlock, RichTextItem } from "@homepage/notion-renderer";
