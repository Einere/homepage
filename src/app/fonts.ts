import { Gowun_Dodum } from "next/font/google";
import localFont from "next/font/local";

export const gowunDodum = Gowun_Dodum({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-gowun-dodum",
  fallback: ["system-ui", "arial"],
});

export const fZuanSu = localFont({
  src: "../../public/fonts/FZuanSu/FZuanSu-subset.woff2",
  variable: "--font-fzuansu",
  display: "swap",
});
