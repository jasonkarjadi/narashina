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
    (datum) => JSON.stringify(params.id) === JSON.stringify(datum.id)
  )?.pages;

  const maxLimit = pages && pages.length - 2 + (pages.length % 2);

  return (
    <>
      <div className="pagewrap">
        <div>{pages?.[mod + 1]}</div>
        <div>{pages?.[mod]}</div>
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
  return data.map((datum) => ({ ...datum }));
};

export default Page;
