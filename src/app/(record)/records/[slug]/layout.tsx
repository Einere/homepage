import { PropsWithChildren, ViewTransition } from "react";
import dayjs from "dayjs";
import { retrievePage } from "@/app/lib/notionAPI";
import {
  getPublishedDateFromPageObject,
  getTitleFromPageObject,
  isPageObject,
} from "@/app/utils/notionUtils";
import "prismjs/themes/prism-tomorrow.css";

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

  if (isPageObject(page)) {
    title = getTitleFromPageObject(page) ?? "";
    publishedDate = getPublishedDateFromPageObject(page);
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
        <ViewTransition name={`record-title-${slug}`}>
          <h1>{title}</h1>
        </ViewTransition>
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
