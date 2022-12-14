import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import Link from "next/link";
import { FC, ReactNode } from "react";
import { noto_serif_jp, shippori_mincho, zen_antique } from "../constants";
import { Params } from "../types";
import BookUI from "./BookUI";
import "./global.scss";
import TopNav from "./TopNav";
import Utils from "./Utils";
config.autoAddCss = false;

interface LayoutProps {
  children: ReactNode;
  params: Params;
}

const Layout: FC<LayoutProps> = ({ children }) => {
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
        <main>
          <BookUI>{children}</BookUI>
        </main>
        <footer>
          <small>&copy; 2022 Jason Karjadi. All rights reserved</small>
        </footer>
        <Utils />
      </body>
    </html>
  );
};

export default Layout;
