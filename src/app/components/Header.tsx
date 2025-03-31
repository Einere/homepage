"use client";

import Link from "next/link";

export default function Header() {
  function changeColorScheme() {
    const $html = document.getElementsByTagName("html").item(0);

    if ($html) {
      $html.dataset.theme = $html.dataset.theme === "pink" ? "blue" : "pink";
    }
  }

  return (
    <header className="bg-header-bg border-b-main-200 sticky top-0 border-b py-2">
      <nav className="mx-auto max-w-[768px]">
        <ul className="flex flex-row items-center justify-end gap-4">
          <li className="mr-auto">
            <Link href="/" className="font-[FZuanSu] text-4xl">
              香格里拉
            </Link>
          </li>
          <li>
            <button
              title="색 바꾸기"
              className="bg-main-500 block h-8 w-8 cursor-pointer rounded-full"
              onClick={changeColorScheme}
            />
          </li>
          <li>
            <Link href="/about" className="text-2xl">
              저에 대해서
            </Link>
          </li>
          <li>
            <Link href="/records" className="text-2xl">
              여정의 기록들
            </Link>
          </li>
          <li>
            <Link href="/search" className="text-2xl">
              찾아보기
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
