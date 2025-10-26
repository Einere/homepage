import { NotionBlock } from "../types";
import { RichText } from "./RichText";

interface ParagraphProps {
  block: NotionBlock;
}

export function Paragraph({ block }: ParagraphProps) {
  const richText = block.paragraph?.rich_text || [];

  return (
    <div className="notion-text">
      <RichText value={richText} />
    </div>
  );
}
