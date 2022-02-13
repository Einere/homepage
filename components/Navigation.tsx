import React from "react";
import styles from "../styles/Navigation.module.css";
import { NextPage } from "next";
import { ThemeSelector } from "./ThemeSelector";

const Navigation: NextPage = () => {
  return (
    <header
      className={
        "sticky top-0 w-full h-nav-height text-primary hover:bg-primary-hover"
      }
    >
      헤더입니다
      <ThemeSelector />
    </header>
  );
};

export default Navigation;
