import { faCaretLeft, faCaretRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import { ChangeEvent, FC, useEffect, useState } from "react";
import MyPage from "../../components/Page";
import { colorschemes, fontfamilies } from "../../constants";
import books from "../../data/books";
import { Book } from "../../types";

interface MyBookProps {
  book: Book;
}

const MyBook: FC<MyBookProps> = ({ book }) => {
  const [pageIds, setPageIds] = useState([1, 0]);
  const [fontFamily, setFontFamily] = useState("Noto Serif JP, serif");
  const [pageHeight, setPageHeight] = useState(0);
  const [pageWidth, setPageWidth] = useState(0);
  const [pageRatio, _setPageRatio] = useState(book.ratio || 1.4142);
  const [pageColors, setPageColors] = useState(["#000000", "#e0e2dc"]);

  useEffect(() => {
    const setResize = () => {
      const xHeight = document
        .getElementsByClassName("pagespace")[0]
        .getBoundingClientRect().height;
      setPageHeight(xHeight);
      setPageWidth(pageHeight / pageRatio);
    };
    setResize();
    addEventListener("resize", setResize);
    return () => {
      removeEventListener("resize", setResize);
    };
  }, [pageHeight, pageRatio]);

  const changeFontFamily = (e: ChangeEvent<HTMLSelectElement>) => {
    setFontFamily(e.target.value);
  };

  const changeColor = (e: ChangeEvent<HTMLSelectElement>) => {
    setPageColors(e.target.value.split(","));
  };

  const changePage = (e: ChangeEvent<HTMLInputElement>) => {
    const valx = 2 * parseInt(e.target.value);
    setPageIds([valx + 1, valx]);
  };

  return (
    <>
      <Head>
        <title>{book.title.original}</title>
      </Head>
      <div className="readerbox">
        <div className="adjustbar">
          <label className="adjustlabel" htmlFor="fontFamily">
            書体
          </label>
          <select
            className="adjustitem"
            id="fontFamily"
            onChange={changeFontFamily}
          >
            {fontfamilies.map((ff, id) => (
              <option key={id} value={ff}>
                {ff}
              </option>
            ))}
          </select>
          <label className="adjustlabel" htmlFor="colorScheme">
            配色
          </label>
          <select
            className="adjustitem"
            id="colorScheme"
            onChange={changeColor}
          >
            {colorschemes.map((clr, id) => (
              <option key={id} value={`${clr.values[0]},${clr.values[1]}`}>
                {clr.text}
              </option>
            ))}
          </select>
        </div>
        <div className="pagespace">
          <div className="pageholder">
            {pageIds.map((pid, id) => (
              <MyPage
                key={id}
                pages={book.pages}
                pageId={pid}
                pageHeight={pageHeight}
                pageWidth={pageWidth}
                fontFamily={fontFamily}
                colors={pageColors}
              />
            ))}
          </div>
        </div>
        <div className="pagenav">
          <button
            className="pagenavbtn"
            onClick={() => setPageIds(pageIds.map((pid) => pid + 2))}
            disabled={pageIds[0] >= book.pages.length ? true : false}
            aria-label="Flip To Next Page"
          >
            <FontAwesomeIcon icon={faCaretLeft} />
          </button>
          <div className="pageslidercontainer">
            <datalist className="pageslidermarks" id="bookmarks">
              {book.marks.map((val, id) => (
                <option key={id} value={val} className="pageslidermark" />
              ))}
            </datalist>
            <input
              type="range"
              max={Math.floor(book.pages.length / 2)}
              value={pageIds[1] / 2}
              className="pageslider"
              list="bookmarks"
              onChange={changePage}
            />
          </div>
          <button
            className="pagenavbtn"
            onClick={() => setPageIds(pageIds.map((pid) => pid - 2))}
            disabled={pageIds[1] <= 0 ? true : false}
            aria-label="Flip To Previous Page"
          >
            <FontAwesomeIcon icon={faCaretRight} />
          </button>
        </div>
      </div>
      <style jsx>{`
        .readerbox {
          flex: 1;
          display: flex;
          flex-direction: column;
        }
        .adjustbar,
        .pagenav {
          display: flex;
          height: 2.5rem;
          align-items: center;
        }
        .adjustbar {
          border-bottom: solid black 1px;
          justify-content: center;
        }
        .adjustlabel {
          margin-right: 0.5rem;
          font-family: Noto Serif JP;
        }
        .adjustitem + .adjustlabel {
          margin-left: 2rem;
        }
        .pagespace {
          flex: 1;
          background: #171923;
          overflow-x: auto;
          padding: 0 0.75rem;
        }
        .pageholder {
          min-width: ${pageWidth * 2}px;
          display: flex;
          justify-content: center;
        }
        .pagenav {
          border-top: solid black 1px;
        }
        .pagenavbtn {
          height: 100%;
          width: 2.5rem;
          background: transparent;
          font-size: 1rem;
          border: none;
        }
        .pagenavbtn:first-child {
          border-right: solid black 1px;
        }
        .pagenavbtn:last-child {
          border-left: solid black 1px;
        }
        .pageslidercontainer {
          flex: 1;
          margin: 0 1rem;
        }
        .pageslidermark {
          appearance: none;
        }
        .pageslider {
          width: 100%;
          transform: rotate(180deg);
          cursor: pointer;
        }
      `}</style>
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: books.map((book) => ({ params: { id: `${book.id}` } })),
    fallback: false,
  };
}; // later feature idea: add query for page number

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const book = books.filter((book) => book.id.toString() == params!.id)[0];

  return {
    props: { book },
  };
};

export default MyBook;
