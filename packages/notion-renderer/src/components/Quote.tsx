import { QuoteBlock } from "../types";
import { RichText } from "./RichText";

interface QuoteProps {
  block: QuoteBlock;
}

export function Quote({ block }: QuoteProps) {
  const quoteData = block.quote;
  const richText = quoteData.rich_text;

  return (
    <blockquote>
      <RichText value={richText} />
    </blockquote>
  );
}
