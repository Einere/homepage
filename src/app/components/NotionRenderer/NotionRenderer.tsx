import React from "react";
import { NotionBlockList } from "./types";
import { Paragraph } from "./components/Paragraph";
import { Heading } from "./components/Heading";
import { ImageBlock } from "./components/Image";
import { Code } from "./components/Code";
import { List } from "./components/List";
import { Table } from "./components/Table";

interface NotionRendererProps {
  blocks: NotionBlockList;
  customImage?: React.ComponentType<{
    src: string;
    alt: string;
    fill?: boolean;
    sizes?: string;
    style?: React.CSSProperties;
  }>;
}

export function NotionRenderer({ blocks, customImage }: NotionRendererProps) {
  if (!blocks || !blocks.results || blocks.results.length === 0) {
    return <div className="notion-empty">No content available</div>;
  }

  const renderBlock = (block: (typeof blocks.results)[0]) => {
    switch (block.type) {
      case "paragraph": {
        // Skip empty paragraphs
        const richText = block.paragraph?.rich_text || [];
        if (richText.length === 0) {
          return null;
        }
        return <Paragraph key={block.id} block={block} />;
      }

      case "heading_1":
      case "heading_2":
      case "heading_3":
        return <Heading key={block.id} block={block} />;

      case "image":
        return (
          <ImageBlock key={block.id} block={block} customImage={customImage} />
        );

      case "code":
        return <Code key={block.id} block={block} />;

      case "bulleted_list_item":
      case "numbered_list_item":
        // These will be handled separately by grouping logic
        return null;

      case "table":
        // Table component will fetch its own children via API
        return <Table key={block.id} block={block} />;

      case "table_row":
        // Table rows are rendered as part of their parent table
        // Don't render them separately
        return null;

      default:
        // Fallback for unsupported block types
        if (process.env.NODE_ENV !== "production") {
          console.warn(`Unsupported block type: ${block.type}`);
        }
        return null;
    }
  };

  // Process all blocks and group lists
  const processedBlocks: React.ReactNode[] = [];
  const currentList: (typeof blocks.results)[0][] = [];
  let currentListType: "bulleted_list_item" | "numbered_list_item" | null =
    null;

  blocks.results.forEach((block, index) => {
    const isListItem =
      block.type === "bulleted_list_item" ||
      block.type === "numbered_list_item";

    if (isListItem) {
      // If we have a different list type, close the previous list
      if (currentListType && block.type !== currentListType) {
        processedBlocks.push(
          <List key={`list-${index}`} blocks={[...currentList]} />,
        );
        currentList.length = 0;
      }

      currentList.push(block);
      currentListType = block.type as
        | "bulleted_list_item"
        | "numbered_list_item";
    } else {
      // Close any open list before rendering non-list block
      if (currentList.length > 0) {
        processedBlocks.push(
          <List key={`list-${index}`} blocks={[...currentList]} />,
        );
        currentList.length = 0;
        currentListType = null;
      }

      const blockElement = renderBlock(block);
      if (blockElement) {
        processedBlocks.push(blockElement);
      }
    }
  });

  // Close any remaining list
  if (currentList.length > 0) {
    processedBlocks.push(<List key="list-final" blocks={[...currentList]} />);
  }

  return <div className="notion-renderer">{processedBlocks}</div>;
}
