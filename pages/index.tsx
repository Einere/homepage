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
          <source
            src="https://firebasestorage.googleapis.com/v0/b/homepage-229db.appspot.com/o/static%2Fsea.mp4?alt=media&token=3ec9816f-0665-4c58-86eb-11d233678c56"
            type={"video/mp4"}
          />
          <source
            src="https://firebasestorage.googleapis.com/v0/b/homepage-229db.appspot.com/o/static%2Fsea.webm?alt=media&token=04a89de7-d913-4bf8-82ac-6fbef57ce2bc"
            type={"video/webm"}
          />
          Oops! Your browser doesn't support video. 😢
        </video>
        <span className={styles.bannerTitle}>香格里拉</span>
      </div>
      <header>헤더입니다</header>
    </div>
  );
};

export default Home;
