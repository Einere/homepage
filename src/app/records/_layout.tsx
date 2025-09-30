import { PropsWithChildren } from "react";

export function RecordsPageLayout(props: PropsWithChildren) {
  return (
    <main className="mx-auto min-h-screen max-w-[768px] px-4 lg:px-0">
      <h1 className="mt-16 mb-6">
        여정의 발자취를 작은 기록들로 남겨봅니다. 🐾
      </h1>
      {props.children}
    </main>
  );
}
