"use client";

import { useInfiniteQuery } from "@tanstack/react-query";
import { useEffect, useRef, useCallback } from "react";
import { startTransition } from "react";
import RecordCard from "@/app/components/RecordCard";
import type { RecordItem } from "./Records";

type RecordsClientProps = {
  initialRecords: RecordItem[];
  initialHasMore: boolean;
  initialNextCursor: string | null;
  tag: string | null;
};

type RecordsResponse = {
  results: RecordItem[];
  has_more: boolean;
  next_cursor: string | null;
};

async function fetchRecords(
  tag: string | null,
  startCursor?: string | null,
): Promise<RecordsResponse> {
  const params = new URLSearchParams();
  if (tag) {
    params.set("tag", tag);
  }
  if (startCursor) {
    params.set("start_cursor", startCursor);
  }

  const response = await fetch(`/api/records?${params.toString()}`);
  if (!response.ok) {
    throw new Error("Failed to fetch records");
  }
  return response.json();
}

export default function RecordsClient({
  initialRecords,
  initialHasMore,
  initialNextCursor,
  tag,
}: RecordsClientProps) {
  // Best Practice: client-swr-dedup - useInfiniteQuery로 자동 요청 중복 제거 및 캐싱
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, status } =
    useInfiniteQuery<
      RecordsResponse,
      Error,
      RecordsResponse,
      [string, string | null],
      string | undefined
    >({
      queryKey: ["records", tag],
      queryFn: ({ pageParam = undefined }) => fetchRecords(tag, pageParam),
      initialPageParam: undefined,
      getNextPageParam: (lastPage) =>
        lastPage.has_more && lastPage.next_cursor
          ? lastPage.next_cursor
          : undefined,
      initialData: {
        pages: [
          {
            results: initialRecords,
            has_more: initialHasMore,
            next_cursor: initialNextCursor,
          },
        ],
        pageParams: [undefined],
      },
    });

  // Best Practice: rerender-transitions - Intersection Observer 콜백에서 startTransition 사용
  const observerTarget = useRef<HTMLDivElement>(null);

  const handleIntersection = useCallback(
    (entries: IntersectionObserverEntry[]) => {
      const [entry] = entries;
      if (entry.isIntersecting && hasNextPage && !isFetchingNextPage) {
        // Non-urgent 업데이트를 startTransition으로 감싸기
        startTransition(() => {
          fetchNextPage();
        });
      }
    },
    [hasNextPage, isFetchingNextPage, fetchNextPage],
  );

  useEffect(() => {
    const target = observerTarget.current;
    if (!target) return;

    const observer = new IntersectionObserver(handleIntersection, {
      root: null,
      rootMargin: "100px", // 100px 전에 미리 로드
      threshold: 0.1,
    });

    observer.observe(target);

    return () => {
      observer.disconnect();
    };
  }, [handleIntersection]);

  // 모든 페이지의 결과를 평탄화
  const allRecords = data?.pages.flatMap((page) => page.results) ?? [];

  if (status === "error") {
    return <p>데이터를 불러오는 중 오류가 발생했습니다.</p>;
  }

  if (allRecords.length === 0) {
    return <p>보여드릴 기록이 없어요. 🫥</p>;
  }

  return (
    <>
      <ul>
        {allRecords.map((record) => (
          <li key={record.id} className="record-list-item pb-4">
            <RecordCard
              id={record.id}
              title={record.title}
              description={record.description}
              publishedDate={record.publishedDate}
              tags={record.tags}
            />
          </li>
        ))}
      </ul>
      {/* Intersection Observer를 위한 sentinel 요소 */}
      <div ref={observerTarget} className="h-4" />
      {isFetchingNextPage && (
        <div className="py-4 text-center text-gray-500">로딩 중...</div>
      )}
      {!hasNextPage && allRecords.length > 0 && (
        <div className="py-4 pb-16 text-center text-gray-500">
          모든 기록을 불러왔습니다.
        </div>
      )}
    </>
  );
}
