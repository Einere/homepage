import { queryRecordsDataSource } from "../lib/notionAPI";
import {
  getDescriptionFromPageObject,
  getIdFromPageObject,
  getPublishedDateFromPageObject,
  getTagsFromPageObject,
  getTitleFromPageObject,
  isPageObject,
  NOTION_BLOG_RECORDS_PROPERTIES,
} from "@/app/utils/notionUtils";
import RecordsClient from "@/app/components/RecordsClient";

type RecordsProps = {
  searchParams: { [key: string]: string | string[] | undefined };
};

const PAGE_SIZE = 5;

// Best Practice: server-serialization - 클라이언트에 필요한 최소한의 데이터만 전달
export type RecordItem = {
  id: string;
  title: string;
  description: string;
  publishedDate: string;
  tags: Array<{
    id: string;
    name: string;
    color: string;
  }>;
};

export async function Records(params: RecordsProps) {
  const tag = getSearchParam(params.searchParams.tag);

  // 초기 데이터만 로드 (첫 페이지, start_cursor: undefined)
  const response = await queryRecordsDataSource({
    filter: tag
      ? {
          and: [
            {
              date: { is_not_empty: true },
              property: NOTION_BLOG_RECORDS_PROPERTIES.PUBLISHED_DATE,
              type: "date",
            },
            getTagFilter(tag),
          ],
        }
      : {
          and: [
            {
              date: { is_not_empty: true },
              property: NOTION_BLOG_RECORDS_PROPERTIES.PUBLISHED_DATE,
              type: "date",
            },
          ],
        },
    page_size: PAGE_SIZE,
    start_cursor: undefined,
  });

  const { has_more, next_cursor } = response;
  const results = response.results;

  // Best Practice: server-serialization - 필요한 필드만 추출
  const initialRecords: RecordItem[] = results
    .filter(isPageObject)
    .map((record) => {
      const title = getTitleFromPageObject(record) ?? "";
      const description = getDescriptionFromPageObject(record) ?? "";
      const id = getIdFromPageObject(record);
      const publishedDate = getPublishedDateFromPageObject(record);
      const tags = getTagsFromPageObject(record);

      return {
        id,
        title,
        description,
        publishedDate,
        tags: tags.map((tag) => ({
          id: tag.id,
          name: tag.name,
          color: tag.color,
        })),
      };
    });

  return (
    <RecordsClient
      initialRecords={initialRecords}
      initialHasMore={has_more}
      initialNextCursor={next_cursor || null}
      tag={tag}
    />
  );
}

function getSearchParam(searchParamValue: string | string[] | undefined) {
  if (searchParamValue === undefined || searchParamValue instanceof Array) {
    return null;
  }

  return searchParamValue;
}

function getTagFilter(tag: string) {
  return {
    property: NOTION_BLOG_RECORDS_PROPERTIES.TAGS,
    multi_select: {
      contains: tag,
    },
  };
}
