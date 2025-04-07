import { PropsWithChildren } from "react";

export function RecordPageLayout(props: PropsWithChildren) {
  return (
    <div className="mx-auto min-h-screen max-w-[768px] px-4 lg:px-0">
      <div className="mt-16 mb-6">{props.children}</div>
    </div>
  );
}
