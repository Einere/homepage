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
} from "@notionhq/client";

// Define color type based on official API (ApiColor is not exported)
export type NotionColor =
  | "default"
  | "gray"
  | "brown"
  | "orange"
  | "yellow"
  | "green"
  | "blue"
  | "purple"
  | "pink"
  | "red"
  | "default_background"
  | "gray_background"
  | "brown_background"
  | "orange_background"
  | "yellow_background"
  | "green_background"
  | "blue_background"
  | "purple_background"
  | "pink_background"
  | "red_background";

// Define annotation type based on official API (AnnotationResponse is not exported)
export interface Annotation {
  bold: boolean;
  italic: boolean;
  strikethrough: boolean;
  underline: boolean;
  code: boolean;
  color: NotionColor;
}

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
export type ImageBlock = ImageBlockObjectResponse;
export type CodeBlock = CodeBlockObjectResponse;
export type TableBlock = TableBlockObjectResponse;
export type TableRowBlock = TableRowBlockObjectResponse;
export type ColumnListBlock = ColumnListBlockObjectResponse;
export type ColumnBlock = ColumnBlockObjectResponse;
export type CalloutBlock = CalloutBlockObjectResponse;

export interface NotionRendererProps {
  blocks: NotionBlockList;
  retrieveBlockChildren?: (blockId: string) => Promise<NotionBlockList>;
  customImage?: React.ComponentType<{
    src: string;
    alt: string;
    fill?: boolean;
    sizes?: string;
    style?: React.CSSProperties;
  }>;
}
