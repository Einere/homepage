import Link from "next/link";

export default function Header() {
  return (
    <header>
      <nav>
        <ul className="flex flex-row gap-4 justify-end">
          <li className="mr-auto">
            <Link href="/" className="font-[FZuanSu] text-4xl">
              香格里拉
            </Link>
          </li>
          <li>
            <Link href="/about" className="text-2xl">
              저에 대해서
            </Link>
          </li>
          <li>
            <Link href="/blog" className="text-2xl">
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
