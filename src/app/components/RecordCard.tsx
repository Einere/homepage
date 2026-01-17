import { memo } from "react";
import Link from "next/link";
import "dayjs/locale/ko";

export type SelectColor =
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
export type PartialSelectResponse = {
  id: string;
  name: string;
  color: SelectColor;
};

export interface RecordCardProps {
  id: string;
  title: string;
  description: string;
  publishedDate: string;
  tags: Array<PartialSelectResponse>;
}

// Best Practice: rerender-memo - 불필요한 리렌더링 방지
export default memo(function RecordCard(props: RecordCardProps) {
  const { id, title, description } = props;

  return (
    <article className="rounded-lg py-4">
      <Link href={`/records/${id}`} className="">
        <h3 className="text-main-800">{title}</h3>
        <p className="mb-2">{description}</p>
      </Link>
    </article>
  );
});
