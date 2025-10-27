"use client";

import { CodeBlock } from "../types";
import { useState } from "react";
import prism from "prismjs";
import "prismjs/components/prism-clike.min.js";
import "prismjs/components/prism-css-extras.min.js";
import "prismjs/components/prism-css.min.js";
import "prismjs/components/prism-javascript.min.js";
import "prismjs/components/prism-js-extras.min.js";
import "prismjs/components/prism-json.min.js";
import "prismjs/components/prism-jsx.min.js";
import "prismjs/components/prism-tsx.min.js";
import "prismjs/components/prism-typescript.min.js";

interface CodeProps {
  block: CodeBlock;
}

export function Code({ block }: CodeProps) {
  const codeData = block.code;
  const richText = codeData.rich_text;
  const language = codeData.language || "typescript";
  const [isCopied, setIsCopied] = useState(false);

  // Get the plain text content
  const codeContent = richText.map((rt) => rt.plain_text).join("");

  // Apply prism syntax highlighting statically
  const highlightedCode = (() => {
    try {
      return prism.highlight(
        codeContent,
        prism.languages[language] || prism.languages.javascript,
        language,
      );
    } catch (err) {
      console.warn("prismjs highlight error", err);
      return codeContent;
    }
  })();

  const handleCopy = () => {
    navigator.clipboard
      .writeText(codeContent)
      .then(() => {
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 2000);
      })
      .catch((err) => {
        console.error("Failed to copy:", err);
      });
  };

  return (
    <div className="notion-code">
      <button
        className="notion-code-copy notion-code-copy-button"
        onClick={handleCopy}
      >
        {isCopied ? "Copied!" : "📋"}
      </button>
      <pre className={`language-${language}`}>
        <code
          className={`language-${language}`}
          dangerouslySetInnerHTML={{ __html: highlightedCode }}
        />
      </pre>
    </div>
  );
}
