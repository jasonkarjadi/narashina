import { Noto_Serif_JP, Zen_Antique, Shippori_Mincho } from "@next/font/google";

export const navbtnvals = [
  {
    link: "/about",
    ruby: "あらまし",
    kanji: "荒",
  },
  {
    link: "/books",
    ruby: "ふみぐら",
    kanji: "文",
  },
];

export const zen_antique = Zen_Antique({
  weight: ["400"],
  display: "swap",
  subsets: ["japanese"],
  variable: "--font-zen-antique",
});
export const noto_serif_jp = Noto_Serif_JP({
  weight: ["200", "300", "400", "500", "600", "700", "900"],
  display: "swap",
  subsets: ["japanese"],
  variable: "--font-noto-serif-jp",
});
export const shippori_mincho = Shippori_Mincho({
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
  subsets: ["japanese"],
  variable: "--font-shippori-mincho",
});
