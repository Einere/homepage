import { NotionPage } from "@/app/components/NotionPage";
import type { Metadata } from "next";

import { getPageByPageId } from "@/app/lib/notionCompatAPI";
import { retrievePage, queryRecordsDataSource } from "@/app/lib/notionAPI";
import { Comments } from "@/app/components/Comments";
import { identity } from "@einere/common-utils";
import { getPageImageUrls, getPageTitle } from "notion-utils";
import { PageObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import { getDescriptionFromPageObjectResponse } from "@/app/utils/notionUtils";
import { cache } from "react";

type Props = {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

// Cache the page data to avoid duplicate API calls
const getCachedPageData = cache(async (slug: string) => {
  const recordMap = await getPageByPageId(slug);
  const page = await retrievePage(slug);
  return { recordMap, page };
});

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  // read route params
  const { slug } = await params;

  // fetch data using cached function
  const { recordMap, page } = await getCachedPageData(slug);

  const title = getPageTitle(recordMap) ?? undefined;
  const imageUrls = getPageImageUrls(recordMap, { mapImageUrl: identity });
  const description = getDescriptionFromPageObjectResponse(
    page as Pick<PageObjectResponse, "properties">,
  );

  return {
    title: title,
    description: description,
    openGraph: {
      type: "website",
      title: title,
      description: description,
      images: [
        {
          url: imageUrls[0],
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
  const { recordMap } = await getCachedPageData(slug);

  return (
    <>
      <NotionPage recordMap={recordMap} />
      <Comments />
    </>
  );
}
