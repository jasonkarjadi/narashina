import { ChangeEvent, FC } from "react";

interface SliderProps {
  value?: string | number | readonly string[];
  max?: string | number;
  marks?: string[] | number[];
  handleChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Slider: FC<SliderProps> = ({ value, max, marks, handleChange }) => {
  return (
    <div>
      <datalist id="bookmarks">
        {marks && marks.map((mark) => <option key={mark} value={mark} />)}
      </datalist>
      <input
        type="range"
        value={value}
        max={max}
        step={2}
        list="bookmarks"
        onChange={handleChange}
      />
    </div>
  );
};

export default Slider;
