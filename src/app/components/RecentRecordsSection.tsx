import {
  SectionWithRecordCards,
  SectionWithRecordCardsSkeleton,
} from "@/app/components/SectionWithRecordCards";
import { queryRecordsDataSource } from "@/app/lib/notionAPI";
import {
  getDescriptionFromPageObject,
  getIdFromPageObject,
  getPublishedDateFromPageObject,
  getTagsFromPageObject,
  getTitleFromPageObject,
  isPageObject,
} from "@/app/utils/notionUtils";
import { cache } from "react";

const RECENT_RECORDS_SECTION_TITLE = "새로운 여정의 기록들";
const MAX_RECORDS = 5;

// Best Practice: server-cache-react - 동일 요청 내 중복 호출 방지
const getCachedRecentRecords = cache(() =>
  queryRecordsDataSource({
    page_size: MAX_RECORDS,
  }),
);

export async function RecentRecordsSection() {
  const { results } = await getCachedRecentRecords();

  const recentRecords = results.filter(isPageObject);

  return (
    <SectionWithRecordCards
      title={RECENT_RECORDS_SECTION_TITLE}
      records={recentRecords.map((record) => {
        return {
          title: getTitleFromPageObject(record) ?? "",
          description: getDescriptionFromPageObject(record) ?? "",
          id: getIdFromPageObject(record),
          publishedDate: getPublishedDateFromPageObject(record),
          tags: getTagsFromPageObject(record),
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
