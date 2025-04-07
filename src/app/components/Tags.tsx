import { getRecordsDBFromNotion } from "@/app/lib/recordAPI";
import { NavLink } from "@/app/components/NavLink";
import { NOTION_BLOG_RECORDS_PROPERTIES } from "@/app/utils/notionUtils";

export async function Tags() {
  const db = await getRecordsDBFromNotion();
  const tagProperty = db.properties[NOTION_BLOG_RECORDS_PROPERTIES.TAGS];
  const tagOptions =
    tagProperty.type === "multi_select" ? tagProperty.multi_select.options : [];

  return (
    <ul className="flex gap-4 pb-4">
      <NavLink href="/records">#All</NavLink>
      {tagOptions.map((tagOption) => {
        return (
          <NavLink
            key={tagOption.id}
            href={`/records?tag=${tagOption.name}`}
          >{`#${tagOption.name}`}</NavLink>
        );
      })}
    </ul>
  );
}
