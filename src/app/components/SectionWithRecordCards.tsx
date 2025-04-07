import RecordCard, { type RecordCardProps } from "@/app/components/RecordCard";
import { PropsWithChildren } from "react";

function SectionWithRecordCardsLayout(
  props: PropsWithChildren<{
    title: string;
  }>,
) {
  const { title, children } = props;

  return (
    <section>
      <h2 className="">{title}</h2>
      <hr />
      {children}
    </section>
  );
}

interface RecentPostsSectionProps {
  title: string;
  records: Array<RecordCardProps>;
}

export function SectionWithRecordCards(props: RecentPostsSectionProps) {
  const { title, records } = props;

  return (
    <SectionWithRecordCardsLayout title={title}>
      <ol className="flex flex-col gap-4">
        {records.map((record) => (
          <li key={record.id}>
            <RecordCard
              id={record.id}
              title={record.title}
              description={record.description}
              publishedDate={record.publishedDate}
              tags={record.tags}
            />
          </li>
        ))}
      </ol>
    </SectionWithRecordCardsLayout>
  );
}

export function SectionWithRecordCardsSkeleton(
  props: Pick<RecentPostsSectionProps, "title">,
) {
  const { title } = props;

  return (
    <SectionWithRecordCardsLayout title={title}>
      <div>기록들을 불러오는 중입니다...</div>
    </SectionWithRecordCardsLayout>
  );
}
