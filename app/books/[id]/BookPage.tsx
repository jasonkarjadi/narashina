import { FC } from "react";
import { Page } from "../../../types";
import generateElems from "./generateElems";

interface BookPageProps {
  page?: Page;
  className?: string;
}

const BookPage: FC<BookPageProps> = ({ page, className }) => {
  return (
    <div>
      {page && <div className={className}>{page.body?.map(generateElems)}</div>}
    </div>
  );
};

export default BookPage;
