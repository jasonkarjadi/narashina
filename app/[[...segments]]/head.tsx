import { FC } from "react";
import { Params } from "../../types";
import DefaultTags from "../DefaultTags";

interface HeadProps {
  params: Params;
}

const Head: FC<HeadProps> = ({ params }) => {
  const { id } = params;

  return (
    <>
      <DefaultTags />
      <title>執筆書庫「ならしな」</title>
    </>
  );
};

export default Head;
