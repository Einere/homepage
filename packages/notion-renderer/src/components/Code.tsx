import { CodeBlock } from "../types";
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
import { CopyButton } from "./CopyButton";

interface CodeProps {
  block: CodeBlock;
}

export function Code({ block }: CodeProps) {
  const codeData = block.code;
  const richText = codeData.rich_text;
  const language = codeData.language || "typescript";

  // Get the plain text content
  const codeContent = richText.map((rt) => rt.plain_text).join("");

  // Apply prism syntax highlighting statically during server-side render
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

  return (
    <div className="notion-code">
      <CopyButton codeContent={codeContent} />
      <pre className={`language-${language}`}>
        <code
          className={`language-${language}`}
          dangerouslySetInnerHTML={{ __html: highlightedCode }}
        />
      </pre>
    </div>
  );
}
