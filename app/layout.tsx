import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import Link from "next/link";
import { FC, ReactNode } from "react";
import { noto_serif_jp, shippori_mincho } from "../constants";
import BookUI from "./BookUI";
import Breadcrumb from "./Breadcrumb";
import "./reset.scss";
import "./styles.scss";
import "./utility.scss";
import Utils from "./Utils";
config.autoAddCss = false;

interface LayoutProps {
  children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <html
      lang="jp"
      className={`${noto_serif_jp.variable} ${shippori_mincho.variable}`}
    >
      <body>
        <header>
          <Link href="/">ならしな</Link>
          <Breadcrumb />
        </header>
        <main>
          <BookUI>{children}</BookUI>
        </main>
        {/* <footer>
          <small>&copy; 2022 Jason Karjadi. All rights reserved</small>
        </footer> */}
        <Utils />
      </body>
    </html>
  );
};

export default Layout;
