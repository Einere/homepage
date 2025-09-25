import {
  RecentRecordsSection,
  RecentRecordsSectionSkeleton,
} from "@/app/components/RecentRecordsSection";
import { Suspense } from "react";

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <h1 className="text-main-300 mx-auto mb-0 max-h-[673px] bg-[url(/pink_blue_flowers.webp)] bg-fixed bg-top px-6 py-24 text-center text-5xl break-keep [-webkit-text-stroke:0.4px_white] xl:bg-cover">
        이 공간을 찾아주신 당신을 환영합니다.
      </h1>
      <div className="mx-auto max-w-[768px] px-4 py-20 lg:px-0">
        <Suspense fallback={<RecentRecordsSectionSkeleton />}>
          <RecentRecordsSection />
        </Suspense>
      </div>
    </main>
  );
}
