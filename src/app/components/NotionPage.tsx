"use client";

import { type ExtendedRecordMap } from "notion-types";
import { NotionRenderer } from "react-notion-x";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import dayjs from "dayjs";

const Code = dynamic(() =>
  import("react-notion-x/build/third-party/code").then((m) => m.Code),
);

export function NotionPage({
  recordMap,
  rootPageId,
  title,
  publishedDate,
}: {
  recordMap: ExtendedRecordMap;
  rootPageId?: string;
  title: string;
  publishedDate: string;
}) {
  if (!recordMap) {
    return <p>기록을 찾을 수 없습니다. 😭</p>;
  }

  const _createDate = dayjs(publishedDate).locale("ko");

  return (
    <div className="mb-16">
      <h1>{title}</h1>
      <time dateTime={_createDate.toISOString()} className="mb-4 inline-block">
        {_createDate
          .toDate()
          .toLocaleString("ko-KR", { hour12: false, dateStyle: "long" })}
      </time>
      <NotionRenderer
        recordMap={recordMap}
        fullPage={false}
        darkMode={false}
        rootPageId={rootPageId}
        components={{
          Code,
          nextImage: Image,
          nextLink: Link,
        }}
        mapImageUrl={(url) => {
          return url;
        }}
      />
    </div>
  );
}
