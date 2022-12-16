"use client";

import { FC, ReactNode, useState } from "react";
import AdjustItem from "./AdjustItem";

interface BookUIProps {
  children: ReactNode;
}

const BookUI: FC<BookUIProps> = ({ children }) => {
  const [fontFamily, setFontFamily] = useState("noto_serif_jp");
  const [colorScheme, setColorScheme] = useState("黒字白紙");

  return (
    <>
      {/* <div className="adjustbar">
        <AdjustItem
          labelText="書体"
          values={["Noto Serif JP", "Shippori Mincho"]}
          setState={setFontFamily}
        />
        <AdjustItem
          labelText="配色"
          values={["黒字白紙", "白字黒紙"]}
          setState={setColorScheme}
        />
      </div> */}
      <div className={`flex-1 flex flex-col ${fontFamily} ${colorScheme}`}>
        {children}
      </div>
    </>
  );
};

export default BookUI;
