import type { Metadata } from "next";
import "react-notion-x/src/styles.css";
import "./styles/globals.css";
import "./styles/prism-dracula.css";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.einere.me"),
  title: {
    template: "%s | 香格里拉",
    default: "香格里拉",
  },
  description: "이상향을 좇는 여행자의 작은 공간에 오신 것을 환영합니다.",
  authors: [{ name: "HyungJun Choi" }],
  creator: "HyungJun Choi",
  publisher: "HyungJun Choi",
  keywords: ["Frontend", "Developer", "Blog"],
  openGraph: {
    type: "website",
    title: "香格里拉",
    description: "이상향을 좇는 여행자의 작은 공간에 오신 것을 환영합니다.",
    url: "https://www.einere.me",
    siteName: "香格里拉",
    locale: "ko_KR",
    images: [
      {
        url: "https://www.einere.me/opengraph-image.png",
        width: 1024,
        height: 1024,
        alt: "香格里拉",
      },
    ],
    videos: [],
    audio: [],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" data-theme="pink">
      <body className="antialiased">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
