import {
  DatabaseObjectResponse,
  PageObjectResponse,
  PartialDatabaseObjectResponse,
  PartialPageObjectResponse,
} from "@notionhq/client/build/src/api-endpoints";

export enum NOTION_BLOG_RECORDS_PROPERTIES {
  "ID" = "id",
  "TITLE" = "Title",
  "DESCRIPTION" = "Summary",
  "PUBLISHED_DATE" = "Published Date",
  "TAGS" = "Tags",
}

export function getTitleFromQueryPageObjectResponse(page: PageObjectResponse) {
  const property = page.properties[NOTION_BLOG_RECORDS_PROPERTIES.TITLE];
  return property.type === "title" ? property.title[0].plain_text : undefined;
}

export function getDescriptionFromPageObjectResponse(page: PageObjectResponse) {
  const property = page.properties[NOTION_BLOG_RECORDS_PROPERTIES.DESCRIPTION];
  return property.type === "rich_text"
    ? property.rich_text[0].plain_text
    : undefined;
}

export function getIdFromPageObjectResponse(page: PageObjectResponse) {
  return page[NOTION_BLOG_RECORDS_PROPERTIES.ID];
}

export function getPublishedDateFromPageObjectResponse(
  page: PageObjectResponse,
) {
  const property =
    page.properties[NOTION_BLOG_RECORDS_PROPERTIES.PUBLISHED_DATE];
  return property.type === "date" && property.date ? property.date.start : "";
}

export function getTagsFromPageObjectResponse(page: PageObjectResponse) {
  const property = page.properties[NOTION_BLOG_RECORDS_PROPERTIES.TAGS];
  return property.type === "multi_select" ? property.multi_select : [];
}

export function isPageObjectResponse(
  response:
    | PageObjectResponse
    | PartialPageObjectResponse
    | PartialDatabaseObjectResponse
    | DatabaseObjectResponse,
): response is PageObjectResponse {
  return response.object === "page" && "properties" in response;
}
