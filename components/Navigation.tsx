import React from "react";
import styles from "../styles/Navigation.module.css";
import { NextPage } from "next";
import { ThemeSelector } from "./ThemeSelector";

const Navigation: NextPage = () => {
  return (
    <header className={styles.navigation}>
      헤더입니다
      <ThemeSelector />
    </header>
  );
};

export default Navigation;
