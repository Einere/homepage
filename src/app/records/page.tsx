import RecordsPageSkeleton from "@/app/records/loading";
import { Suspense } from "react";
import { Records } from "@/app/components/Records";
import { Tags } from "@/app/components/Tags";

type RecordsPageProps = {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export default async function RecordsPage(params: RecordsPageProps) {
  const searchParams = await params.searchParams;

  return (
    <main className="mx-auto min-h-screen max-w-[768px] px-4 lg:px-0">
      <h1 className="mt-16 mb-6">
        여정의 발자취를 작은 기록들로 남겨봅니다. 🐾
      </h1>
      <Suspense>
        <Tags />
      </Suspense>
      <Suspense fallback={<RecordsPageSkeleton />}>
        <Records searchParams={searchParams} />
      </Suspense>
    </main>
  );
}
