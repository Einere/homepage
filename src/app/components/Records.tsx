import { getRecordsFromNotion } from "../lib/recordAPI";
import {
  getCreatedTimeFromPageObjectResponse,
  getDescriptionFromPageObjectResponse,
  getIdFromPageObjectResponse,
  getTagsFromPageObjectResponse,
  getTitleFromQueryPageObjectResponse,
  isPageObjectResponse,
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
        const createdDate = getCreatedTimeFromPageObjectResponse(record);
        const tags = getTagsFromPageObjectResponse(record);

        return (
          <li key={id} className="pb-4">
            <RecordCard
              id={id}
              title={title}
              description={description}
              createdDate={createdDate}
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
    property: "태그",
    multi_select: {
      contains: searchParamValue,
    },
  };
}
