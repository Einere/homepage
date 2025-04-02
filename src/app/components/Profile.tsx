import Link from "next/link";
import Image from "next/image";

export default function Profile() {
  return (
    <article className="grid grid-rows-none gap-6 pb-16 sm:grid-cols-[auto_1fr] md:pb-0">
      <Image
        src="/moowonjae_from_kimtaejun.png"
        alt="최형준의 프로필 사진"
        width={200}
        height={247}
        className="rounded-lg"
      />
      <div>
        <h2>최형준</h2>
        <blockquote>
          <p>제품을 만드는, 지속가능한 웹 개발자를 지향합니다.</p>
        </blockquote>
        <p className="pb-2">
          단순히 주어진 업무를 수행하는 것에 그치지 않고, 회사가 해결하고자 하는
          문제를 이해하고 비전을 녹여낸 제품을 만드는 것이 중요함을
          깨달았습니다. 이를 위해 오너십을 가지고 동료들과 다양한 의견을 주고
          받는 등, 제품을 만들어 나가는 여정에 적극적으로 동참합니다.
        </p>
        <p className="pb-4">
          개발 산업은 그 어느 분야보다도 빠르게 변화합니다. 이 변화 속에서
          뒤처지지 않기 위해, 새로운 기술과 흐름을 민감하게 받아들이고
          지속적으로 배우려는 태도가 중요하다고 생각합니다. 꾸준히 개발자로서
          성장하기 위해, 관심을 가지고 탐구하며, 배움을 멈추지 않으려고
          노력합니다.
        </p>
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
