"use client";

import { type ExtendedRecordMap } from "notion-types";
import { NotionRenderer } from "react-notion-x";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";

const Code = dynamic(
  () => import("react-notion-x/build/third-party/code").then((m) => m.Code),
  {
    ssr: false,
    loading: () => <div className="h-8 animate-pulse rounded bg-gray-200" />,
  },
);

export function NotionPage({
  recordMap,
  rootPageId,
}: {
  recordMap: ExtendedRecordMap;
  rootPageId?: string;
}) {
  if (!recordMap) {
    return <p>기록을 찾을 수 없습니다. 😭</p>;
  }

  return (
    <div className="mb-16">
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
