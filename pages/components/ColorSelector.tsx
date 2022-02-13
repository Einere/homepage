import React from "react";
import styles from "../../styles/ColorSelector.module.css";

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
      className={styles.outer}
      style={{
        borderColor: `hsl(${getCssColor(theme)}, ${getCssLightness(theme)});`,
      }}
      onClick={changeTheme}
    >
      <div
        className={styles.palette}
        style={{
          backgroundColor: `hsl(${getCssColor(theme)}, ${getCssLightness(
            theme
          )});`,
        }}
      />
    </button>
  );
};
