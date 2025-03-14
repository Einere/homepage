import Image from "next/image";
import RecentPostsSection from "@/app/components/RecentPostsSection";

export default function HomePage() {
  return (
    <main>
      <h1 className="text-4xl">이 공간을 찾아주신 당신을 환영합니다.</h1>
      <div className="columns-2">
        <Image
          src="/image-from-rawpixel-id-13194800.jpg"
          alt="분홍색과 푸른색의 수국 꽃의 압화 사진"
          width="673"
          height="1200"
          className="rounded-xl"
        />
        <div>
          <RecentPostsSection />
        </div>
      </div>
    </main>
  );
}
