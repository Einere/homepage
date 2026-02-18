"use client";

import { useState } from "react";

interface CopyButtonProps {
  codeContent: string;
}

const COPY_FEEDBACK_DURATION_MS = 2000;

export function CopyButton({ codeContent }: CopyButtonProps) {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = async () => {
    if (!navigator.clipboard) return;
    try {
      await navigator.clipboard.writeText(codeContent);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), COPY_FEEDBACK_DURATION_MS);
    } catch {
      // clipboard write not available
    }
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
