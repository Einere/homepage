import { NotionPage } from "@/app/components/NotionPage";
import type { Metadata } from "next";
import { getPageTitle } from "notion-utils";
import { notionAPI } from "@/app/lib/notionAPI";
import { RecordPageLayout } from "@/app/records/[slug]/_layout";
import { getRecordsFromNotion } from "@/app/lib/recordAPI";

type Props = {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  // read route params
  const { slug } = await params;

  // fetch data
  const recordMap = await getPageByPageId(slug);

  return {
    title: getPageTitle(recordMap),
  };
}

export const revalidate = 3600; // NotionRenderer 가 자원 요청 시, 기본 X-Amz-Expires 헤더 값이 3600이라서, 맞춰줌.
export const dynamicParams = true; // true is default
export async function generateStaticParams() {
  const body = await getRecordsFromNotion();
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
  const recordMap = await getPageByPageId(slug);

  return (
    <RecordPageLayout>
      <NotionPage recordMap={recordMap} />
    </RecordPageLayout>
  );
}

function getPageByPageId(pageId: string) {
  return notionAPI.getPage(pageId);
}
