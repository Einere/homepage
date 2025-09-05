import {
  DataSourceObjectResponse,
  PageObjectResponse,
  PartialDataSourceObjectResponse,
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
  // 노션 글 작성 시, 제목을 비워두면 nullable 이 될 수 있다.
  return property.type === "title" ? property.title[0]?.plain_text : undefined;
}

// TODO: Retrieve a page property item 으로 교체하기?
export function getDescriptionFromPageObjectResponse(
  page: Pick<PageObjectResponse, "properties">,
) {
  const property = page.properties[NOTION_BLOG_RECORDS_PROPERTIES.DESCRIPTION];
  return property.type === "rich_text"
    ? // 노션 글 작성 시, 요약을 비워두면 nullable 이 될 수 있다.
      property.rich_text[0]?.plain_text
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
  // 노션 글 작성 시, 발행일을 비워두면 nullable 이 될 수 있다.
  return property.type === "date" && property.date ? property.date?.start : "";
}

export function getTagsFromPageObjectResponse(page: PageObjectResponse) {
  const property = page.properties[NOTION_BLOG_RECORDS_PROPERTIES.TAGS];
  return property.type === "multi_select" ? property.multi_select : [];
}

export function isPageObjectResponse(
  response:
    | PageObjectResponse
    | PartialPageObjectResponse
    | PartialDataSourceObjectResponse
    | DataSourceObjectResponse,
): response is PageObjectResponse {
  return response.object === "page" && "properties" in response;
}
