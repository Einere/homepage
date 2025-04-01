import RecordsPageSkeleton from "@/app/records/loading";
import { Suspense } from "react";
import { Records } from "@/app/components/Records";

export default function RecordsPage() {
  return (
    <main className="mx-auto min-h-screen max-w-[768px] px-4 lg:px-0">
      <h1 className="mt-16 mb-6">
        여정의 발자취를 작은 기록들로 남겨봅니다. 🐾
      </h1>
      <Suspense fallback={<RecordsPageSkeleton />}>
        <Records />
      </Suspense>
    </main>
  );
}
