import { NextRequest, NextResponse } from "next/server";
import { queryRecordsDataSource } from "@/app/lib/notionAPI";
import {
  getDescriptionFromPageObject,
  getIdFromPageObject,
  getPublishedDateFromPageObject,
  getTagsFromPageObject,
  getTitleFromPageObject,
  isPageObject,
  NOTION_BLOG_RECORDS_PROPERTIES,
} from "@/app/utils/notionUtils";
import type { PartialSelectResponse } from "@/app/components/RecordCard";

// Route Segment Config: 동적 라우트 설정 (searchParams 사용)
export const dynamic = "force-dynamic";
export const revalidate = 1800; // 30분마다 재검증

const PAGE_SIZE = 5;

type RecordItem = {
  id: string;
  title: string;
  description: string;
  publishedDate: string;
  tags: Array<PartialSelectResponse>;
};

function getTagFilter(tag: string) {
  return {
    property: NOTION_BLOG_RECORDS_PROPERTIES.TAGS,
    multi_select: {
      contains: tag,
    },
  };
}

export async function GET(req: NextRequest) {
  try {
    const searchParams = req.nextUrl.searchParams;
    const tag = searchParams.get("tag");
    const startCursor = searchParams.get("start_cursor") || undefined;

    // Best Practice: async-api-routes - 독립적인 작업 병렬화 준비
    // 현재는 단일 호출이지만, 향후 확장 가능한 구조
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
      start_cursor: startCursor,
    });

    const { has_more, next_cursor } = response;
    const results = response.results;

    // Best Practice: server-serialization - 필요한 필드만 추출하여 반환
    const records: RecordItem[] = results.filter(isPageObject).map((record) => {
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
          color: tag.color as PartialSelectResponse["color"],
        })),
      };
    });

    return NextResponse.json(
      {
        results: records,
        has_more,
        next_cursor: next_cursor || null,
      },
      {
        headers: {
          "Cache-Control":
            "public, max-age=1800, s-maxage=1800, stale-while-revalidate=3600",
        },
      },
    );
  } catch (error) {
    console.error("Records API Error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 },
    );
  }
}
