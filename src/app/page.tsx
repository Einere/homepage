import {
  RecentRecordsSection,
  RecentRecordsSectionSkeleton,
} from "@/app/components/RecentRecordsSection";
import { Suspense } from "react";

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <h1 className="text-main-100 [background-position-x]:center mx-auto max-h-[673px] bg-[url(/blue_and_pink_flowers.jpeg)] bg-fixed px-6 py-24 text-center text-5xl break-keep lg:bg-contain">
        이 공간을 찾아주신 당신을 환영합니다.
      </h1>
      <div className="mx-auto max-w-[768px] py-20">
        <Suspense fallback={<RecentRecordsSectionSkeleton />}>
          <RecentRecordsSection />
        </Suspense>
      </div>
    </main>
  );
}
