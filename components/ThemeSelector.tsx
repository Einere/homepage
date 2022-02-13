import React from "react";
import { ColorSelector } from "./ColorSelector";

const themeList = ["light-eweca", "burly-wood"];

export const ThemeSelector: React.FC = (porps) => {
  const renderColorSelectors = themeList.map((theme) => (
    <ColorSelector key={theme} theme={theme} />
  ));

  return <div className={"space-x-1"}>{renderColorSelectors}</div>;
};
