// import Link from "next/link";

const data = [
  {
    id: undefined,
    title: undefined,
    pages: [
      <></>,
      <div key={1}>
        <h1>ならしな</h1>
        <h2>執筆書庫</h2>
      </div>,
      <div key={2}>
        <p>About Me</p>
      </div>,
      <div key={3}>
        <p>Jason Karjadi</p>
      </div>,
    ],
  },
  {
    id: ["about"],
    title: "／あらまし",
    pages: [],
  },
  {
    id: ["books"],
    title: "／ふみぐら",
    pages: [
      <></>,
      <div key={1}>
        <h1>執筆作品</h1>
      </div>,
      <div key={2}>
        {/* <Link key={id} href={`/books/${id}`} passHref legacyBehavior>
          <button>
            <h2>{title.original}</h2>
            著：{author.original}
            <br />
            刊行：{publisher.original}&emsp;
            {year}年{month}月{date}日
          </button>
        </Link> */}
      </div>,
    ],
  },
  {
    id: ["books", "001"],
    title: "／ふみぐら／國語學槪論",
    pages: [],
  },
];

export default data;
