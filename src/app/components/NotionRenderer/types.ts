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
  | "bookmark";

export interface Parent {
  type: string;
  page_id?: string;
  workspace?: boolean;
}

export interface NotionBlock {
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
  type: BlockType;
  [key: string]: any; // For type-specific properties
}

export interface NotionBlockList {
  object: "list";
  results: NotionBlock[];
  next_cursor: string | null;
  has_more: boolean;
  type?: string;
  block?: Record<string, any>;
  developer_survey?: string;
  request_id?: string;
}

export interface NotionRendererProps {
  blocks: NotionBlockList;
  customImage?: React.ComponentType<any>;
}
