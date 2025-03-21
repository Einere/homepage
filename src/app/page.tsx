import RecentRecordsSection from "@/app/components/RecentRecordsSection";

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <h1 className="text-main-100 bg-[url(/image-from-rawpixel-id-13194800.jpg)] bg-cover bg-fixed px-6 py-24 text-center text-5xl font-extrabold break-keep [background-position-x:center]">
        이 공간을 찾아주신 당신을 환영합니다.
      </h1>
      <div className="mx-auto max-w-[768px] py-20">
        <RecentRecordsSection />
      </div>
    </main>
  );
}
