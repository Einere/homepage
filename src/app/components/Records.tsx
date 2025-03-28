import Link from "next/link";
import { getRecordsFromNotion } from "../lib/recordAPI";
import {
  getIdFromPageObjectResponse,
  getTitleFromQueryPageObjectResponse,
  isPageObjectResponse,
} from "@/app/utils/notionUtils";

export async function Records() {
  const body = await getRecordsFromNotion();
  const { results } = body;

  if (results.length === 0) {
    return <p>보여드릴 기록이 없어요. 🫥</p>;
  }

  return (
    <ul>
      {results.filter(isPageObjectResponse).map((record) => {
        const title = getTitleFromQueryPageObjectResponse(record);
        const id = getIdFromPageObjectResponse(record);

        return (
          <li key={id}>
            <Link href={`/records/${id}`}>{title}</Link>
          </li>
        );
      })}
    </ul>
  );
}
