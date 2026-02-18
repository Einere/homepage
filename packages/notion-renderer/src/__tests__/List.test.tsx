import React from "react";
import { describe, it, expect, vi } from "vitest";
import { List } from "../components/List";
import { renderBlocks } from "../NotionRenderer";
import type { BlockObjectResponse } from "@notionhq/client";
import type {
  BulletedListItemBlock,
  NumberedListItemBlock,
  NotionBlockList,
} from "../types";

async function resolveAsyncJsx(
  node: React.ReactNode,
): Promise<React.ReactNode> {
  if (node === null || node === undefined || typeof node !== "object") {
    return node;
  }

  if (Array.isArray(node)) {
    return Promise.all(node.map(resolveAsyncJsx));
  }

  if (!React.isValidElement(node)) {
    return node;
  }

  const { type, props } = node;

  if (typeof type === "function") {
    const result = await (
      type as (p: typeof props) => Promise<React.ReactNode>
    )(props);
    return resolveAsyncJsx(result);
  }

  const children = (props as { children?: React.ReactNode }).children;
  if (children !== undefined) {
    const resolved = await resolveAsyncJsx(children);
    return React.cloneElement(node, {}, resolved);
  }

  return node;
}

async function renderToContainer(
  jsx: React.ReactNode,
): Promise<HTMLDivElement> {
  const { render } = await import("@testing-library/react");
  const resolved = await resolveAsyncJsx(jsx);
  const { container } = render(resolved as React.ReactElement);
  return container as HTMLDivElement;
}

function makeBulletBlock(
  id: string,
  text: string,
  hasChildren = false,
): BulletedListItemBlock {
  return {
    object: "block",
    id,
    parent: { type: "page_id", page_id: "page-1" },
    created_time: "2024-01-01T00:00:00.000Z",
    last_edited_time: "2024-01-01T00:00:00.000Z",
    created_by: { object: "user", id: "user-1" },
    last_edited_by: { object: "user", id: "user-1" },
    has_children: hasChildren,
    archived: false,
    in_trash: false,
    type: "bulleted_list_item",
    bulleted_list_item: {
      rich_text: [
        {
          type: "text",
          text: { content: text, link: null },
          annotations: {
            bold: false,
            italic: false,
            strikethrough: false,
            underline: false,
            code: false,
            color: "default",
          },
          plain_text: text,
          href: null,
        },
      ],
      color: "default",
    },
  } as BulletedListItemBlock;
}

function makeNumberedBlock(
  id: string,
  text: string,
  hasChildren = false,
): NumberedListItemBlock {
  return {
    object: "block",
    id,
    parent: { type: "page_id", page_id: "page-1" },
    created_time: "2024-01-01T00:00:00.000Z",
    last_edited_time: "2024-01-01T00:00:00.000Z",
    created_by: { object: "user", id: "user-1" },
    last_edited_by: { object: "user", id: "user-1" },
    has_children: hasChildren,
    archived: false,
    in_trash: false,
    type: "numbered_list_item",
    numbered_list_item: {
      rich_text: [
        {
          type: "text",
          text: { content: text, link: null },
          annotations: {
            bold: false,
            italic: false,
            strikethrough: false,
            underline: false,
            code: false,
            color: "default",
          },
          plain_text: text,
          href: null,
        },
      ],
      color: "default",
    },
  } as NumberedListItemBlock;
}

function makeParagraphBlock(
  id: string,
  text: string,
): BlockObjectResponse {
  return {
    object: "block",
    id,
    parent: { type: "page_id", page_id: "page-1" },
    created_time: "2024-01-01T00:00:00.000Z",
    last_edited_time: "2024-01-01T00:00:00.000Z",
    created_by: { object: "user", id: "user-1" },
    last_edited_by: { object: "user", id: "user-1" },
    has_children: false,
    archived: false,
    in_trash: false,
    type: "paragraph",
    paragraph: {
      rich_text: [
        {
          type: "text",
          text: { content: text, link: null },
          annotations: {
            bold: false,
            italic: false,
            strikethrough: false,
            underline: false,
            code: false,
            color: "default",
          },
          plain_text: text,
          href: null,
        },
      ],
      color: "default",
    },
  } as unknown as BlockObjectResponse;
}

function makeBlockList(
  results: BlockObjectResponse[],
): NotionBlockList {
  return {
    object: "list",
    results,
    next_cursor: null,
    has_more: false,
    type: "block",
    block: {},
  } as NotionBlockList;
}

function withRenderBlocks(
  retrieveBlockChildren: (blockId: string) => Promise<NotionBlockList>,
) {
  return (blocks: BlockObjectResponse[]) =>
    renderBlocks(blocks, undefined, retrieveBlockChildren);
}

describe("List", () => {
  it("빈 blocks 배열이면 아무것도 렌더링하지 않는다", async () => {
    const container = await renderToContainer(<List blocks={[]} />);
    expect(container.innerHTML).toBe("");
  });

  it("1단계 bulleted list를 렌더링한다", async () => {
    const blocks = [
      makeBulletBlock("b1", "항목 1"),
      makeBulletBlock("b2", "항목 2"),
    ];

    const container = await renderToContainer(<List blocks={blocks} />);

    const ul = container.querySelector("ul");
    expect(ul).not.toBeNull();
    expect(ul!.querySelectorAll(":scope > li")).toHaveLength(2);
    expect(container.textContent).toContain("항목 1");
    expect(container.textContent).toContain("항목 2");
  });

  it("1단계 numbered list를 렌더링한다", async () => {
    const blocks = [
      makeNumberedBlock("n1", "번호 1"),
      makeNumberedBlock("n2", "번호 2"),
    ];

    const container = await renderToContainer(<List blocks={blocks} />);

    const ol = container.querySelector("ol");
    expect(ol).not.toBeNull();
    expect(ol!.querySelectorAll(":scope > li")).toHaveLength(2);
  });

  it("2단계 중첩된 bulleted list를 렌더링한다", async () => {
    const parentBlocks = [makeBulletBlock("b1", "부모 항목", true)];
    const childBlocks = [
      makeBulletBlock("b1-1", "자식 항목 1"),
      makeBulletBlock("b1-2", "자식 항목 2"),
    ];

    const retrieveBlockChildren = vi
      .fn()
      .mockResolvedValue(makeBlockList(childBlocks));

    const container = await renderToContainer(
      <List
        blocks={parentBlocks}
        retrieveBlockChildren={retrieveBlockChildren}
        renderBlocks={withRenderBlocks(retrieveBlockChildren)}
      />,
    );

    const outerUl = container.querySelector("ul");
    expect(outerUl).not.toBeNull();

    const parentLi = outerUl!.querySelector(":scope > li");
    expect(parentLi).not.toBeNull();

    const nestedUl = parentLi!.querySelector("ul");
    expect(nestedUl).not.toBeNull();
    expect(nestedUl!.querySelectorAll(":scope > li")).toHaveLength(2);

    expect(container.textContent).toContain("부모 항목");
    expect(container.textContent).toContain("자식 항목 1");
    expect(container.textContent).toContain("자식 항목 2");

    expect(retrieveBlockChildren).toHaveBeenCalledWith("b1");
  });

  it("3단계 중첩된 bulleted list를 렌더링한다", async () => {
    const level1 = [makeBulletBlock("l1", "레벨 1", true)];
    const level2 = [makeBulletBlock("l2", "레벨 2", true)];
    const level3 = [makeBulletBlock("l3", "레벨 3")];

    const retrieveBlockChildren = vi
      .fn()
      .mockImplementation((blockId: string) => {
        if (blockId === "l1") return Promise.resolve(makeBlockList(level2));
        if (blockId === "l2") return Promise.resolve(makeBlockList(level3));
        return Promise.resolve(makeBlockList([]));
      });

    const container = await renderToContainer(
      <List
        blocks={level1}
        retrieveBlockChildren={retrieveBlockChildren}
        renderBlocks={withRenderBlocks(retrieveBlockChildren)}
      />,
    );

    const depth1Ul = container.querySelector("ul");
    const depth1Li = depth1Ul?.querySelector(":scope > li");
    const depth2Ul = depth1Li?.querySelector("ul");
    const depth2Li = depth2Ul?.querySelector(":scope > li");
    const depth3Ul = depth2Li?.querySelector("ul");
    const depth3Li = depth3Ul?.querySelector(":scope > li");

    expect(depth3Li).not.toBeNull();
    expect(container.textContent).toContain("레벨 1");
    expect(container.textContent).toContain("레벨 2");
    expect(container.textContent).toContain("레벨 3");

    expect(retrieveBlockChildren).toHaveBeenCalledTimes(2);
    expect(retrieveBlockChildren).toHaveBeenCalledWith("l1");
    expect(retrieveBlockChildren).toHaveBeenCalledWith("l2");
  });

  it("중첩된 numbered list를 렌더링한다", async () => {
    const parentBlocks = [makeNumberedBlock("n1", "부모 번호", true)];
    const childBlocks = [
      makeNumberedBlock("n1-1", "자식 번호 1"),
      makeNumberedBlock("n1-2", "자식 번호 2"),
    ];

    const retrieveBlockChildren = vi
      .fn()
      .mockResolvedValue(makeBlockList(childBlocks));

    const container = await renderToContainer(
      <List
        blocks={parentBlocks}
        retrieveBlockChildren={retrieveBlockChildren}
        renderBlocks={withRenderBlocks(retrieveBlockChildren)}
      />,
    );

    const outerOl = container.querySelector("ol");
    const parentLi = outerOl?.querySelector(":scope > li");
    const nestedOl = parentLi?.querySelector("ol");

    expect(nestedOl).not.toBeNull();
    expect(nestedOl!.querySelectorAll(":scope > li")).toHaveLength(2);
  });

  it("bulleted list 안에 중첩된 numbered list를 렌더링한다", async () => {
    const parentBlocks = [makeBulletBlock("b1", "부모 bullet", true)];
    const childBlocks = [
      makeNumberedBlock("n1", "자식 번호 1"),
      makeNumberedBlock("n2", "자식 번호 2"),
    ];

    const retrieveBlockChildren = vi
      .fn()
      .mockResolvedValue(makeBlockList(childBlocks));

    const container = await renderToContainer(
      <List
        blocks={parentBlocks}
        retrieveBlockChildren={retrieveBlockChildren}
        renderBlocks={withRenderBlocks(retrieveBlockChildren)}
      />,
    );

    const outerUl = container.querySelector("ul");
    const parentLi = outerUl?.querySelector(":scope > li");
    const nestedOl = parentLi?.querySelector("ol");

    expect(nestedOl).not.toBeNull();
    expect(nestedOl!.querySelectorAll(":scope > li")).toHaveLength(2);
  });

  it("has_children이 true이지만 renderBlocks가 없으면 자식을 렌더링하지 않는다", async () => {
    const blocks = [makeBulletBlock("b1", "항목", true)];

    const retrieveBlockChildren = vi
      .fn()
      .mockResolvedValue(makeBlockList([makeBulletBlock("c1", "자식")]));

    const container = await renderToContainer(
      <List blocks={blocks} retrieveBlockChildren={retrieveBlockChildren} />,
    );

    const ul = container.querySelector("ul");
    expect(ul!.querySelectorAll("ul")).toHaveLength(0);
    expect(retrieveBlockChildren).not.toHaveBeenCalled();
  });

  it("retrieveBlockChildren이 실패하면 자식 없이 렌더링한다", async () => {
    const blocks = [makeBulletBlock("b1", "항목", true)];

    const retrieveBlockChildren = vi
      .fn()
      .mockRejectedValue(new Error("API error"));

    const container = await renderToContainer(
      <List
        blocks={blocks}
        retrieveBlockChildren={retrieveBlockChildren}
        renderBlocks={withRenderBlocks(retrieveBlockChildren)}
      />,
    );

    expect(container.textContent).toContain("항목");
    const ul = container.querySelector("ul");
    expect(ul!.querySelectorAll("ul")).toHaveLength(0);
  });

  it("리스트 아이템 안에 비-리스트 자식 블록도 렌더링한다", async () => {
    const parentBlocks = [makeBulletBlock("b1", "부모 항목", true)];
    const paragraphBlock = makeParagraphBlock("p1", "문단 내용");
    const childListItem = makeBulletBlock("b1-1", "자식 항목");

    const retrieveBlockChildren = vi
      .fn()
      .mockResolvedValue(makeBlockList([paragraphBlock, childListItem]));

    const container = await renderToContainer(
      <List
        blocks={parentBlocks}
        retrieveBlockChildren={retrieveBlockChildren}
        renderBlocks={withRenderBlocks(retrieveBlockChildren)}
      />,
    );

    expect(container.textContent).toContain("문단 내용");
    expect(container.textContent).toContain("자식 항목");
  });

  it("혼합 타입 자식 (bullet + numbered)이 올바르게 그룹핑된다", async () => {
    const parentBlocks = [makeBulletBlock("b1", "부모", true)];
    const childBlocks = [
      makeBulletBlock("c1", "bullet 자식"),
      makeNumberedBlock("c2", "numbered 자식 1"),
      makeNumberedBlock("c3", "numbered 자식 2"),
    ];

    const retrieveBlockChildren = vi
      .fn()
      .mockResolvedValue(makeBlockList(childBlocks));

    const container = await renderToContainer(
      <List
        blocks={parentBlocks}
        retrieveBlockChildren={retrieveBlockChildren}
        renderBlocks={withRenderBlocks(retrieveBlockChildren)}
      />,
    );

    const parentLi = container.querySelector("ul > li");
    const nestedUl = parentLi?.querySelector("ul");
    const nestedOl = parentLi?.querySelector("ol");

    expect(nestedUl).not.toBeNull();
    expect(nestedOl).not.toBeNull();
    expect(nestedUl!.querySelectorAll(":scope > li")).toHaveLength(1);
    expect(nestedOl!.querySelectorAll(":scope > li")).toHaveLength(2);
  });
});
