// Import official types from @notionhq/client
import type {
  RichTextItemResponse,
  BlockObjectResponse,
  ListBlockChildrenResponse,
  ParagraphBlockObjectResponse,
  Heading1BlockObjectResponse,
  Heading2BlockObjectResponse,
  Heading3BlockObjectResponse,
  BulletedListItemBlockObjectResponse,
  NumberedListItemBlockObjectResponse,
  ImageBlockObjectResponse,
  CodeBlockObjectResponse,
  TableBlockObjectResponse,
  TableRowBlockObjectResponse,
  ColumnListBlockObjectResponse,
  ColumnBlockObjectResponse,
  CalloutBlockObjectResponse,
  QuoteBlockObjectResponse,
} from "@notionhq/client";

// Re-export official types with custom names for backward compatibility
export type RichTextItem = RichTextItemResponse;
export type NotionBlock = BlockObjectResponse;
export type NotionBlockList = ListBlockChildrenResponse;

// Re-export specific block types
export type ParagraphBlock = ParagraphBlockObjectResponse;
export type Heading1Block = Heading1BlockObjectResponse;
export type Heading2Block = Heading2BlockObjectResponse;
export type Heading3Block = Heading3BlockObjectResponse;
export type BulletedListItemBlock = BulletedListItemBlockObjectResponse;
export type NumberedListItemBlock = NumberedListItemBlockObjectResponse;
export type ListItemBlock = BulletedListItemBlock | NumberedListItemBlock;
export type ImageBlock = ImageBlockObjectResponse;
export type CodeBlock = CodeBlockObjectResponse;
export type TableBlock = TableBlockObjectResponse;
export type TableRowBlock = TableRowBlockObjectResponse;
export type ColumnListBlock = ColumnListBlockObjectResponse;
export type ColumnBlock = ColumnBlockObjectResponse;
export type CalloutBlock = CalloutBlockObjectResponse;
export type QuoteBlock = QuoteBlockObjectResponse;

export type CustomImageComponent = React.ComponentType<{
  src: string;
  alt: string;
  fill?: boolean;
  sizes?: string;
  style?: React.CSSProperties;
}>;

export interface NotionRendererProps {
  blocks: NotionBlockList;
  retrieveBlockChildren?: (blockId: string) => Promise<NotionBlockList>;
  customImage?: CustomImageComponent;
  resolveImageUrl?: (rawUrl: string, blockId: string) => string;
}
