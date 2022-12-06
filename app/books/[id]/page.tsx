import { FC } from "react";
import books from "../../../data/books";
import BookInterface from "./BookInterface";

interface PageBookProps {
  params: { id: string };
}

const PageBook: FC<PageBookProps> = ({ params }) => {
  return (
    <BookInterface
      book={books.find((book) => book.id.toString() == params.id)}
    />
  );
};

export const generateStaticParams = () => {
  return books.map((book) => ({
    id: book.id.toString(),
  }));
};

export default PageBook;
