import {
  SectionWithRecordCards,
  SectionWithRecordCardsSkeleton,
} from "@/app/components/SectionWithRecordCards";
import { getRecordsFromNotion } from "@/app/lib/recordAPI";
import {
  getCreatedTimeFromPageObjectResponse,
  getDescriptionFromPageObjectResponse,
  getIdFromPageObjectResponse,
  getTagsFromPageObjectResponse,
  getTitleFromQueryPageObjectResponse,
  isPageObjectResponse,
} from "@/app/utils/notionUtils";

const RECENT_RECORDS_SECTION_TITLE = "새로운 여정의 기록들";

export async function RecentRecordsSection() {
  const { results } = await getRecordsFromNotion();

  return (
    <SectionWithRecordCards
      title={RECENT_RECORDS_SECTION_TITLE}
      records={results.filter(isPageObjectResponse).map((record) => {
        return {
          title: getTitleFromQueryPageObjectResponse(record) ?? "",
          description: getDescriptionFromPageObjectResponse(record) ?? "",
          id: getIdFromPageObjectResponse(record),
          createdDate: getCreatedTimeFromPageObjectResponse(record),
          tags: getTagsFromPageObjectResponse(record),
        };
      })}
    />
  );
}

export function RecentRecordsSectionSkeleton() {
  return (
    <SectionWithRecordCardsSkeleton title={RECENT_RECORDS_SECTION_TITLE} />
  );
}
