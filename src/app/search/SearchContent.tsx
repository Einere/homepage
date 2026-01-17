"use client";

import { useState } from "react";
import { getTitleFromPageObject, isPageObject } from "@/app/utils/notionUtils";
import { useNotionSearch } from "@/app/hooks/useNotionSearch";
import Link from "next/link";
import { useDebounce } from "@/app/hooks/useDebounce";
import { isEmptyArray, isExist } from "@einere/common-utils";

export default function SearchContent() {
  const [query, setQuery] = useState("");
  const debouncedQuery = useDebounce(query, 1000);

  const { data, isFetching } = useNotionSearch(debouncedQuery);

  return (
    <>
      <h1 className="mt-16 mb-6">찾고 싶은게 무엇인가요? 🔍</h1>
      <p className="mb-6">제목을 기반으로 기록들을 찾아볼 수 있어요.</p>
      <form
        role="search"
        onSubmit={(e) => {
          e.preventDefault();
          return false;
        }}
        className="mb-6 grid grid-cols-[minmax(100px,_auto)_1fr]"
      >
        <label htmlFor="search-by-title">제목</label>
        <input
          id="search-by-title"
          type="search"
          onChange={(e) => setQuery(e.target.value)}
          className="rounded-sm border-1 border-solid border-gray-400"
        />
      </form>

      <ul>
        {(() => {
          if (isFetching) {
            return <p>기록들을 찾아보는중...</p>;
          }

          if (!isExist(data)) {
            return null;
          }

          if (isEmptyArray(data)) {
            return <p>해당 제목으로 기록을 아무것도 찾을 수 없었어요.</p>;
          }

          return data.filter(isPageObject).map((page) => (
            <li key={page.id}>
              <Link href={`/records/${page.id}`}>
                {getTitleFromPageObject(page)}
              </Link>
            </li>
          ));
        })()}
      </ul>
    </>
  );
}
