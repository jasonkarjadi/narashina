"use client";

import { ChangeEvent, Dispatch, FC, SetStateAction } from "react";

interface AdjustItemProps {
  labelText: string;
  values: string[];
  setState: Dispatch<SetStateAction<string>>;
}

const AdjustItem: FC<AdjustItemProps> = ({ labelText, values, setState }) => {
  const changeValState = (e: ChangeEvent<HTMLSelectElement>) => {
    setState(e.target.value.toLowerCase().replaceAll(" ", "_"));
  };

  return (
    <>
      <label htmlFor={labelText}>{labelText}</label>
      <select id={labelText} onChange={changeValState}>
        {values.map((val, id) => (
          <option key={id} value={val}>
            {val}
          </option>
        ))}
      </select>
    </>
  );
};

export default AdjustItem;
