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
import { Callout } from "./components/Callout";
import { Quote } from "./components/Quote";
import type { BlockObjectResponse } from "@notionhq/client";
import { isFullBlock, isListItemBlock } from "./utils/notionUtils";

type ListItemBlock = BulletedListItemBlock | NumberedListItemBlock;

type CustomImage = React.ComponentType<{
  src: string;
  alt: string;
  fill?: boolean;
  sizes?: string;
  style?: React.CSSProperties;
}>;

const renderBlock = (
  block: BlockObjectResponse,
  customImage?: CustomImage,
  retrieveBlockChildren?: (blockId: string) => Promise<NotionBlockList>,
): React.ReactNode => {
  switch (block.type) {
    case "paragraph":
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

    case "callout":
      return <Callout key={block.id} block={block} />;

    case "quote":
      return <Quote key={block.id} block={block} />;

    case "table":
      return (
        <Table
          key={block.id}
          block={block}
          retrieveBlockChildren={retrieveBlockChildren}
        />
      );

    case "table_row":
    case "column":
      return null;

    case "column_list":
      return (
        <ColumnList
          key={block.id}
          block={block}
          retrieveBlockChildren={retrieveBlockChildren}
          customImage={customImage}
        />
      );

    default:
      return null;
  }
};

export function renderBlocks(
  blocks: BlockObjectResponse[],
  customImage?: CustomImage,
  retrieveBlockChildren?: (blockId: string) => Promise<NotionBlockList>,
): React.ReactNode[] {
  const result: React.ReactNode[] = [];
  let listItems: ListItemBlock[] = [];

  const flushList = () => {
    if (listItems.length === 0) return;
    result.push(
      <List
        key={`list-${listItems[0].id}`}
        blocks={listItems}
        retrieveBlockChildren={retrieveBlockChildren}
        renderBlocks={(b) => renderBlocks(b, customImage, retrieveBlockChildren)}
      />,
    );
    listItems = [];
  };

  for (const block of blocks) {
    if (isListItemBlock(block)) {
      const currentType = listItems.length > 0 ? listItems[0].type : null;
      if (currentType && block.type !== currentType) {
        flushList();
      }
      listItems = [...listItems, block];
    } else {
      flushList();
      const element = renderBlock(block, customImage, retrieveBlockChildren);
      if (element) {
        result.push(element);
      }
    }
  }

  flushList();
  return result;
}

export async function NotionRenderer({
  blocks,
  customImage,
  retrieveBlockChildren,
}: NotionRendererProps) {
  if (!blocks || !blocks.results || blocks.results.length === 0) {
    return <div className="notion-empty">No content available</div>;
  }

  const fullBlocks = blocks.results.filter(isFullBlock);
  const rendered = renderBlocks(fullBlocks, customImage, retrieveBlockChildren);

  return <div className="notion-renderer mb-16">{rendered}</div>;
}
