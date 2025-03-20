import SectionWithRecordCards from "@/app/components/SectionWithRecordCards";

export default function RecentRecordsSection() {
  return (
    <SectionWithRecordCards
      title="새로운 여정의 기록들"
      records={[
        {
          title: "기록 1",
          description: "기록 1입니다.",
          url: "1",
          createdDate: Date.now(),
        },
        {
          title: "기록 2 기록 2",
          description: "기록 2입니다. 기록 2입니다.",
          url: "2",
          createdDate: Date.now(),
        },
        {
          title: "기록 3 기록 3 기록 3",
          description: "기록 3입니다. 기록 3입니다. 기록 3입니다.",
          url: "3",
          createdDate: Date.now(),
        },
        {
          title: "기록 4 기록 4 기록 4 기록 4",
          description:
            "기록 4입니다. 기록 4입니다. 기록 4입니다. 기록 4입니다.",
          url: "4",
          createdDate: Date.now(),
        },
      ]}
    />
  );
}
