import type { Metadata } from "next";
import { Gowun_Dodum } from "next/font/google";
import localFont from "next/font/local";
import "./styles/globals.css";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./styles/transitions.css";

const gowunDodum = Gowun_Dodum({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-gowun-dodum",
  preload: true,
});

const d2Coding = localFont({
  src: [
    {
      path: "../../public/fonts/D2Coding/D2Coding-subset.woff2",
      weight: "400",
    },
    {
      path: "../../public/fonts/D2Coding/D2Coding-full.woff2",
      weight: "400",
    },
  ],
  variable: "--font-d2coding",
  display: "swap",
});

const fZuanSu = localFont({
  src: "../../public/fonts/FZuanSu/FZuanSu-subset.woff2",
  variable: "--font-fzuansu",
  display: "swap",
});

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
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ko"
      data-theme="pink"
      className={`${gowunDodum.variable} ${d2Coding.variable} ${fZuanSu.variable}`}
    >
      <body className="antialiased">
        <Header />
        {children}
        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
