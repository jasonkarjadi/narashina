"use client";

import { ChangeEvent, Dispatch, FC, SetStateAction } from "react";

interface MarkedRangeProps {
  setPageId: Dispatch<SetStateAction<number>>;
  marks?: string[] | number[];
  rangeMax?: string | number;
  rangeVal?: string | number | readonly string[];
}

const MarkedRange: FC<MarkedRangeProps> = ({
  setPageId,
  marks,
  rangeMax,
  rangeVal,
}) => {
  const changePage = (e: ChangeEvent<HTMLInputElement>) => {
    setPageId(2 * parseInt(e.target.value));
  };

  return (
    <div>
      <datalist id="bookmarks">
        {marks && marks.map((val) => <option key={val} value={val} />)}
      </datalist>
      <input
        type="range"
        max={rangeMax}
        value={rangeVal}
        list="bookmarks"
        onChange={changePage}
      />
    </div>
  );
};

export default MarkedRange;
