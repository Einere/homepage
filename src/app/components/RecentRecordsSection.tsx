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

const RECENT_RECORDS_SECTION_TITLE = "새로운 여정의 기록들";
const MAX_RECORDS = 5;

export async function RecentRecordsSection() {
  const { results } = await queryRecordsDataSource({
    page_size: MAX_RECORDS,
  });

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
