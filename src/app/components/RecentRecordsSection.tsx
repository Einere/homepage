import {
  SectionWithRecordCards,
  SectionWithRecordCardsSkeleton,
} from "@/app/components/SectionWithRecordCards";
import { getRecordsFromNotion } from "@/app/lib/recordAPI";
import {
  getDescriptionFromPageObjectResponse,
  getIdFromPageObjectResponse,
  getPublishedDateFromPageObjectResponse,
  getTagsFromPageObjectResponse,
  getTitleFromQueryPageObjectResponse,
  isPageObjectResponse,
} from "@/app/utils/notionUtils";
import { filter, limit, toArray } from "@einere/common-utils";

const RECENT_RECORDS_SECTION_TITLE = "새로운 여정의 기록들";
const MAX_RECORDS = 5;

export async function RecentRecordsSection() {
  const { results } = await getRecordsFromNotion();

  const recentRecords = toArray(
    limit(MAX_RECORDS, filter(isPageObjectResponse, results)),
  );

  return (
    <SectionWithRecordCards
      title={RECENT_RECORDS_SECTION_TITLE}
      records={recentRecords.map((record) => {
        return {
          title: getTitleFromQueryPageObjectResponse(record) ?? "",
          description: getDescriptionFromPageObjectResponse(record) ?? "",
          id: getIdFromPageObjectResponse(record),
          publishedDate: getPublishedDateFromPageObjectResponse(record),
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
