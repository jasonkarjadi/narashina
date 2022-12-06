"use client";

import { faCaretLeft, faCaretRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Dispatch, FC, SetStateAction } from "react";

interface BookNavBtnProps {
  pageIdState: [number, Dispatch<SetStateAction<number>>];
  limit?: number;
}

const BookNavBtn: FC<BookNavBtnProps> = ({ pageIdState, limit }) => {
  const [pageId, setPageId] = pageIdState;
  const [ariaLabel, isDisabled, btnIcon, handleClick] = limit
    ? ["Next", pageId + 1 >= limit, faCaretLeft, (val: number) => val + 2]
    : ["Previous", pageId <= 0, faCaretRight, (val: number) => val - 2];

  return (
    <button
      onClick={() => setPageId(handleClick)}
      disabled={isDisabled}
      aria-label={`Flip To ${ariaLabel} Page`}
    >
      <FontAwesomeIcon icon={btnIcon} />
    </button>
  );
};

export default BookNavBtn;
