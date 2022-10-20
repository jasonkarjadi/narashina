import { faBars, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useRouter } from "next/router";
import { FC, ReactNode, useEffect, useState } from "react";
import { navbtnvals } from "../constants";

interface MyLayoutProps {
  children?: ReactNode;
}

const MyLayout: FC<MyLayoutProps> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { pathname } = useRouter();

  useEffect(() => {
    setIsOpen(false);
    return () => {};
  }, [pathname]);

  useEffect(() => {
    const setResize = () => {
      document.documentElement.style.setProperty(
        "--doc-height",
        `${innerHeight}px`
      );
    };
    setResize();
    addEventListener("resize", setResize);
    return () => {
      removeEventListener("resize", setResize);
    };
  }, []);

  return (
    <div className="thediv">
      <header className="topheader">
        <Link href="/">
          <a className="homelink">ならしな</a>
        </Link>
        <div className="headernavcontainer">
          <button
            className="hamburgerbtn"
            onClick={() => setIsOpen((isOpen) => !isOpen)}
          >
            <FontAwesomeIcon icon={isOpen ? faChevronDown : faBars} />
          </button>
          <div className="headernav">
            {navbtnvals.map((val, id) => (
              <Link key={id} href={val.link}>
                <button className="headernavlink">
                  <p className="navkanji">{val.kanji}</p>
                  <p className="navruby">{val.ruby}</p>
                </button>
              </Link>
            ))}
            <button className="headernavlink" />
            <button className="headernavlink" />
          </div>
        </div>
      </header>
      <div className="childrenbox">{children}</div>
      <footer className="bottomfooter">
        <small>&copy; 2022 Jason Karjadi. All rights reserved</small>
      </footer>

      <style jsx>{`
        :root {
          --doc-height: 100%;
        }
        .thediv {
          min-height: 100vh;
          min-height: var(--doc-height);
          display: flex;
          flex-direction: column;
        }
        .topheader,
        .bottomfooter {
          height: 2.5rem;
          background: #9c4221;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .topheader {
          border-bottom: 1px solid black;
        }
        .bottomfooter {
          border-top: 1px solid black;
          padding: 0 0.75rem;
        }
        .homelink {
          height: 100%;
          padding: 0 0.75rem;
          display: flex;
          align-items: center;
          font-family: Zen Antique;
        }
        .headernavcontainer {
          height: 100%;
          display: flex;
          flex-direction: row-reverse;
        }
        .hamburgerbtn {
          background: transparent;
          height: 100%;
          border: none;
          padding: 0 0.75rem;
        }
        .headernav {
          position: absolute;
          right: 0;
          top: 2.5rem;
          border-bottom: solid black 1px;
          z-index: 2;
          display: ${isOpen ? "flex" : "none"};
          flex-direction: row-reverse;
          width: 100%;
          background: #9c4221;
        }
        .headernavlink {
          background: #9c4221;
          border: none;
          font-family: Noto Serif JP, serif;
          height: 2.5rem;
          display: flex;
          align-items: center;
          border-left: solid black 1px;
          flex: 1;
          justify-content: center;
          padding: 0;
        }
        .headernavlink:last-child {
          border-left: none;
        }
        .navkanji {
          font-family: Zen Antique, serif;
          color: #000000;
          font-size: 1.5rem;
          margin-right: 0.125rem;
          height: 100%;
        }
        .navruby {
          font-size: 0.625rem;
        }
        .childrenbox {
          flex: auto;
          display: flex;
          flex-direction: column;
          justify-content: center;
          background: #fbd38d;
          height: 100%;
        }
        @media only screen and (min-width: 730px) {
          .hamburgerbtn {
            display: none;
          }
          .headernav {
            display: flex;
            position: static;
            border-bottom: none;
            width: 20rem;
            justify-content: space-evenly;
          }
          .headernavlink {
            height: auto;
            border-left: none;
            width: 4.5rem;
            flex: initial;
          }
        }
      `}</style>
      <style jsx global>{`
        html,
        body,
        div,
        span,
        applet,
        object,
        iframe,
        h1,
        h2,
        h3,
        h4,
        h5,
        h6,
        p,
        blockquote,
        pre,
        a,
        abbr,
        acronym,
        address,
        big,
        cite,
        code,
        del,
        dfn,
        em,
        img,
        ins,
        kbd,
        q,
        s,
        samp,
        small,
        strike,
        strong,
        sub,
        sup,
        tt,
        var,
        b,
        u,
        i,
        center,
        dl,
        dt,
        dd,
        ol,
        ul,
        li,
        fieldset,
        form,
        label,
        legend,
        table,
        caption,
        tbody,
        tfoot,
        thead,
        tr,
        th,
        td,
        article,
        aside,
        canvas,
        details,
        embed,
        figure,
        figcaption,
        footer,
        header,
        hgroup,
        menu,
        nav,
        output,
        ruby,
        section,
        summary,
        time,
        mark,
        audio,
        video {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        html,
        body {
          background: #fbd38d;
        }
        ol,
        ul {
          list-style: none;
        }
        table {
          border-collapse: collapse;
          border-spacing: 0;
        }
        button,
        a {
          cursor: pointer;
          color: #000000;
          text-decoration: none;
        }
      `}</style>
    </div>
  );
};

export default MyLayout;
