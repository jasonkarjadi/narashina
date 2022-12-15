import { Noto_Serif_JP, Shippori_Mincho } from "@next/font/google";

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
