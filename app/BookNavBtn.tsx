import { faCaretLeft, faCaretRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Dispatch, FC, SetStateAction } from "react";

interface BookNavBtnProps {
  modState: [number, Dispatch<SetStateAction<number>>];
  limit?: number;
}

const BookNavBtn: FC<BookNavBtnProps> = ({ modState, limit }) => {
  const [mod, setMod] = modState;
  const [ariaLabel, isDisabled, btnIcon, diffValue] = limit
    ? ["Next", mod >= limit, faCaretLeft, 2]
    : ["Previous", mod <= 0, faCaretRight, -2];
  const handleClick = () => setMod((mod) => mod + diffValue);

  return (
    <button
      className="booknavbtn"
      aria-label={`Flip To ${ariaLabel} Page`}
      disabled={isDisabled}
      onClick={handleClick}
    >
      <FontAwesomeIcon icon={btnIcon} />
    </button>
  );
};

export default BookNavBtn;
