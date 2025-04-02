"use client";

import { ComponentProps } from "react";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { clsx } from "clsx";

export function NavLink(props: ComponentProps<typeof Link>) {
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
