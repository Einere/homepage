"use client";

import { useState } from "react";

interface CopyButtonProps {
  codeContent: string;
}

export function CopyButton({ codeContent }: CopyButtonProps) {
  const [isCopied, setIsCopied] = useState(false);

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
    <button
      className="notion-code-copy notion-code-copy-button"
      onClick={handleCopy}
    >
      {isCopied ? "Copied!" : "📋"}
    </button>
  );
}
