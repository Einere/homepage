import { Client, QueryDataSourceParameters } from "@notionhq/client";
import { NOTION_BLOG_RECORDS_PROPERTIES } from "@/app/utils/notionUtils";

const notion = new Client({
  auth: process.env.NEXT_NOTION_API_AUTH_TOKEN,
});

export function getRecordsFromNotion(queryOptions?: QueryDataSourceParameters) {
  return notion.dataSources.query({
    data_source_id: process.env.NEXT_NOTION_API_DATA_SOURCE_ID,
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

export function getPageFromNotion(pageId: string) {
  return notion.pages.retrieve({
    page_id: pageId,
  });
}
