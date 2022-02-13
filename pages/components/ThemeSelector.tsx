import React from "react";
import { ColorSelector } from "./ColorSelector";

const themeList = ["light-eweca", "ivory"];

export const ThemeSelector: React.FC = (porps) => {
  const renderColorSelectors = themeList.map((theme) => (
    <ColorSelector key={theme} theme={theme} />
  ));

  return <div>{renderColorSelectors}</div>;
};
