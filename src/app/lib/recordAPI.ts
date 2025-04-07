import { Client } from "@notionhq/client";
import { QueryDatabaseParameters } from "@notionhq/client/build/src/api-endpoints";
import { NOTION_BLOG_RECORDS_PROPERTIES } from "@/app/utils/notionUtils";

const notion = new Client({
  auth: process.env.NEXT_NOTION_API_AUTH_TOKEN,
});

export function getRecordsFromNotion(
  queryOptions?: Omit<QueryDatabaseParameters, "database_id">,
) {
  return notion.databases.query({
    database_id: process.env.NEXT_NOTION_API_DATABASE_ID,
    sorts: [
      {
        property: NOTION_BLOG_RECORDS_PROPERTIES.PUBLISHED_DATE,
        direction: "descending",
      },
    ],
    ...queryOptions,
  });
}

export function getRecordsDBFromNotion() {
  return notion.databases.retrieve({
    database_id: process.env.NEXT_NOTION_API_DATABASE_ID,
  });
}
