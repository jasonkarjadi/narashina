import { GetStaticProps } from "next";
import Head from "next/head";
import Link from "next/link";
import { FC } from "react";
import { Book } from "../../types";

interface MyBooksProps {
  books: Book[];
}

const MyBooks: FC<MyBooksProps> = ({ books }) => {
  return (
    <>
      <Head>
        <title>ならしな／ふみぐら</title>
      </Head>
      <div className="maincenter">
        <h1 className="mainheading">執筆作品</h1>
        <div className="booksnav">
          {books.map((book, key) => {
            return (
              <Link key={key} href={`/books/${book.id}`}>
                <button className="booklink">
                  <h2 className="booktitle">{book.title.original}</h2>
                  著：{book.author.original}
                  <br />
                  刊行：{book.publisher.original}&emsp;
                  {book.year}年{book.month && `${book.month}月`}
                  {book.date && `${book.date}日`}
                </button>
              </Link>
            );
          })}
        </div>
      </div>
      <style jsx>{`
        .maincenter {
          flex: 1;
          writing-mode: vertical-rl;
          padding: 1rem 2rem;
          display: flex;
          flex-direction: column;
        }
        .mainheading {
          // font-size: 3rem;
          line-height: 1;
          font-family: Noto Serif JP, serif;
          margin-left: 1rem;
        }
        .booksnav {
          // background: brown;
          flex: 1;
          display: flex;
        }
        .booklink {
          font-family: Noto Serif JP, serif;
          background: #9c4221;
          // flex: 1;
        }
        .booktitle {
          font-weight: normal;
        }
      `}</style>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch(`http://localhost:3000/api/books`);
  const books = await res.json();

  return {
    props: { books },
  };
};

export default MyBooks;
