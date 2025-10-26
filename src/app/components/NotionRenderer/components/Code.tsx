"use client";

import { CodeBlock } from "../types";
import { RichText } from "./RichText";
import { useState } from "react";

interface CodeProps {
  block: CodeBlock;
}

export function Code({ block }: CodeProps) {
  const codeData = block.code;
  const richText = codeData.rich_text;

  const [isCopied, setIsCopied] = useState(false);

  return (
    <div className="notion-code">
      <button
        className="notion-code-copy notion-code-copy-button"
        onClick={() => {
          const textToCopy = richText.map((rt) => rt.plain_text).join("");
          navigator.clipboard
            .writeText(textToCopy)
            .then(() => {
              setIsCopied(true);
            })
            .finally(() => {
              setTimeout(() => setIsCopied(false), 2000);
            });
        }}
      >
        {isCopied ? "Copied!" : "📋"}
      </button>
      <pre>
        <code>
          <RichText value={richText} />
        </code>
      </pre>
    </div>
  );
}
