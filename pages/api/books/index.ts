import { NextApiRequest, NextApiResponse } from "next";
import books from "../../../data/books/index";

const handler = (_req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json(books);
};

export default handler;
