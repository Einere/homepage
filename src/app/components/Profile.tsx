import Link from "next/link";
import Image from "next/image";

export default function Profile() {
  return (
    <>
      <section className="mb-6 grid grid-rows-none gap-6 sm:grid-cols-[auto_1fr]">
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
            <p>웹 기술로 문제를 해결하는, 지속가능한 엔지니어를 지향합니다.</p>
          </blockquote>
          <p className="pb-2">다양한 경험을 해보는 것을 좋아합니다.</p>
          <p className="pb-4">
            생각과 경험을 글로서 정리하고 기록하고 공유하는 것을 좋아합니다.
          </p>

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
      </section>
      <section className="mb-16">
        <h3>멘토링</h3>
        <ul className="mb-6">
          <li>
            Boostcamp 웹 & 모바일 7기 수강생들에 대한 코드 리뷰어 활동&nbsp;
            <i>(22.09. ~ 22.10.)</i>
          </li>
        </ul>
        <h3>오픈 소스 활동</h3>
        <ul>
          <li>
            <Link
              href="https://www.einere.me/records/210f6d89-7315-8094-899c-f835525db576"
              target="_blank"
            >
              개인 유틸리티 코드 뭉치를 NPM에 배포하여 오픈소스로 공개
            </Link>
          </li>
          <li>
            <Link
              href="https://github.com/hyochan/dooboo-ui/pulls?q=is:pr+author:Einere+is:closed"
              target="_blank"
            >
              2021 오픈소스 컨트리뷰션 아카데미
            </Link>
          </li>
        </ul>
      </section>
    </>
  );
}
