import React from "react";
import {
  NotionBlockList,
  BulletedListItemBlock,
  NumberedListItemBlock,
  NotionRendererProps,
} from "./types";
import { Paragraph } from "./components/Paragraph";
import { Heading } from "./components/Heading";
import { ImageBlock } from "./components/Image";
import { Code } from "./components/Code";
import { List } from "./components/List";
import { Table } from "./components/Table";
import { ColumnList } from "./components/ColumnList";
import type { BlockObjectResponse } from "@notionhq/client";
import { isFullBlock, isListItemBlock } from "./utils/notionUtils";

const renderBlock = (
  block: BlockObjectResponse,
  customImage?: React.ComponentType<{
    src: string;
    alt: string;
    fill?: boolean;
    sizes?: string;
    style?: React.CSSProperties;
  }>,
  retrieveBlockChildren?: (blockId: string) => Promise<NotionBlockList>,
) => {
  switch (block.type) {
    case "paragraph":
      // Skip empty paragraphs
      if (block.paragraph.rich_text.length === 0) {
        return null;
      }
      return <Paragraph key={block.id} block={block} />;

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
      return (
        <Table
          key={block.id}
          block={block}
          retrieveBlockChildren={retrieveBlockChildren}
        />
      );

    case "table_row":
      // Table rows are rendered as part of their parent table
      // Don't render them separately
      return null;

    case "column_list":
      // ColumnList component will fetch its own children via API
      return (
        <ColumnList
          key={block.id}
          block={block}
          retrieveBlockChildren={retrieveBlockChildren}
          customImage={customImage}
        />
      );

    case "column":
      // Columns are rendered as part of their parent column_list
      // Don't render them separately
      return null;

    default:
      // Handle any other block types that might exist in the official API
      return null;
  }
};

export async function NotionRenderer({
  blocks,
  customImage,
  retrieveBlockChildren,
}: NotionRendererProps) {
  if (!blocks || !blocks.results || blocks.results.length === 0) {
    return <div className="notion-empty">No content available</div>;
  }

  // Process all blocks and group lists
  const processedBlocks: React.ReactNode[] = [];
  const currentList: (BulletedListItemBlock | NumberedListItemBlock)[] = [];
  let currentListType: "bulleted_list_item" | "numbered_list_item" | null =
    null;

  for (let index = 0; index < blocks.results.length; index++) {
    const block = blocks.results[index];

    // Skip partial blocks that don't have full type information
    if (!isFullBlock(block)) {
      continue;
    }

    if (isListItemBlock(block)) {
      // If we have a different list type, close the previous list
      if (currentListType && block.type !== currentListType) {
        processedBlocks.push(
          <List key={`list-${index}`} blocks={[...currentList]} />,
        );
        currentList.length = 0;
      }

      currentList.push(block);
      currentListType = block.type;
    } else {
      // Close any open list before rendering non-list block
      if (currentList.length > 0) {
        processedBlocks.push(
          <List key={`list-${index}`} blocks={[...currentList]} />,
        );
        currentList.length = 0;
        currentListType = null;
      }

      const blockElement = renderBlock(
        block,
        customImage,
        retrieveBlockChildren,
      );
      if (blockElement) {
        processedBlocks.push(blockElement);
      }
    }
  }

  // Close any remaining list
  if (currentList.length > 0) {
    processedBlocks.push(<List key="list-final" blocks={[...currentList]} />);
  }

  return <div className="notion-renderer mb-16">{processedBlocks}</div>;
}
