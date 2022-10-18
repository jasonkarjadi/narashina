export type ForeignText = { original: string; romanized: string };

export type Page = {
  id: number;
  background?: string;
  body?: string;
};

export type Book = {
  id: number;
  title: ForeignText;
  author: ForeignText;
  publisher: ForeignText;
  note?: string;
  year: number;
  month?: number;
  date?: number;
  ratio: number;
  marks: number[];
  pages: Page[];
};
