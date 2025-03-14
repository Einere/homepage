import Link from "next/link";
import Image from "next/image";

export default function Profile() {
  return (
    <article>
      <Image
        src="/moowonjae_from_kimtaejun.png"
        alt="최형준의 프로필 사진"
        width={100}
        height={100}
      />
      <h2>최형준</h2>
      <p>
        &#34;Einere&#34;라는 닉네임을 주로 사용합니다.
        <br />
        이상향을 좇는 여행자입니다.
        <br />
      </p>
      <blockquote>제품을 만드는, 지속가능한 웹 개발자를 지향합니다.</blockquote>
      <ul>
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
    </article>
  );
}
