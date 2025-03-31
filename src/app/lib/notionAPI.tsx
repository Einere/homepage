import { Client } from "@notionhq/client";
import { NotionCompatAPI } from "notion-compat";

const notionAPI = new NotionCompatAPI(
  new Client({ auth: process.env.NEXT_NOTION_API_AUTH_TOKEN }),
);

export { notionAPI };
