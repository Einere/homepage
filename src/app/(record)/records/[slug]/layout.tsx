import { PropsWithChildren } from "react";
import dayjs from "dayjs";
import { retrievePage } from "@/app/lib/notionAPI";
import {
  getPublishedDateFromPageObjectResponse,
  getTitleFromQueryPageObjectResponse,
  isPageObjectResponse,
} from "@/app/utils/notionUtils";

export const revalidate = 1800;

export default async function RecordPageLayout(
  props: PropsWithChildren<{
    params: Promise<{ slug: string }>;
  }>,
) {
  const { slug } = await props.params;
  const page = await retrievePage(slug);

  let title = "";
  let publishedDate = "";

  if (isPageObjectResponse(page)) {
    title = getTitleFromQueryPageObjectResponse(page) ?? "";
    publishedDate = getPublishedDateFromPageObjectResponse(page);
  }

  // publishedDate 유효성 검사
  if (!publishedDate) {
    throw new Error(
      `Published date is missing for page: ${slug} (title: "${title}")`,
    );
  }

  const _createDate = dayjs(publishedDate).locale("ko");

  return (
    <div className="mx-auto min-h-screen max-w-[768px] px-4 lg:px-0">
      <div className="my-16">
        <h1>{title}</h1>
        <time
          dateTime={_createDate.toISOString()}
          className="mb-4 inline-block"
        >
          {_createDate
            .toDate()
            .toLocaleString("ko-KR", { hour12: false, dateStyle: "long" })}
        </time>
        {props.children}
      </div>
    </div>
  );
}
