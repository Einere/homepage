import React from "react";

type ScreenProps = {
  children?: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>;

export function Screen(props: ScreenProps) {
  const { children, className } = props;

  const defaultClassName = "w-screen h-screen snap-center snap-always";
  const extendedClassName = defaultClassName.concat(" ", className);

  return <article className={extendedClassName}>{children}</article>;
}
