const dev = process.env.NODE_ENV !== "production";

export const server = dev ? "http://localhost:3000" : "https://alvacorre.com";

export const navbtnvals = [
  {
    link: "/books",
    ruby: "ふみぐら",
    kanji: "文",
  },
  {
    link: "/about",
    ruby: "あらまし",
    kanji: "荒",
  },
];

export const fontfamilies = ["Noto Serif JP", "Shippori Mincho"];

export const colorschemes = [
  {
    text: "黒字白紙",
    values: ["#000000", "#e0e2dc"],
  },
  {
    text: "白字黒紙",
    values: ["#cbd5e0", "#0e0e10"],
  },
];
