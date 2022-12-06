import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import Link from "next/link";
import { FC, ReactNode } from "react";
import { noto_serif_jp, shippori_mincho, zen_antique } from "../constants";
import "./global.scss";
import TopNav from "./TopNav";
import Utils from "./Utils";
config.autoAddCss = false;

interface LayoutIndexProps {
  children?: ReactNode;
}

const LayoutIndex: FC<LayoutIndexProps> = ({ children }) => {
  return (
    <html
      lang="jp"
      className={`${noto_serif_jp.variable} ${shippori_mincho.variable} ${zen_antique.variable}`}
    >
      <body>
        <header>
          <Link href="/">ならしな</Link>
          <TopNav />
        </header>
        {children}
        <footer>
          <small>&copy; 2022 Jason Karjadi. All rights reserved</small>
        </footer>
        <Utils />
      </body>
    </html>
  );
};

export default LayoutIndex;
