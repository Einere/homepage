import { NotionAPI } from "notion-client";

const notionAPI = new NotionAPI({
  authToken: process.env.NEXT_NOTION_API_TOKEN_V2,
});

export { notionAPI };
