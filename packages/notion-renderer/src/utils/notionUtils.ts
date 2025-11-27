import type {
  BlockObjectResponse,
  PartialBlockObjectResponse,
  ListBlockChildrenResponse,
  PageObjectResponse,
  PartialPageObjectResponse,
  PartialDataSourceObjectResponse,
  DataSourceObjectResponse,
} from "@notionhq/client";
import type { ImageBlock, RichTextItem } from "../types";

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

export function isPageObject(
  response:
    | PageObjectResponse
    | PartialPageObjectResponse
    | PartialDataSourceObjectResponse
    | DataSourceObjectResponse,
): response is PageObjectResponse {
  return response.object === "page" && "properties" in response;
}

export function getFirstImageFromListBlockChildren(
  listBlockChildrenResponse: ListBlockChildrenResponse,
): string | undefined {
  const blockChildren = listBlockChildrenResponse.results;
  const imageBlock = blockChildren.filter(isImageBlock)[0];

  if (imageBlock && imageBlock.image.type === "file") {
    return imageBlock.image.file.url;
  }

  return undefined;
}

export function getFirstImageBlockIdFromListBlockChildren(
  listBlockChildrenResponse: ListBlockChildrenResponse,
): string | undefined {
  const blockChildren = listBlockChildrenResponse.results;
  const imageBlock = blockChildren.filter(isImageBlock)[0];
  return imageBlock?.id;
}
