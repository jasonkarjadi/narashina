import { faCaretLeft, faCaretRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Dispatch, FC, SetStateAction } from "react";

interface BookNavBtnProps {
  modState: [number, Dispatch<SetStateAction<number>>];
  limit?: number;
}

const BookNavBtn: FC<BookNavBtnProps> = ({ modState, limit }) => {
  const [mod, setMod] = modState;
  const [ariaLabel, isDisabled, btnIcon, handleClick] = limit
    ? ["Next", mod >= limit, faCaretLeft, (val: number) => val + 2]
    : ["Previous", mod <= 0, faCaretRight, (val: number) => val - 2];

  return (
    <button
      onClick={() => setMod(handleClick)}
      disabled={isDisabled}
      aria-label={`Flip To ${ariaLabel} Page`}
    >
      <FontAwesomeIcon icon={btnIcon} />
    </button>
  );
};

export default BookNavBtn;
