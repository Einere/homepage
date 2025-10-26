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
    const { text: textContent, annotations, plain_text, href } = text;

    let element: React.ReactNode = plain_text;

    // Apply formatting based on annotations (order matters)
    const needsCode = annotations.code;
    const needsColor = annotations.color && annotations.color !== "default";
    const needsBg = needsColor && annotations.color !== "default";

    // Handle links first
    const linkUrl = href || textContent?.link;
    const isLink = !!linkUrl;

    // Build the element with all decorations
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

    // Apply link wrapper
    if (linkUrl) {
      element = (
        <a key={index} href={linkUrl} className="notion-link">
          {element}
        </a>
      );
    }

    // Apply background color if specified
    if (needsBg && annotations.color) {
      element = (
        <span
          key={index}
          className={`notion-${annotations.color}_background_co`}
        >
          {element}
        </span>
      );
    }

    // Apply text color
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
