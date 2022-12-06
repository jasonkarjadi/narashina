import { Elem } from "../../../types";

const generateElems = (value: Elem, index: number) => {
  const { tag, content, className } = value;
  const child =
    typeof content === "string" ? content : content.map(generateElems);
  switch (tag) {
    case "div":
      return (
        <div key={index} className={className}>
          {child}
        </div>
      );
    case "section":
      return (
        <section key={index} className={className}>
          {child}
        </section>
      );
    case "h1":
      return (
        <h1 key={index} className={className}>
          {child}
        </h1>
      );
    case "h2":
      return (
        <h2 key={index} className={className}>
          {child}
        </h2>
      );
    case "h3":
      return (
        <h3 key={index} className={className}>
          {child}
        </h3>
      );
    case "h4":
      return (
        <h4 key={index} className={className}>
          {child}
        </h4>
      );
    case "h5":
      return (
        <h5 key={index} className={className}>
          {child}
        </h5>
      );
    case "h6":
      return (
        <h6 key={index} className={className}>
          {child}
        </h6>
      );
    case "p":
      return (
        <p key={index} className={className}>
          {child}
        </p>
      );
    case "span":
      return (
        <span key={index} className={className}>
          {child}
        </span>
      );
    default:
      return <></>;
  }
};

export default generateElems;
