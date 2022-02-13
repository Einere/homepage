import React from "react";

function getCssBaseColor() {
  return "--base-color";
}

function getCssBaseLightness() {
  return "--base-saturation";
}

function getCssColor(color) {
  return `var(--${color})`;
}

function getCssLightness(color) {
  return `var(--set-${color})`;
}

export const ColorSelector: React.FC<{ theme: string }> = (props) => {
  const { theme } = props;

  function changeTheme() {
    const rootStyle = document.documentElement.style;
    rootStyle.setProperty(getCssBaseColor(), getCssColor(theme));
    rootStyle.setProperty(getCssBaseLightness(), getCssLightness(theme));
  }

  return (
    <button
      className={
        "inline-block w-24px h-24px bg-transparent rounded-full border border-solid p-4px cursor-pointer"
      }
      style={{
        borderColor: `hsl(${getCssColor(theme)}, ${getCssLightness(theme)});`,
      }}
      onClick={changeTheme}
    >
      <div
        className={"w-full h-full rounded-full"}
        style={{
          backgroundColor: `hsl(${getCssColor(theme)}, ${getCssLightness(
            theme
          )});`,
        }}
      />
    </button>
  );
};
