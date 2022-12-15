"use client";

import { FC, useState } from "react";
import data from "../../data";
import { Params } from "../../types";
import BookNavBtn from "../BookNavBtn";
import Slider from "../Slider";

interface PageProps {
  params: Params;
}

const Page: FC<PageProps> = ({ params }) => {
  const [mod, setMod] = useState(0);

  const pages = data.find(
    ({ slug }) =>
      JSON.stringify(params.segments) === JSON.stringify(slug?.segments)
  )?.pages;

  const maxLimit = pages && pages.length - 2 + (pages.length % 2);

  return (
    <>
      <div className="pagewrap">
        <div>{pages?.[mod + 1]?.content}</div>
        <div>{pages?.[mod]?.content}</div>
      </div>
      <div className="pagenav">
        <BookNavBtn modState={[mod, setMod]} limit={maxLimit} />
        <Slider
          value={mod}
          max={maxLimit}
          // marks={marks}
          handleChange={(e) => setMod(parseInt(e.target.value))}
        />
        <BookNavBtn modState={[mod, setMod]} />
      </div>
    </>
  );
};

export const generateStaticParams = () => {
  return data.map(({ slug }) => ({ segments: slug?.segments }));
};

export default Page;
