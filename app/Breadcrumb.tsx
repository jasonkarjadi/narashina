"use client";

import Link from "next/link";
import { useSelectedLayoutSegments } from "next/navigation";
import { FC, Fragment } from "react";
import data from "../data";

const Breadcrumb: FC = () => {
  const segments = useSelectedLayoutSegments();
  const slug = data.find(
    ({ slug }) => JSON.stringify(segments) === JSON.stringify(slug?.segments)
  )?.slug;

  return (
    <>
      {slug?.titles.map((title, idx) => (
        <Fragment key={idx}>
          <span>　／　</span>
          <Link href={`/${segments.slice(0, idx + 1).join("/")}`}>{title}</Link>
        </Fragment>
      ))}
    </>
  );
};

export default Breadcrumb;
