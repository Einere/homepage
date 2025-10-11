import { Records } from "@/app/components/Records";
import { Tags } from "@/app/components/Tags";

type RecordsPageProps = {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export default async function RecordsPage(params: RecordsPageProps) {
  const searchParams = await params.searchParams;

  return (
    <>
      <Tags />
      <Records searchParams={searchParams} />
    </>
  );
}
