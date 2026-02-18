import { getLinkFromRichTextItem } from "../utils/notionUtils";
import { RichTextItem } from "../types";

interface RichTextProps {
  value?: RichTextItem[];
  className?: string;
}

export function RichText({ value, className }: RichTextProps) {
  if (!value || value.length === 0) {
    return null;
  }

  const renderText = (text: RichTextItem, index: number): React.ReactNode => {
    const { annotations, plain_text } = text;

    let element: React.ReactNode = plain_text;

    const needsCode = annotations.code;
    const isBackgroundColor =
      annotations.color?.endsWith("_background") ?? false;
    const needsBg =
      isBackgroundColor && annotations.color !== "default_background";
    const needsColor = !isBackgroundColor && annotations.color !== "default";

    const linkUrl = getLinkFromRichTextItem(text);

    if (needsCode) {
      element = (
        <code key={index} className="notion-inline-code">
          {element}
        </code>
      );
    }
    if (annotations.bold) {
      element = <strong key={index}>{element}</strong>;
    }
    if (annotations.italic) {
      element = <em key={index}>{element}</em>;
    }
    if (annotations.strikethrough) {
      element = <s key={index}>{element}</s>;
    }
    if (annotations.underline) {
      element = (
        <span key={index} className="notion-inline-underscore">
          {element}
        </span>
      );
    }

    if (linkUrl) {
      element = (
        <a key={index} href={linkUrl} className="notion-link">
          {element}
        </a>
      );
    }

    if (needsBg && annotations.color) {
      element = (
        <span key={index} className={`notion-${annotations.color}_co`}>
          {element}
        </span>
      );
    }

    if (needsColor && annotations.color) {
      element = (
        <span key={index} className={`notion-${annotations.color}_co`}>
          {element}
        </span>
      );
    }

    return element;
  };

  return (
    <span className={className}>
      {value.map((item, index) => renderText(item, index))}
    </span>
  );
}
