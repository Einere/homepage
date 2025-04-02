import { getRecordsDBFromNotion } from "@/app/lib/recordAPI";
import Link from "next/link";

export async function Tags() {
  const db = await getRecordsDBFromNotion();
  const tagProperty = db.properties["태그"];
  const tagOptions =
    tagProperty.type === "multi_select" ? tagProperty.multi_select.options : [];

  return (
    <ul className="flex gap-4 pb-4">
      <Link href="/records">#All</Link>
      {tagOptions.map((tagOption) => {
        return (
          <Link
            key={tagOption.id}
            href={`/records?tag=${tagOption.name}`}
          >{`#${tagOption.name}`}</Link>
        );
      })}
    </ul>
  );
}
