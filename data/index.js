import Link from "next/link";
import * as Books from "./books";

const data = [
  {
    id: "index",
    slug: undefined,
    pages: [
      { id: "0000", content: <></> },
      {
        id: "0001",
        content: (
          <div>
            <div className="text-center m-auto">
              <h1 className="text-6xl font-bold">ならしな</h1>
              <h2 className="text-2xl">執筆書庫</h2>
            </div>
          </div>
        ),
      },
      {
        id: "0002",
        content: (
          <div>
            <p>About Me</p>
          </div>
        ),
      },
      {
        id: "0003",
        content: (
          <div>
            <p>Jason Karjadi</p>
          </div>
        ),
      },
    ],
  },
  {
    id: "about",
    slug: {
      segments: ["about"],
      titles: ["あらまし"],
    },
    pages: [{ id: "0000", content: <></> }],
  },
  {
    id: "books",
    slug: {
      segments: ["books"],
      titles: ["ふみぐら"],
    },
    pages: [
      { id: "0000", content: <></> },
      {
        id: "0001",
        content: (
          <div>
            <h1>執筆作品</h1>
          </div>
        ),
      },
      {
        id: "0002",
        content: (
          <div>
            <Link href={`/books/001`} passHref legacyBehavior>
              <button>
                <h2>國語學槪論</h2>
                著：橋本進吉
                <br />
                刊行：岩波書店&emsp; 1946年12月10日
              </button>
            </Link>
          </div>
        ),
      },
    ],
  },
  ...Object.values(Books),
];

export default data;
