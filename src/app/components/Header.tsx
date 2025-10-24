import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
  return (
    <header className="bg-header-bg border-b-main-200 sticky top-0 z-1 border-b py-2">
      <nav className="mx-auto max-w-[768px] px-4 lg:px-0">
        <ul className="flex flex-row items-center justify-end gap-2 min-[375px]:gap-4">
          <li className="mr-auto">
            <Link href="/" className="font-chiness text-2xl md:text-4xl">
              香格里拉
            </Link>
          </li>
          <li className="ml-0 min-[375px]:ml-8 md:ml-0">
            <ThemeToggle />
          </li>
          <li>
            <Link href="/about" className="text-lg break-keep md:text-2xl">
              저에 대해서
            </Link>
          </li>
          <li>
            <Link href="/records" className="text-lg break-keep md:text-2xl">
              여정의 기록들
            </Link>
          </li>
          <li>
            <Link href="/search" className="text-lg break-keep md:text-2xl">
              찾아보기
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
