import Link from "next/link";
import Image from "next/image";

export default function Profile() {
  return (
    <article className="grid grid-cols-[auto_1fr] gap-4">
      <Image
        src="/moowonjae_from_kimtaejun.png"
        alt="최형준의 프로필 사진"
        width={200}
        height={247}
      />
      <div>
        <h2>최형준</h2>
        <p className="pt-4">&#34;Einere&#34;라는 닉네임을 주로 사용합니다.</p>
        <blockquote>
          <p>제품을 만드는, 지속가능한 웹 개발자를 지향합니다.</p>
        </blockquote>
        <ul className="flex flex-col gap-2">
          <li>
            <Link href="mailto:kjwsx23@einere.me" target="_blank">
              📧E-mail
            </Link>
          </li>
          <li>
            <Link href="https://github.com/Einere" target="_blank">
              🐙GitHub
            </Link>
          </li>
          <li>
            <Link href="https://velog.io/@kjwsx23" target="_blank">
              ☕️Velog
            </Link>
          </li>
        </ul>
      </div>
    </article>
  );
}
