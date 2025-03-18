"use client";

import { type ExtendedRecordMap } from "notion-types";
import { NotionRenderer } from "react-notion-x";

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
    <NotionRenderer
      recordMap={recordMap}
      fullPage={true}
      darkMode={false}
      rootPageId={rootPageId}
    />
  );
}
