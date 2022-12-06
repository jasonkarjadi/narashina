import Link from "next/link";
import { FC } from "react";
import books from "../../data/books";
import styles from "./styles.module.scss";

const PageBooks: FC = () => {
  return (
    <main className={styles.maincenter}>
      <h1>執筆作品</h1>
      <div>
        {books.map(({ id, title, author, publisher, year, month, date }) => (
          <Link key={id} href={`/books/${id}`} passHref legacyBehavior>
            <button>
              <h2>{title.original}</h2>
              著：{author.original}
              <br />
              刊行：{publisher.original}&emsp;
              {year}年{month}月{date}日
            </button>
          </Link>
        ))}
      </div>
    </main>
  );
};

export default PageBooks;
