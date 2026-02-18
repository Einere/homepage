import React from "react";
import type { BlockObjectResponse } from "@notionhq/client";
import {
  BulletedListItemBlock,
  NumberedListItemBlock,
  NotionBlockList,
} from "../types";
import { RichText } from "./RichText";
import { isFullBlock } from "../utils/notionUtils";

type ListItemBlock = BulletedListItemBlock | NumberedListItemBlock;

interface ListProps {
  blocks: ListItemBlock[];
  retrieveBlockChildren?: (blockId: string) => Promise<NotionBlockList>;
  renderBlocks?: (blocks: BlockObjectResponse[]) => React.ReactNode[];
}

function getRichText(item: ListItemBlock) {
  return item.type === "bulleted_list_item"
    ? item.bulleted_list_item.rich_text
    : item.numbered_list_item.rich_text;
}

export async function List({
  blocks,
  retrieveBlockChildren,
  renderBlocks,
}: ListProps) {
  if (blocks.length === 0) return null;

  const listType = blocks[0].type;
  const ListTag = listType === "bulleted_list_item" ? "ul" : "ol";
  const className =
    listType === "bulleted_list_item"
      ? "notion-list notion-list-disc"
      : "notion-list notion-list-numbered";

  const childrenResults = await Promise.all(
    blocks.map(async (item) => {
      if (!item.has_children || !retrieveBlockChildren || !renderBlocks) {
        return null;
      }
      try {
        const childData = await retrieveBlockChildren(item.id);
        const fullBlocks = (childData.results ?? []).filter(isFullBlock);
        if (fullBlocks.length === 0) return null;
        return renderBlocks(fullBlocks);
      } catch {
        return null;
      }
    }),
  );

  return (
    <ListTag className={className}>
      {blocks.map((item, index) => (
        <li key={item.id}>
          <RichText value={getRichText(item)} />
          {childrenResults[index]}
        </li>
      ))}
    </ListTag>
  );
}
