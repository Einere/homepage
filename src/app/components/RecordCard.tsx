import Link from "next/link";
import dayjs from "dayjs";
import "dayjs/locale/ko";

type SelectColor =
  | "default"
  | "gray"
  | "brown"
  | "orange"
  | "yellow"
  | "green"
  | "blue"
  | "purple"
  | "pink"
  | "red";
type PartialSelectResponse = {
  id: string;
  name: string;
  color: SelectColor;
};

export interface RecordCardProps {
  id: string;
  title: string;
  description: string;
  createdDate: string;
  tags: Array<PartialSelectResponse>;
}

export default function RecordCard(props: RecordCardProps) {
  const { id, title, description, createdDate, tags } = props;

  const _createDate = dayjs(createdDate).locale("ko");

  return (
    <article className="/*bg-main-100*/ rounded-lg py-4">
      <Link href={`/records/${id}`} className="">
        <h3 className="text-2xl font-bold">{title}</h3>
        <p className="mt-4 mb-2">{description}</p>
        <time dateTime={_createDate.toISOString()}>
          {_createDate
            .toDate()
            .toLocaleString("ko-KR", { hour12: false, dateStyle: "long" })}
        </time>
      </Link>
      <ul className="mt-4 flex gap-2">
        {tags.map((tag) => (
          <li key={tag.id}>
            <ol className="bg-main-200 rounded-lg px-2 py-1 text-sm transition-colors">
              {`#${tag.name}`}
            </ol>
          </li>
        ))}
      </ul>
    </article>
  );
}
