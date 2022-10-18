import { FC } from "react";
import { Page } from "../types";

interface MyPageProps {
  pages: Page[];
  pageId: number;
  pageHeight: number;
  pageWidth: number;
  fontFamily: string;
}

const MyPage: FC<MyPageProps> = ({
  pages,
  pageId,
  pageHeight,
  pageWidth,
  fontFamily,
}) => {
  const filtered = pages.filter((page) => page.id == pageId)[0];

  if (filtered) {
    return (
      <>
        <div style={{ width: pageWidth, height: pageHeight }} className="page">
          <div
            className="paper"
            dangerouslySetInnerHTML={{ __html: filtered.body || "" }} // to adjust page height properly, might need viewport height instead
          />
        </div>
        <style jsx>{`
          .paper {
            writing-mode: vertical-rl;
            border-left: solid black 1px;
            border-right: solid black 1px;
            background: ${filtered.background
              ? filtered.background
              : "#e0e2dc"};
            padding: 4rem 2rem;
            font-family: ${fontFamily};
            font-size: 1.78vh;
            width: 100%;
            height: 100%;
          }
        `}</style>
        <style jsx global>{`
          span {
            color: brown;
          }
          .border-5 {
            border: solid black 5px;
          }
          .border-r {
            border-right: solid black 1px;
          }
          .flex {
            display: flex;
          }
          .flex-col {
            flex-direction: column;
          }
          .justify-center {
            justify-content: center;
          }
          .items-center {
            align-items: center;
          }
          .text-end {
            text-align: end;
          }
          .font-normal {
            font-weight: normal;
          }
        `}</style>
      </>
    );
  } else {
    return (
      <div style={{ width: pageWidth, height: pageHeight }} className="page" />
    );
  }
};

export default MyPage;
