import Link from "next/link";
import Image from "next/image";

export default function Profile() {
  return (
    <article className="grid grid-rows-none gap-6 pb-16 sm:grid-cols-[auto_1fr] md:pb-0">
      <Image
        src="/profile_picture.webp"
        alt="최형준의 프로필 사진"
        width={256}
        height={384}
        className="rounded-lg"
      />
      <div>
        <h2>최형준</h2>
        <blockquote>
          <p>제품을 만드는, 지속가능한 웹 개발자를 지향합니다.</p>
        </blockquote>
        <p className="pb-2">
          비전을 녹여낸 제품을 동료들과 함께 만들어 나가는 여정에 적극적으로
          동참합니다.
        </p>
        <p className="pb-2">
          생각과 경험을 글로서 정리하고 기록하고 공유하는 것을 좋아합니다.
        </p>
        <p className="pb-4">다양한 경험을 해보는 것을 좋아합니다.</p>
        <h3 className="pb-4">저에 대해 더 자세히 알고 싶으신가요?</h3>
        <ul className="flex flex-col gap-2">
          <li>
            <Link href="mailto:kjwsx23@einere.me" target="_blank">
              📧 E-mail
            </Link>
          </li>
          <li>
            <Link href="https://github.com/Einere" target="_blank">
              🐙 GitHub
            </Link>
          </li>
          <li>
            <Link href="https://velog.io/@kjwsx23" target="_blank">
              ☕️ Velog
            </Link>
          </li>
          <li>
            <Link
              href="https://www.linkedin.com/in/hyungjun-choi-760737258"
              target="_blank"
            >
              🔗 Linked In
            </Link>
          </li>
        </ul>
      </div>
    </article>
  );
}
