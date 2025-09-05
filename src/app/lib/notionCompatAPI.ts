import { Client } from "@notionhq/client";
import { NotionCompatAPI } from "notion-compat";

const notionClient = new Client({
  auth: process.env.NEXT_NOTION_API_AUTH_TOKEN,
});
const notionCompatAPI = new NotionCompatAPI(notionClient);

export function getPageByPageId(pageId: string) {
  return notionCompatAPI.getPage(pageId);
}
