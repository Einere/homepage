import { NotionPage } from "@/app/components/NotionPage";
import type { Metadata, ResolvingMetadata } from "next";
import { getPageTitle } from "notion-utils";
import { notionAPI } from "@/app/lib/notionAPI";

type Props = {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  // read route params
  const { slug } = await params;

  // fetch data
  const recordMap = await getPageByPageId(slug);

  return {
    title: getPageTitle(recordMap),
  };
}

export default async function RecordPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = await params;
  const recordMap = await getPageByPageId(slug);

  return (
    <div className="mx-auto min-h-screen max-w-[768px]">
      <div className="mt-16 mb-6">
        <NotionPage recordMap={recordMap} />
      </div>
    </div>
  );
}

function getPageByPageId(pageId: string) {
  return notionAPI.getPage(pageId);
}
