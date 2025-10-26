import { NotionBlock } from "../types";
import { RichText } from "./RichText";

interface HeadingProps {
  block: NotionBlock;
}

export function Heading({ block }: HeadingProps) {
  const headingType = block.type as "heading_1" | "heading_2" | "heading_3";
  const richText = block[headingType]?.rich_text || [];

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
