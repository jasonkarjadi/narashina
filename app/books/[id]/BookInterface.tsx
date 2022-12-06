"use client";

import { FC, useState } from "react";
import { Book } from "../../../types";
import AdjustItem from "./AdjustItem";
import BookNavBtn from "./BookNavBtn";
import BookPage from "./BookPage";
import MarkedRange from "./MarkedRange";
import styles from "./styles.module.scss";

interface BookInterfaceProps {
  book?: Book;
}

const BookInterface: FC<BookInterfaceProps> = ({ book }) => {
  const [pageId, setPageId] = useState(0);
  const [fontFamily, setFontFamily] = useState("noto_serif_jp");
  const [colorScheme, setColorScheme] = useState("黒字白紙");

  const mods = [...Array(2)].map((_, idx) => idx).reverse();

  return (
    <main className={styles.readerbox}>
      <div className={styles.adjustbar}>
        <AdjustItem
          labelText="書体"
          values={["Noto Serif JP", "Shippori Mincho"]}
          setState={setFontFamily}
        />
        <AdjustItem
          labelText="配色"
          values={["黒字白紙", "白字黒紙"]}
          setState={setColorScheme}
        />
      </div>
      <div
        className={`${styles.pagespace} ${fontFamily} ${styles[colorScheme]}`}
      >
        {mods.map((mod) => (
          <BookPage
            key={mod}
            page={book?.pages.find((page) => page.id == pageId + mod)}
          />
        ))}
      </div>
      <div className={styles.pagenav}>
        <BookNavBtn
          pageIdState={[pageId, setPageId]}
          limit={book?.pages.length}
        />
        <MarkedRange
          setPageId={setPageId}
          marks={book?.marks}
          rangeMax={book && Math.floor(book.pages.length / 2)}
          rangeVal={pageId / 2}
        />
        <BookNavBtn pageIdState={[pageId, setPageId]} />
      </div>
    </main>
  );
};

export default BookInterface;
