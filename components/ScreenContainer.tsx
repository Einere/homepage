import React from "react";

type ScreenContainerProps = {
  children?: React.ReactNode;
};

export function ScreenContainer(props: ScreenContainerProps) {
  const { children } = props;

  return (
    <main
      id={"screen-container"}
      className={"w-screen h-screen overflow-scroll snap-y snap-mandatory "}
    >
      {children}
    </main>
  );
}
