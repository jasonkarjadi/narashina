// import Link from "next/link";

const data = [
  {
    id: "index",
    pages: [
      { id: "0000", content: <></> },
      {
        id: "0001",
        content: (
          <div>
            <h1>ならしな</h1>
            <h2>執筆書庫</h2>
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
        content: <div></div>,
      },
    ],
  },
  {
    id: "books/001",
    slug: {
      segments: ["books", "001"],
      titles: ["ふみぐら", "國語學槪論"],
    },
    pages: [{ id: "0000", content: <></> }],
  },
];

export default data;

{
  /* <Link key={id} href={`/books/${id}`} passHref legacyBehavior>
          <button>
            <h2>{title.original}</h2>
            著：{author.original}
            <br />
            刊行：{publisher.original}&emsp;
            {year}年{month}月{date}日
          </button>
        </Link> */
}
