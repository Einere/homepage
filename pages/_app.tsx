import "../styles/globals.css";
import "../styles/colorSystem.css";
import React from "react";
import Head from "next/head";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>香格里拉</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
