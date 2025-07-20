import { useQuery } from "@tanstack/react-query";
import { isNonEmptyStr } from "@einere/common-utils";
import { SearchResponse } from "@notionhq/client/build/src/api-endpoints";

const fetchNotionSearch = async (query: string) => {
  const res = await fetch("/api/notion-search", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ query }),
  });
  if (!res.ok) throw new Error("검색 실패");
  return res.json();
};

export function useNotionSearch(query: string) {
  return useQuery<SearchResponse, Error, SearchResponse["results"]>({
    queryKey: ["notionSearch", query],
    queryFn: () => fetchNotionSearch(query),
    enabled: isNonEmptyStr(query), // query가 비어있을 때는 호출하지 않음
    staleTime: 1000 * 60 * 60 * 24, // 24시간은 fresh 상태로 유지
    select: (data) => data.results,
  });
}
