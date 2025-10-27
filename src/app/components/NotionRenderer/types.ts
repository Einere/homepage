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
  | "red";

export interface Annotation {
  bold?: boolean;
  italic?: boolean;
  strikethrough?: boolean;
  underline?: boolean;
  code?: boolean;
  color?: NotionColor;
}

export interface TextContent {
  content: string;
  link?: string | null;
}

export interface RichTextItem {
  type: "text" | "mention" | "equation";
  text?: TextContent;
  annotations: Annotation;
  plain_text: string;
  href?: string | null;
}

export type BlockType =
  | "paragraph"
  | "heading_1"
  | "heading_2"
  | "heading_3"
  | "bulleted_list_item"
  | "numbered_list_item"
  | "to_do"
  | "toggle"
  | "image"
  | "video"
  | "file"
  | "code"
  | "quote"
  | "callout"
  | "table"
  | "table_row"
  | "divider"
  | "bookmark"
  | "column_list"
  | "column";

export interface Parent {
  type: string;
  page_id?: string;
  workspace?: boolean;
}

// Base block properties that all blocks share
interface BaseNotionBlock {
  object: "block";
  id: string;
  parent: Parent;
  created_time: string;
  last_edited_time: string;
  created_by: {
    object: "user";
    id: string;
  };
  last_edited_by: {
    object: "user";
    id: string;
  };
  has_children: boolean;
  archived: boolean;
  in_trash: boolean;
}

// File object for images and files
interface FileObject {
  file: {
    url: string;
    expiry_time: string;
  };
  external?: never;
}

interface ExternalObject {
  external: {
    url: string;
  };
  file?: never;
}

interface ImageData {
  caption: RichTextItem[];
  type: "file" | "external";
  file?: FileObject["file"];
  external?: ExternalObject["external"];
}

interface TableRowData {
  cells: RichTextItem[][];
}

interface HeadingData {
  rich_text: RichTextItem[];
  is_toggleable?: boolean;
  color?: NotionColor;
}

interface ParagraphData {
  rich_text: RichTextItem[];
  color?: NotionColor;
}

interface CodeData {
  caption: RichTextItem[];
  rich_text: RichTextItem[];
  language: string;
}

// Distinguished union for different block types
export interface ParagraphBlock extends BaseNotionBlock {
  type: "paragraph";
  paragraph: ParagraphData;
}

export interface Heading1Block extends BaseNotionBlock {
  type: "heading_1";
  heading_1: HeadingData;
}

export interface Heading2Block extends BaseNotionBlock {
  type: "heading_2";
  heading_2: HeadingData;
}

export interface Heading3Block extends BaseNotionBlock {
  type: "heading_3";
  heading_3: HeadingData;
}

export interface BulletedListItemBlock extends BaseNotionBlock {
  type: "bulleted_list_item";
  bulleted_list_item: {
    rich_text: RichTextItem[];
    color?: NotionColor;
  };
}

export interface NumberedListItemBlock extends BaseNotionBlock {
  type: "numbered_list_item";
  numbered_list_item: {
    rich_text: RichTextItem[];
    color?: NotionColor;
  };
}

export interface ImageBlock extends BaseNotionBlock {
  type: "image";
  image: ImageData;
}

export interface CodeBlock extends BaseNotionBlock {
  type: "code";
  code: CodeData;
}

export interface TableBlock extends BaseNotionBlock {
  type: "table";
  table: {
    table_width: number;
    has_column_header: boolean;
    has_row_header: boolean;
  };
}

export interface TableRowBlock extends BaseNotionBlock {
  type: "table_row";
  table_row: TableRowData;
}

export interface ColumnListBlock extends BaseNotionBlock {
  type: "column_list";
  column_list: object;
}

export interface ColumnBlock extends BaseNotionBlock {
  type: "column";
  column: {
    width_ratio: number;
  };
}

export type NotionBlock =
  | ParagraphBlock
  | Heading1Block
  | Heading2Block
  | Heading3Block
  | BulletedListItemBlock
  | NumberedListItemBlock
  | ImageBlock
  | CodeBlock
  | TableBlock
  | TableRowBlock
  | ColumnListBlock
  | ColumnBlock;

export interface NotionBlockList {
  object: "list";
  results: NotionBlock[];
  next_cursor: string | null;
  has_more: boolean;
  type?: string;
  block?: Record<string, unknown>;
  developer_survey?: string;
  request_id?: string;
}

export interface NotionRendererProps {
  blocks: NotionBlockList;
  customImage?: React.ComponentType<{
    src: string;
    alt: string;
    style?: React.CSSProperties;
  }>;
}
