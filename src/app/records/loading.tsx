import { RecordsPageLayout } from "@/app/records/_layout";

export default function RecordsPageSkeleton() {
  return (
    <RecordsPageLayout>
      <p className="bg-main-600">기록들을 불러오는 중입니다...</p>
    </RecordsPageLayout>
  );
}
