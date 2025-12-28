import { Gowun_Dodum } from "next/font/google";
import localFont from "next/font/local";

export const gowunDodum = Gowun_Dodum({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-gowun-dodum",
  fallback: ["system-ui", "arial"],
});

export const d2Coding = localFont({
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

export const fZuanSu = localFont({
  src: "../../public/fonts/FZuanSu/FZuanSu-subset.woff2",
  variable: "--font-fzuansu",
  display: "swap",
});
