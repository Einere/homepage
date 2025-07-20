// app/api/notion-search/route.ts
import { NextRequest, NextResponse } from "next/server";
import { Client } from "@notionhq/client";

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

    return NextResponse.json(result);
  } catch (error: any) {
    console.error("Notion API Error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 },
    );
  }
}
