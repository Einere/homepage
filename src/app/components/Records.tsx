import { getRecordsFromNotion } from "../lib/recordAPI";
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

type RecordsProps = {
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function Records(params: RecordsProps) {
  const tagFilter = getFilter(params.searchParams.tag);

  const body = tagFilter
    ? await getRecordsFromNotion({
        filter: tagFilter,
      })
    : await getRecordsFromNotion();
  const { results } = body;

  if (results.length === 0) {
    return <p>보여드릴 기록이 없어요. 🫥</p>;
  }

  return (
    /* TODO: 페이지네이션 도입하기 */
    <ul>
      {results.filter(isPageObjectResponse).map((record) => {
        const title = getTitleFromQueryPageObjectResponse(record) ?? "";
        const description = getDescriptionFromPageObjectResponse(record) ?? "";
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
  );
}

function getFilter(searchParamValue: string | string[] | undefined) {
  if (searchParamValue === undefined || searchParamValue instanceof Array) {
    return null;
  }

  return {
    property: NOTION_BLOG_RECORDS_PROPERTIES.TAGS,
    multi_select: {
      contains: searchParamValue,
    },
  };
}
