import {
  DatabaseObjectResponse,
  PageObjectResponse,
  PartialDatabaseObjectResponse,
  PartialPageObjectResponse,
} from "@notionhq/client/build/src/api-endpoints";

export function getTitleFromQueryPageObjectResponse(page: PageObjectResponse) {
  const property = page.properties["제목"];
  return property.type === "title" ? property.title[0].plain_text : undefined;
}

export function getDescriptionFromPageObjectResponse(page: PageObjectResponse) {
  const property = page.properties["설명"];
  return property.type === "rich_text"
    ? property.rich_text[0].plain_text
    : undefined;
}

export function getIdFromPageObjectResponse(page: PageObjectResponse) {
  return page.id;
}

export function getCreatedTimeFromPageObjectResponse(page: PageObjectResponse) {
  return page.created_time;
}

export function getTagsFromPageObjectResponse(page: PageObjectResponse) {
  const property = page.properties["태그"];
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
