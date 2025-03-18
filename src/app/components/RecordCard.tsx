import Link from "next/link";

export interface RecordCardProps {
  url: string;
  title: string;
  description: string;
  createdDate: number;
}

export default function RecordCard(props: RecordCardProps) {
  const { url, title, description, createdDate } = props;

  return (
    <article className="p-4 border rounded-lg">
      <Link href={url}>
        <h3>{title}</h3>
        <p>{description}</p>
        <time>{createdDate}</time>
      </Link>
    </article>
  );
}
