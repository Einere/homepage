"use client";

import { ComponentProps, memo } from "react";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { clsx } from "clsx";

function NavLinkComponent(props: ComponentProps<typeof Link>) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const tagParam = searchParams.get("tag");

  const isActive = tagParam
    ? props.href === `${pathname}?tag=${tagParam}`
    : pathname === props.href;

  return (
    <Link
      {...props}
      className={clsx(props.className, {
        "font-bold": isActive,
      })}
    />
  );
}

// React.memo로 컴포넌트 메모이징 - Tags에서 리스트 렌더링 시 불필요한 리렌더링 방지
export const NavLink = memo(NavLinkComponent);
