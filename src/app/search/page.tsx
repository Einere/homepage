import QueryProvider from "@/app/providers/query-provider";
import SearchContent from "./SearchContent";

export default function SearchPage() {
  return (
    <main className="mx-auto min-h-screen max-w-[768px] px-4 lg:px-0">
      <QueryProvider>
        <SearchContent />
      </QueryProvider>
    </main>
  );
}
