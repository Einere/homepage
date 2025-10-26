import { NotionBlock } from "../types";
import { RichText } from "./RichText";

interface CodeProps {
  block: NotionBlock;
}

export function Code({ block }: CodeProps) {
  const codeData = block.code;
  const richText = codeData?.rich_text || [];
  const language = codeData?.language || "";

  return (
    <div className="notion-code">
      {language && (
        <div className="notion-code-copy notion-code-copy-button">
          {language}
        </div>
      )}
      <pre>
        <code>
          <RichText value={richText} />
        </code>
      </pre>
    </div>
  );
}
