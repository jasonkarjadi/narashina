import { FC } from "react";
import { Page } from "../types";

interface MyPageProps {
  pages: Page[];
  pageId: number;
  pageHeight: number;
  pageWidth: number;
  fontFamily: string;
  colors: string[];
}

const MyPage: FC<MyPageProps> = ({
  pages,
  pageId,
  pageHeight,
  pageWidth,
  fontFamily,
  colors,
}) => {
  const filtered = pages.filter((page) => page.id == pageId)[0];

  if (filtered) {
    return (
      <>
        <div className="page">
          <div
            className="paper"
            dangerouslySetInnerHTML={{ __html: filtered.body || "" }} // to adjust page height properly, might need viewport height instead
          />
        </div>
        <style jsx>{`
          .page {
            width: ${pageWidth}px;
            height: ${pageHeight}px;
          }
          .paper {
            writing-mode: vertical-rl;
            border-left: solid ${colors[0]} 1px;
            border-right: solid ${colors[0]} 1px;
            background: ${filtered.background
              ? filtered.background
              : colors[1]};
            padding: 4rem 2rem;
            font-family: ${fontFamily};
            font-size: 1.78vh;
            width: 100%;
            height: 100%;
            color: ${colors[0]};
          }
        `}</style>
        <style jsx global>{`
          span {
            color: brown;
          }
          .border-5 {
            border: solid ${colors[0]} 5px;
          }
          .border-r {
            border-right: solid ${colors[0]} 1px;
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
          .autofill-dots {
            border-left: 2px dotted ${colors[0]};
            display: inline-block;
          }
          .text-xs {
            font-size: 0.75rem;
          }
          .flex-1 {
            flex: 1;
          }
        `}</style>
      </>
    );
  } else {
    return (
      <>
        <div className="page" />
        <style jsx>{`
          .page {
            width: ${pageWidth}px;
            height: ${pageHeight}px;
          }
        `}</style>
      </>
    );
  }
};

export default MyPage;
