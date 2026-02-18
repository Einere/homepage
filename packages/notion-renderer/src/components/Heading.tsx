import { Heading1Block, Heading2Block, Heading3Block, RichTextItem } from "../types";
import { RichText } from "./RichText";

type HeadingBlock = Heading1Block | Heading2Block | Heading3Block;

interface HeadingProps {
  block: HeadingBlock;
}

const HEADING_CONFIG = {
  heading_1: { Tag: "h1" as const, className: "notion-h notion-h1" },
  heading_2: { Tag: "h2" as const, className: "notion-h notion-h2" },
  heading_3: { Tag: "h3" as const, className: "notion-h notion-h3" },
} as const;

function getHeadingRichText(block: HeadingBlock): RichTextItem[] {
  switch (block.type) {
    case "heading_1":
      return block.heading_1.rich_text;
    case "heading_2":
      return block.heading_2.rich_text;
    case "heading_3":
      return block.heading_3.rich_text;
  }
}

export function Heading({ block }: HeadingProps) {
  const { Tag, className } = HEADING_CONFIG[block.type];

  return (
    <Tag className={className}>
      <RichText value={getHeadingRichText(block)} />
    </Tag>
  );
}
