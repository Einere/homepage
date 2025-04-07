import { PropsWithChildren } from "react";

export function RecordsPageLayout(props: PropsWithChildren) {
  return (
    <main className="mx-auto min-h-screen max-w-[768px] px-4 lg:px-0">
      {props.children}
    </main>
  );
}
