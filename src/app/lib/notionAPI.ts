import { Client, QueryDataSourceParameters } from "@notionhq/client";
import { NOTION_BLOG_RECORDS_PROPERTIES } from "@/app/utils/notionUtils";

// Custom fetch with cache control for Next.js
const customFetch: typeof fetch = (url, init) => {
  return fetch(url, {
    ...init,
    next: {
      revalidate: 1800, // 30분마다 재검증 (page.tsx의 revalidate와 동일)
    },
  });
};

const notion = new Client({
  auth: process.env.NEXT_NOTION_API_AUTH_TOKEN,
  fetch: customFetch,
});

export function queryRecordsDataSource(
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
    filter: {
      and: [
        {
          date: { is_not_empty: true },
          property: NOTION_BLOG_RECORDS_PROPERTIES.PUBLISHED_DATE,
          type: "date",
        },
      ],
    },
    ...queryOptions,
  });
}

export function retrieveRecordsDataSource() {
  return notion.dataSources.retrieve({
    data_source_id: process.env.NEXT_NOTION_API_DATA_SOURCE_ID,
  });
}

export function retrievePage(pageId: string) {
  return notion.pages.retrieve({
    page_id: pageId,
  });
}
