// app/api/notion-search/route.ts
import { NextRequest, NextResponse } from "next/server";
import { Client } from "@notionhq/client";

// Route Segment Config: ISR 캐싱 설정
export const revalidate = 1800; // 30분마다 재검증

const notion = new Client({ auth: process.env.NEXT_NOTION_API_AUTH_TOKEN });

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const query = body.query || "";

    const result = await notion.search({
      query,
      sort: {
        direction: "descending",
        timestamp: "last_edited_time",
      },
    });

    return NextResponse.json(result, {
      headers: {
        "Cache-Control":
          "public, max-age=1800, s-maxage=1800, stale-while-revalidate=3600",
      },
    });
  } catch (error) {
    console.error("Notion API Error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 },
    );
  }
}
