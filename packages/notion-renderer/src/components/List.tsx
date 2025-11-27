import { BulletedListItemBlock, NumberedListItemBlock } from "../types";
import { RichText } from "./RichText";

type ListItemBlock = BulletedListItemBlock | NumberedListItemBlock;

interface ListProps {
  blocks: ListItemBlock[];
}

export function List({ blocks }: ListProps) {
  // Group consecutive list items by type
  const groupedLists: Array<{
    type: "bulleted_list_item" | "numbered_list_item";
    items: ListItemBlock[];
  }> = [];

  let currentList: (typeof groupedLists)[0] | null = null;

  blocks.forEach((block) => {
    if (
      block.type === "bulleted_list_item" ||
      block.type === "numbered_list_item"
    ) {
      const type = block.type;

      if (!currentList || currentList.type !== type) {
        if (currentList) {
          groupedLists.push(currentList);
        }
        currentList = { type, items: [block] };
      } else {
        currentList.items.push(block);
      }
    } else {
      if (currentList) {
        groupedLists.push(currentList);
        currentList = null;
      }
    }
  });

  if (currentList) {
    groupedLists.push(currentList);
  }

  return (
    <>
      {groupedLists.map((list, listIndex) => {
        const ListTag = list.type === "bulleted_list_item" ? "ul" : "ol";
        const className =
          list.type === "bulleted_list_item"
            ? "notion-list notion-list-disc"
            : "notion-list notion-list-numbered";

        return (
          <ListTag key={listIndex} className={className}>
            {list.items.map((item, itemIndex) => {
              const richText =
                item.type === "bulleted_list_item"
                  ? item.bulleted_list_item.rich_text
                  : item.numbered_list_item.rich_text;

              return (
                <li key={`${item.id}-${itemIndex}`}>
                  <RichText value={richText} />
                </li>
              );
            })}
          </ListTag>
        );
      })}
    </>
  );
}
