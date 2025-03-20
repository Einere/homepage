import Link from "next/link";
import dayjs from "dayjs";
import "dayjs/locale/ko";

export interface RecordCardProps {
  url: string;
  title: string;
  description: string;
  createdDate: number;
}

export default function RecordCard(props: RecordCardProps) {
  const { url, title, description, createdDate } = props;

  const _createDate = dayjs(createdDate).locale("ko");

  console.debug(_createDate.locale(), _createDate.format("LL"));
  return (
    <article className="bg-main-100 rounded-lg p-4">
      <Link href={url}>
        <h3 className="text-2xl font-bold">{title}</h3>
        <p className="mt-4 mb-2">{description}</p>
        <time dateTime={_createDate.toISOString()}>
          {_createDate
            .toDate()
            .toLocaleString("ko-KR", { hour12: false, dateStyle: "long" })}
        </time>
      </Link>
      <ul className="mt-4 flex gap-2">
        {["#태그 1", "#태그 2", "#태그 3", "#태그 4"].map((tag) => (
          <li key={tag}>
            {/* TODO: Link 로 대체하기 */}
            <button className="bg-main-200 hover:bg-main-300 cursor-pointer rounded-lg px-2 py-1 transition-colors">
              {tag}
            </button>
          </li>
        ))}
      </ul>
    </article>
  );
}
