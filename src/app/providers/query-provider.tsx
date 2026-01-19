"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactNode, useState } from "react";
import dynamic from "next/dynamic";

// Best Practice: bundle-dynamic-imports - 개발 도구는 동적 임포트로 번들 크기 최적화
const ReactQueryDevtools = dynamic(
  () =>
    import("@tanstack/react-query-devtools").then(
      (mod) => mod.ReactQueryDevtools,
    ),
  { ssr: false },
);

export default function QueryProvider({ children }: { children: ReactNode }) {
  const [client] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 1000 * 60 * 5, // 5 minutes
            gcTime: 1000 * 60 * 30, // 30 minutes (formerly cacheTime)
            refetchOnWindowFocus: false,
            retry: 1,
          },
        },
      }),
  );

  return (
    <QueryClientProvider client={client}>
      {children}
      {process.env.NODE_ENV === "development" && <ReactQueryDevtools />}
    </QueryClientProvider>
  );
}
