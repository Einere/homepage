import React from "react";
import type { BlockObjectResponse } from "@notionhq/client";
import {
  ColumnListBlock,
  ColumnBlock,
  NotionBlock,
  NotionBlockList,
} from "../types";

interface ColumnListProps {
  block: ColumnListBlock;
  retrieveBlockChildren?: (blockId: string) => Promise<NotionBlockList>;
  renderBlocks?: (blocks: BlockObjectResponse[]) => React.ReactNode[];
}

export async function ColumnList({
  block,
  retrieveBlockChildren,
  renderBlocks,
}: ColumnListProps) {
  let columnBlocks: ColumnBlock[] = [];
  if (block.has_children && block.id && retrieveBlockChildren) {
    try {
      const childrenData = await retrieveBlockChildren(block.id);
      columnBlocks = (childrenData.results || []) as ColumnBlock[];
    } catch {
      return null;
    }
  }

  if (columnBlocks.length === 0) {
    return null;
  }

  const columnChildrenPromises = columnBlocks.map(async (columnBlock) => {
    if (
      !columnBlock.has_children ||
      !columnBlock.id ||
      !retrieveBlockChildren
    ) {
      return [];
    }
    try {
      const childrenData = await retrieveBlockChildren(columnBlock.id);
      return (childrenData.results || []) as NotionBlock[];
    } catch {
      return [];
    }
  });

  const allColumnChildren = await Promise.all(columnChildrenPromises);

  const columnElements: React.ReactNode[] = [];

  for (let i = 0; i < columnBlocks.length; i++) {
    const columnBlock = columnBlocks[i];
    const columnChildren = allColumnChildren[i];

    const width = `${(columnBlock.column.width_ratio ?? 1) * 100}%`;

    columnElements.push(
      <div key={columnBlock.id} className="notion-column" style={{ width }}>
        {renderBlocks?.(columnChildren) ?? null}
      </div>,
    );

    if (i < columnBlocks.length - 1) {
      columnElements.push(
        <div key={`spacer-${i}`} className="notion-spacer" />,
      );
    }
  }

  return <div className="notion-row">{columnElements}</div>;
}
