import { NextApiRequest, NextApiResponse } from "next";
import books from "../../../data/books/index";

const handler = ({ query: { id } }: NextApiRequest, res: NextApiResponse) => {
  const filtered = books.filter((book: any) => book.id == id)[0];

  if (filtered) {
    res.status(200).json(filtered);
  } else {
    res.status(404).json({ message: `Book with id ${id} is not found` });
  }
};

export default handler;
