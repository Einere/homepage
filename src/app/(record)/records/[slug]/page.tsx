import { NotionRenderer } from "@/app/components/NotionRenderer";
import type { Metadata } from "next";

import {
  retrievePage,
  queryRecordsDataSource,
  retrieveBlockChildren,
} from "@/app/lib/notionAPI";
import { Comments } from "@/app/components/Comments";
import {
  getDescriptionFromPageObject,
  getFirstImageFromListBlockChildren,
  getTitleFromPageObject,
} from "@/app/utils/notionUtils";
import { cache } from "react";
import { NotionImage } from "@/app/components/NotionImage";

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
  const imageUrl = getFirstImageFromListBlockChildren(blockChildren);
  const description = getDescriptionFromPageObject(page);

  return {
    title: title,
    description: description,
    openGraph: {
      type: "website",
      title: title,
      description: description,
      images: [
        {
          url: imageUrl ?? "",
        },
      ],
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
    <>
      {/* Custom Notion Renderer */}
      <NotionRenderer blocks={blockChildren} customImage={NotionImage} />
      <Comments />
    </>
  );
}
