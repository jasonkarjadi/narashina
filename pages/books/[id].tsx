import { faCaretLeft, faCaretRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import { ChangeEvent, FC, useEffect, useState } from "react";
import MyPage from "../../components/Page";
import { fontfamilies } from "../../constants";
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

  useEffect(() => {
    const setResize = () => {
      setPageHeight(
        document
          .getElementsByClassName("pagedisplay")[0]
          .getBoundingClientRect().height
      );
      setPageWidth(pageHeight / pageRatio);
    };
    setResize();
    addEventListener("resize", setResize);
    return () => {
      removeEventListener("resize", setResize);
    };
  }, [pageHeight, pageRatio]);

  const changeFF = (e: ChangeEvent<HTMLSelectElement>) => {
    setFontFamily(e.target.value);
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
          <select className="adjustitem" id="fontFamily" onChange={changeFF}>
            {fontfamilies.map((ff, id) => (
              <option key={id} value={ff}>
                {ff}
              </option>
            ))}
          </select>
          <label className="adjustlabel" htmlFor="colorScheme">
            配色
          </label>
          <select className="adjustitem" id="colorScheme">
            <option value="#e0e2dc">黒字白紙</option>
            <option value="whiteonblack">白字黒紙</option>
          </select>
        </div>
        <div className="pagedisplay">
          {pageIds.map((pid, id) => (
            <MyPage
              key={id}
              pages={book.pages}
              pageId={pid}
              pageHeight={pageHeight}
              pageWidth={pageWidth}
              fontFamily={fontFamily}
            />
          ))}
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
        }
        .adjustitem + .adjustlabel {
          margin-left: 2rem;
        }
        .pagedisplay {
          flex: 1;
          display: flex;
          justify-content: center;
          background: #171923;
          // overflow-x: auto;
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
  const res = await fetch(`http://localhost:3000/api/books`);
  const books = await res.json();

  return {
    paths: books.map((book: any) => ({ params: { id: `${book.id}` } })),
    fallback: false,
  };
}; // later feature idea: add query for page number

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const res = await fetch(`http://localhost:3000/api/books/${params!.id}`);
  const book = await res.json();

  return {
    props: { book },
  };
};

export default MyBook;
