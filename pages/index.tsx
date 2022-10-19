import Head from "next/head";
import Link from "next/link";
import { FC } from "react";
import { navbtnvals } from "../constants";

const MyIndex: FC = () => {
  return (
    <>
      <Head>
        <title>執筆書庫「ならしな」</title>
      </Head>
      <div className="maincenter">
        <section className="headingbox">
          <h1 className="frontheading">ならしな</h1>
          <h2 className="frontsubtitle">執筆書庫</h2>
        </section>
        <nav className="frontnav">
          {navbtnvals.map((val, id) => (
            <Link key={id} href={val.link}>
              <button className="navbtn">
                <span className="navbtncontent">
                  <p className="navkanji">{val.kanji}</p>
                  <p className="navruby">{val.ruby}</p>
                </span>
              </button>
            </Link>
          ))}
          <button className="navbtn" />
          <button className="navbtn" />
        </nav>
      </div>
      <style jsx>{`
        .maincenter {
          flex: 1;
          writing-mode: vertical-rl;
          display: flex;
          margin: 0 2rem;
          align-items: center;
        }
        .headingbox {
          text-align: center;
          flex: 1;
        }
        .frontheading {
          font-size: 5rem;
          line-height: 1;
          font-family: Zen Antique, serif;
        }
        .frontsubtitle {
          font-size: 2rem;
          font-family: Noto Serif JP, serif;
        }
        .frontnav {
          display: flex;
          flex-direction: column;
          width: 100%;
          margin-bottom: 3rem;
        }
        .navbtn {
          background: #9c4221;
          border: 1px solid black;
          border-radius: 0.75rem;
          line-height: 1;
          position: relative;
          flex: 1;
          height: 4.5rem;
          padding: 0;
        }
        .navbtn + .navbtn {
          margin-right: 1rem;
        }
        .navbtncontent {
          position: absolute;
          transform: translate(-50%, -50%);
          width: 100%;
        }
        .navkanji {
          font-family: Zen Antique, serif;
          font-size: 2rem;
        }
        .navruby {
          font-family: Noto Serif JP, serif;
          font-size: 0.625rem;
          margin-top: 0.25rem;
        }
        @media only screen and (min-width: 730px) {
          .maincenter {
            flex-direction: column;
            margin: auto;
          }
          .frontnav {
            display: grid;
            grid-template: 12rem 12rem / 8rem 8rem;
            margin-bottom: 0;
            margin-right: 4rem;
            gap: 4rem;
          }
          .navbtn {
            height: auto;
          }
          .navbtn + .navbtn {
            margin-right: 0;
          }
          .navkanji {
            font-size: 2.5rem;
          }
          .navruby {
            font-size: 1rem;
            margin-top: 0.5rem;
          }
        }
      `}</style>
    </>
  );
};

export default MyIndex;
