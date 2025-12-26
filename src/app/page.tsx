import { RecentRecordsSection } from "@/app/components/RecentRecordsSection";

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <h1 className="mx-auto mb-0 max-h-[673px] px-6 py-24 text-center text-5xl break-keep">
        이 공간을 찾아주신 당신을 환영합니다.
      </h1>
      <div className="mx-auto max-w-[768px] px-4 pb-24 lg:px-0">
        <RecentRecordsSection />
      </div>
    </main>
  );
}
