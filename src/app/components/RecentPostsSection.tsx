import SectionWithPostcards from "@/app/components/SectionWithPostcards";

export default function RecentPostsSection() {
  return (
    <SectionWithPostcards
      title="새로운 여정의 기록들"
      postList={[
        {
          title: "기록 1",
          description: "기록 1입니다.",
          url: "1",
          createdDate: Date.now(),
        },
        {
          title: "기록 2",
          description: "기록 2입니다.",
          url: "2",
          createdDate: Date.now(),
        },
        {
          title: "기록 3",
          description: "기록 3입니다.",
          url: "3",
          createdDate: Date.now(),
        },
      ]}
    />
  );
}
