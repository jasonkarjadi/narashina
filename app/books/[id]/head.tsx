import { FC } from "react";
import books from "../../../data/books";
import DefaultTags from "../../DefaultTags";

interface HeadBookProps {
  params: { id: string };
}

const HeadBook: FC<HeadBookProps> = ({ params }) => {
  const book = books.find((book) => book.id.toString() == params.id);

  return (
    <>
      <DefaultTags />
      <title>{book?.title.original}</title>
    </>
  );
};

export default HeadBook;
