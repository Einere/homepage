import { Client } from "@notionhq/client";
import { PageObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import Link from "next/link";

function getRecordsFromNotion() {
  const notion = new Client({
    auth: process.env.NEXT_NOTION_API_AUTH_TOKEN,
  });

  return notion.databases.query({
    database_id: process.env.NEXT_NOTION_API_DATABASE_ID,
  });
}

export async function Records() {
  const body = await getRecordsFromNotion();
  const { results } = body;

  if (results.length === 0) {
    return <p>보여드릴 기록이 없어요. 🫥</p>;
  }

  return (
    <ul>
      {(results as Array<PageObjectResponse>).map((page) => {
        const property = page.properties["이름"];
        const title =
          property.type === "title" ? property.title[0].plain_text : undefined;

        return (
          <li key={page.id}>
            <Link href={`/records/${page.id}`}>{title}</Link>
          </li>
        );
      })}
    </ul>
  );
}
