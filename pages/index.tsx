import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import React from "react";

const Home: NextPage = () => {
  return (
    <div>
      <div className={styles.banner}>
        <video
          width={"100%"}
          loop
          muted
          autoPlay
          playsInline // for mobile
          className={styles.bannerVideo}
        >
          <source src="/videos/sea.mp4" type={"video/mp4"} />
          <source src="/videos/sea.webm" type={"video/webm"} />
          Oops! Your browser doesn't support video. 😢
        </video>
        <span className={styles.bannerTitle}>香格里拉</span>
      </div>
      <header>헤더입니다</header>
    </div>
  );
};

export default Home;
