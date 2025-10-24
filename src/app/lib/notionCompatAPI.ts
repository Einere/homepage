import { Client } from "@notionhq/client";
import { NotionCompatAPI } from "notion-compat";
import { cache } from "react";

const notionClient = new Client({
  auth: process.env.NEXT_NOTION_API_AUTH_TOKEN,
  fetch: (url, init) => {
    return fetch(url, {
      ...init,
      next: {
        revalidate: 1800, // 30분마다 재검증
      },
    });
  },
});
const notionCompatAPI = new NotionCompatAPI(notionClient);

export const getPageByPageId = cache((pageId: string) => {
  return notionCompatAPI.getPage(pageId);
});
