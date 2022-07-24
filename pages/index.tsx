import type { NextPage } from "next";
import React from "react";
import Navigation from "../components/Navigation";
import { ScreenContainer } from "../components/ScreenContainer";
import { Screen } from "../components/Screen";
import Scene from "../components/screenInMain/Scene";

const Home: NextPage = () => {
  const notSupportVideoTag = "Oops! Your browser doesn't support video. 😢";
  const shangrila = "香格里拉";

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
          {notSupportVideoTag}
        </video>
        <span
          className={
            "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-8xl font-zuan-su w-fit"
          }
        >
          {shangrila}
        </span>
      </div>
      <Navigation />
      <ScreenContainer>
        {/*<Screen className={"bg-red-100 flex flex-col"}>
          <span className={"bg-amber-100 text-right"}>
            {"배너로 돌아가고 싶다면 부드럽게 스크롤해주세요."}
          </span>
        </Screen>*/}
        <Scene />
        <Screen className={"bg-blue-100"} />
        <Screen className={"bg-green-100"} />
        <Screen className={"bg-gray-400"} />
      </ScreenContainer>
    </div>
  );
};

export default Home;
