import { getRecordsFromNotion } from "../lib/notionAPI";
import {
  getDescriptionFromPageObjectResponse,
  getIdFromPageObjectResponse,
  getPublishedDateFromPageObjectResponse,
  getTagsFromPageObjectResponse,
  getTitleFromQueryPageObjectResponse,
  isPageObjectResponse,
  NOTION_BLOG_RECORDS_PROPERTIES,
} from "@/app/utils/notionUtils";
import RecordCard from "@/app/components/RecordCard";
import Link from "next/link";

type RecordsProps = {
  searchParams: { [key: string]: string | string[] | undefined };
};

const PAGE_SIZE = 5;
const ALL_TAG = "ALL";
const cursorMap: Record<string, Record<string, string | undefined>> = {
  [ALL_TAG]: {
    "0": undefined,
  },
};

export async function Records(params: RecordsProps) {
  const tag = getSearchParam(params.searchParams.tag);
  const page = getSearchParam(params.searchParams.page) ?? "0";
  const currentPage = parseInt(page, 10);

  let results = [];

  if (tag && !cursorMap[tag]) {
    Object.assign(cursorMap, { [tag]: { "0": undefined } });
  }

  const response = await getRecordsFromNotion({
    filter: tag ? getTagFilter(tag) : undefined,
    page_size: PAGE_SIZE,
    start_cursor: cursorMap[tag ?? ALL_TAG][currentPage],
  });

  const { has_more, next_cursor } = response;
  results = response.results;

  // 다음 페이지 커서 설정
  if (has_more && next_cursor) {
    const nextPage = currentPage + 1;

    Object.assign(cursorMap[tag ?? ALL_TAG], {
      [nextPage.toString()]: next_cursor,
    });
  }

  if (results.length === 0) {
    return <p>보여드릴 기록이 없어요. 🫥</p>;
  }

  return (
    <>
      <ul>
        {results.filter(isPageObjectResponse).map((record) => {
          const title = getTitleFromQueryPageObjectResponse(record) ?? "";
          const description =
            getDescriptionFromPageObjectResponse(record) ?? "";
          const id = getIdFromPageObjectResponse(record);
          const publishedDate = getPublishedDateFromPageObjectResponse(record);
          const tags = getTagsFromPageObjectResponse(record);

          return (
            <li key={id} className="pb-4">
              <RecordCard
                id={id}
                title={title}
                description={description}
                publishedDate={publishedDate}
                tags={tags}
              />
            </li>
          );
        })}
      </ul>
      <ol className="flex justify-center gap-2 pb-16">
        {Object.keys(cursorMap[tag ?? ALL_TAG]).map((page) => (
          <Link
            key={page}
            href={{
              query: { tag: tag ? tag : undefined, page: page },
            }}
          >
            {page}
          </Link>
        ))}
      </ol>
    </>
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
