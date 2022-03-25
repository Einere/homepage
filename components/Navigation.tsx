import React, { useLayoutEffect, useRef } from "react";
import { NextPage } from "next";
import { ThemeSelector } from "./ThemeSelector";
import { throttle } from "underscore";

const Navigation: NextPage = () => {
  const scrollIndicatorRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const setIndicatorByOffsetY = throttle((e) => {
      const totalHeight = global.innerHeight;
      const currentHeight = global.scrollY;
      const percentage = Math.floor((currentHeight / totalHeight) * 100);

      scrollIndicatorRef.current.style.width = `${percentage}%`;
    }, 200);

    global.addEventListener("scroll", setIndicatorByOffsetY);

    return () => {
      global.removeEventListener("scroll", setIndicatorByOffsetY);
    };
  }, []);

  return (
    <header
      className={
        "sticky top-0 w-full h-nav-height text-primary hover:bg-primary-hover"
      }
    >
      헤더입니다
      <ThemeSelector />
      <div className={"absolute bottom-0 h-1 w-full bg-transparent"}>
        <div
          ref={scrollIndicatorRef}
          className={
            "scroll-indicator w-0 max-w-full h-full bg-primary transition-scroll-indicator duration-300"
          }
        />
      </div>
    </header>
  );
};

export default Navigation;
