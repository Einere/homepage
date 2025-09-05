import { Client, QueryDataSourceParameters } from "@notionhq/client";
import { NOTION_BLOG_RECORDS_PROPERTIES } from "@/app/utils/notionUtils";

const notion = new Client({
  auth: process.env.NEXT_NOTION_API_AUTH_TOKEN,
});

export function getRecordsFromNotion(
  queryOptions?: Omit<QueryDataSourceParameters, "data_source_id">,
) {
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

export function retrieveDataSource() {
  return notion.dataSources.retrieve({
    data_source_id: process.env.NEXT_NOTION_API_DATA_SOURCE_ID,
  });
}

export function getPageFromNotion(pageId: string) {
  return notion.pages.retrieve({
    page_id: pageId,
  });
}
