export type ForeignText = { original: string; romanized: string };

export type Elem = {
  tag: string;
  className?: string;
  content: string | Elem[];
};

export type Page = {
  id: number | string;
  background?: string;
  pagemark?: string;
  body?: Elem[];
};

export type Book = {
  id: number | string;
  title: ForeignText;
  author: ForeignText;
  publisher: ForeignText;
  note?: string;
  year: number | string;
  month: number | string;
  date: number | string;
  ratio: number;
  marks: number[];
  pages: Page[];
};

export type Params = {
  [key: string]: string | string[] | undefined;
};
