import { NextRequest, NextResponse } from "next/server";
import { Client } from "@notionhq/client";
import {
  getImageUrlFromImageData,
  isImageBlock,
} from "@/app/utils/notionUtils";

// Route Segment Config: ISR 캐싱 설정
export const revalidate = 1800; // 30분마다 재검증

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const blockId = searchParams.get("blockId");

  if (!blockId) {
    return NextResponse.json({ error: "blockId is required" }, { status: 400 });
  }

  try {
    // Create a new Notion client for this request
    const notion = new Client({
      auth: process.env.NEXT_NOTION_API_AUTH_TOKEN,
    });

    // Get the specific block directly
    const block = await notion.blocks.retrieve({
      block_id: blockId,
    });

    if (!isImageBlock(block)) {
      return NextResponse.json(
        { error: "Image block not found" },
        { status: 404 },
      );
    }

    const imageUrl = getImageUrlFromImageData(block.image);

    if (!imageUrl) {
      return NextResponse.json(
        { error: "No image URL found" },
        { status: 404 },
      );
    }

    // Fetch the image from the Notion URL
    const imageResponse = await fetch(imageUrl);

    if (!imageResponse.ok) {
      return NextResponse.json(
        { error: "Failed to fetch image" },
        { status: imageResponse.status },
      );
    }

    // 스트리밍 최적화: 버퍼로 모두 받지 않고 바로 스트리밍
    const contentType =
      imageResponse.headers.get("content-type") || "image/jpeg";

    // Return the image with streaming and enhanced caching
    return new NextResponse(imageResponse.body, {
      status: 200,
      headers: {
        "Content-Type": contentType,
        // Edge 캐싱 강화: stale-while-revalidate로 백그라운드 갱신
        "Cache-Control":
          "public, max-age=1800, s-maxage=1800, stale-while-revalidate=3600",
      },
    });
  } catch (error) {
    console.error("Error fetching Notion image:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}
