import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="ko">
        <Head>
          <link
            rel="preload"
            href="https://firebasestorage.googleapis.com/v0/b/homepage-229db.appspot.com/o/static%2FFZuanSu.ttf?alt=media&token=d4a5f655-5cf3-4e1d-9a3b-2b1c07d5ce1e"
            as="font"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
