import React from "react";
import {
  ColumnListBlock,
  ColumnBlock,
  NotionBlock,
  NotionBlockList,
} from "../types";
import { NotionRenderer } from "../NotionRenderer";

interface ColumnListProps {
  block: ColumnListBlock;
  retrieveBlockChildren?: (blockId: string) => Promise<NotionBlockList>;
  customImage?: React.ComponentType<{
    src: string;
    alt: string;
    style?: React.CSSProperties;
  }>;
}

export async function ColumnList({
  block,
  retrieveBlockChildren,
  customImage,
}: ColumnListProps) {
  // Fetch children of the column_list (these are ColumnBlock objects)
  let columnBlocks: ColumnBlock[] = [];
  if (block.has_children && block.id && retrieveBlockChildren) {
    try {
      const childrenData = await retrieveBlockChildren(block.id);
      columnBlocks = (childrenData.results || []) as ColumnBlock[];
    } catch (error) {
      console.error("Error fetching column_list children:", error);
    }
  }

  if (columnBlocks.length === 0) {
    return null;
  }

  // Render each column with its own children
  const columnElements: React.ReactNode[] = [];

  for (let i = 0; i < columnBlocks.length; i++) {
    const columnBlock = columnBlocks[i];

    // Calculate width as percentage
    const width = `${(columnBlock.column.width_ratio ?? 1) * 100}%`;

    // Fetch children of this column
    let columnChildren: NotionBlock[] = [];
    if (columnBlock.has_children && columnBlock.id && retrieveBlockChildren) {
      try {
        const childrenData = await retrieveBlockChildren(columnBlock.id);
        columnChildren = (childrenData.results || []) as NotionBlock[];
      } catch (error) {
        console.error("Error fetching column children:", error);
      }
    }

    columnElements.push(
      <div key={columnBlock.id} className="notion-column" style={{ width }}>
        <NotionRenderer
          blocks={
            {
              object: "list",
              results: columnChildren,
              next_cursor: null,
              has_more: false,
            } as NotionBlockList
          }
          retrieveBlockChildren={retrieveBlockChildren}
          customImage={customImage}
        />
      </div>,
    );

    // Add spacer between columns (not after the last one)
    if (i < columnBlocks.length - 1) {
      columnElements.push(
        <div key={`spacer-${i}`} className="notion-spacer" />,
      );
    }
  }

  return <div className="notion-row">{columnElements}</div>;
}
