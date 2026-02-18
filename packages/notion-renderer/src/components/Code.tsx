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

function highlightCode(code: string, language: string): string {
  try {
    return prism.highlight(
      code,
      prism.languages[language] || prism.languages.javascript,
      language,
    );
  } catch {
    return code;
  }
}

export function Code({ block }: CodeProps) {
  const codeData = block.code;
  const richText = codeData.rich_text;
  const language = codeData.language || "typescript";

  const codeContent = richText.map((rt) => rt.plain_text).join("");
  const highlightedCode = highlightCode(codeContent, language);

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
