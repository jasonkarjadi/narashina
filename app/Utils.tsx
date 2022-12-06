"use client";

import { FC, useEffect } from "react";

const Utils: FC = () => {
  useEffect(() => {
    const setResize = () => {
      document.documentElement.style.setProperty(
        "--doc-height",
        `${innerHeight}px`
      );
      document.documentElement.style.setProperty(
        "--bookpage-width",
        `${(innerHeight - 160) * 0.7071}px` // 100% * 1 / 1.4142
      );
    };
    setResize();
    addEventListener("resize", setResize);
    return () => {
      removeEventListener("resize", setResize);
    };
  }, []);

  return <></>;
};

export default Utils;
