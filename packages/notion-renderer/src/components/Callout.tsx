import { CalloutBlock } from "../types";
import { RichText } from "./RichText";

interface CalloutProps {
  block: CalloutBlock;
}

export function Callout({ block }: CalloutProps) {
  const calloutData = block.callout;
  const richText = calloutData.rich_text;
  const icon = calloutData.icon;

  // Render icon (emoji or external image)
  const renderIcon = () => {
    if (!icon) return null;

    if (icon.type === "emoji") {
      return (
        <span className="notion-page-icon-inline notion-page-icon-span">
          {icon.emoji}
        </span>
      );
    }

    if (icon.type === "external") {
      return (
        <img
          className="notion-page-icon-inline"
          src={icon.external.url}
          alt="callout icon"
        />
      );
    }

    if (icon.type === "file") {
      return (
        <img
          className="notion-page-icon-inline"
          src={icon.file.url}
          alt="callout icon"
        />
      );
    }

    return null;
  };

  return (
    <div className="notion-callout">
      {renderIcon()}
      <div className="notion-callout-text">
        <RichText value={richText} />
      </div>
    </div>
  );
}
