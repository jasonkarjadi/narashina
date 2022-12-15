import { ChangeEvent, Dispatch, FC, SetStateAction } from "react";

interface AdjustItemProps {
  labelText: string;
  values: string[];
  setState: Dispatch<SetStateAction<string>>;
}

const AdjustItem: FC<AdjustItemProps> = ({ labelText, values, setState }) => {
  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setState(e.target.value.toLowerCase().replaceAll(" ", "_"));
  };

  return (
    <>
      <label htmlFor={labelText}>{labelText}</label>
      <select id={labelText} onChange={handleChange}>
        {values.map((val) => (
          <option key={val} value={val}>
            {val}
          </option>
        ))}
      </select>
    </>
  );
};

export default AdjustItem;
