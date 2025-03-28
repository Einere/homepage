import { Client } from "@notionhq/client";

export function getRecordsFromNotion() {
  const notion = new Client({
    auth: process.env.NEXT_NOTION_API_AUTH_TOKEN,
  });

  return notion.databases.query({
    database_id: process.env.NEXT_NOTION_API_DATABASE_ID,
  });
}
