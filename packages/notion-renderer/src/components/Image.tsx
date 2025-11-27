"use client";

import React from "react";
import { ImageBlock as ImageBlockType } from "../types";
import { RichText } from "./RichText";
import { getImageUrlFromImageData } from "../utils/notionUtils";

interface ImageProps {
  block: ImageBlockType;
  customImage?: React.ComponentType<{
    src: string;
    alt: string;
    style?: React.CSSProperties;
  }>;
}

export function ImageBlock({ block, customImage }: ImageProps) {
  const imageData = block.image;
  const rawUrl = getImageUrlFromImageData(imageData);

  if (!rawUrl) {
    return null;
  }

  // Use proxy for Notion-hosted images
  // - Notion file URLs
  // - External URLs that point to Notion's S3 host (signed URLs)
  const NOTION_S3_HOST = "prod-files-secure.s3.us-west-2.amazonaws.com";
  const urlForRender = (() => {
    try {
      const u = new URL(rawUrl);
      if (u.hostname === NOTION_S3_HOST) {
        return `/api/notion-image?blockId=${block.id}`;
      }
    } catch {
      /* noop */
    }
    return rawUrl;
  })();

  // Get caption
  const caption = imageData.caption || [];
  const captionStr = caption.map((c) => c.plain_text).join("");

  return (
    <figure className="notion-asset-wrapper notion-asset-wrapper-image">
      <div className="notion-image">
        {customImage ? (
          React.createElement(customImage, {
            src: urlForRender,
            alt: captionStr,
            style: { objectFit: "contain" },
          })
        ) : (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={urlForRender}
            alt={captionStr}
            style={{ width: "100%", height: "auto", objectFit: "contain" }}
          />
        )}
      </div>
      {caption && caption.length > 0 && (
        <figcaption className="notion-asset-caption">
          <RichText value={caption} />
        </figcaption>
      )}
    </figure>
  );
}
