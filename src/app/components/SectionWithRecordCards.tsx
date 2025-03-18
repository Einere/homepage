import RecordCard, { type RecordCardProps } from "@/app/components/RecordCard";

interface RecentPostsSectionProps {
  title: string;
  records: Array<RecordCardProps>;
}

export default function SectionWithRecordCards(props: RecentPostsSectionProps) {
  const { title, records } = props;

  return (
    <section>
      <h2 className="text-3xl">{title}</h2>
      <ol>
        {records.map((record) => (
          <li key={record.url}>
            <RecordCard
              url={record.url}
              title={record.title}
              description={record.description}
              createdDate={record.createdDate}
            />
          </li>
        ))}
      </ol>
    </section>
  );
}
