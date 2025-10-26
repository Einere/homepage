import {
  Heading1Block,
  Heading2Block,
  Heading3Block,
  RichTextItem,
} from "../types";
import { RichText } from "./RichText";

type HeadingBlock = Heading1Block | Heading2Block | Heading3Block;

interface HeadingProps {
  block: HeadingBlock;
}

export function Heading({ block }: HeadingProps) {
  const headingType = block.type;

  let richText: RichTextItem[];
  switch (block.type) {
    case "heading_1":
      richText = block.heading_1.rich_text;
      break;
    case "heading_2":
      richText = block.heading_2.rich_text;
      break;
    case "heading_3":
      richText = block.heading_3.rich_text;
      break;
  }

  switch (headingType) {
    case "heading_1":
      return (
        <h1 className="notion-h notion-h1">
          <RichText value={richText} />
        </h1>
      );
    case "heading_2":
      return (
        <h2 className="notion-h notion-h2">
          <RichText value={richText} />
        </h2>
      );
    case "heading_3":
      return (
        <h3 className="notion-h notion-h3">
          <RichText value={richText} />
        </h3>
      );
    default:
      return (
        <h1 className="notion-h notion-h1">
          <RichText value={richText} />
        </h1>
      );
  }
}
