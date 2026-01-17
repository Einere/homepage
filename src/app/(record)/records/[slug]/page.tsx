import { NotionRenderer } from "@homepage/notion-renderer";
import type { Metadata } from "next";

import {
  retrievePage,
  queryRecordsDataSource,
  retrieveBlockChildren,
} from "@/app/lib/notionAPI";
import { Comments } from "@/app/components/Comments";
import {
  getDescriptionFromPageObject,
  getFirstImageBlockIdFromListBlockChildren,
  getTitleFromPageObject,
} from "@/app/utils/notionUtils";
import { cache } from "react";
import { NotionImage } from "@/app/components/NotionImage";
import styles from "./page.module.css";

type Props = {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

// Cache the page data to avoid duplicate API calls
const getCachedPageData = cache(async (slug: string) => {
  const page = await retrievePage(slug);
  const blockChildren = await retrieveBlockChildren(slug);

  return { page: page, blockChildren };
});

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  // read route params
  const { slug } = await params;

  // fetch data using cached function
  const { page, blockChildren } = await getCachedPageData(slug);

  const title = getTitleFromPageObject(page) ?? undefined;
  const firstImageBlockId =
    getFirstImageBlockIdFromListBlockChildren(blockChildren);
  const description = getDescriptionFromPageObject(page);

  // firstImageBlockId가 있으면 항상 프록시 URL 사용 (모든 이미지 타입 지원)
  // 상대 경로를 사용하면 Next.js가 root layout의 metadataBase를 자동으로 활용하여 절대 URL 생성
  const ogImageUrl = firstImageBlockId
    ? `/api/notion-image?blockId=${firstImageBlockId}`
    : undefined;

  return {
    title: title,
    description: description,
    openGraph: {
      type: "website",
      title: title,
      description: description,
      images: ogImageUrl
        ? [
            {
              url: ogImageUrl,
            },
          ]
        : [],
    },
  };
}

export const revalidate = 1800; // NotionRenderer 가 자원 요청 시, 기본 X-Amz-Expires 헤더 값이 3600이라서, 맞춰줌.
export const dynamicParams = true; // true is default
export async function generateStaticParams() {
  const body = await queryRecordsDataSource();
  const { results } = body;

  return results.map((record) => ({
    slug: String(record.id),
  }));
}

export default async function RecordPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const { blockChildren } = await getCachedPageData(slug);

  return (
    <div className={styles.notion}>
      {/* Custom Notion Renderer */}
      <NotionRenderer
        blocks={blockChildren}
        retrieveBlockChildren={retrieveBlockChildren}
        customImage={NotionImage}
      />
      <Comments />
    </div>
  );
}
