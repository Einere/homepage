import type { NextPage } from "next";
import React from "react";
import Navigation from "../components/Navigation";

const Home: NextPage = () => {
  return (
    <div>
      <div
        className={
          "relative w-screen h-banner-height grayscale-70 overflow-hidden"
        }
      >
        <video
          width={"100%"}
          loop
          muted
          autoPlay
          playsInline // for mobile
          className={"min-w-full min-h-full h-auto object-cover object-center"}
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
        <span
          className={
            "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-8xl font-zuan-su w-fit"
          }
        >
          香格里拉
        </span>
      </div>
      <Navigation />
      <div className={"h-screen bg-slate-300"} />
    </div>
  );
};

export default Home;
