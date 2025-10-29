"use client";

import React from "react";
import { ImageBlock as ImageBlockType } from "../types";
import { RichText } from "./RichText";

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

  if (!imageData) {
    return null;
  }

  // Handle file URLs
  const fileUrl = imageData.file?.url;
  const externalUrl = imageData.external?.url;

  // Use proxy for Notion-hosted images (file URLs), keep external URLs as-is
  const imageUrl = fileUrl
    ? `/api/notion-image?blockId=${block.id}`
    : externalUrl;

  if (!imageUrl) {
    return null;
  }

  // Get caption
  const caption = imageData.caption || [];

  return (
    <figure className="notion-asset-wrapper notion-asset-wrapper-image">
      <div className="notion-image">
        {customImage ? (
          React.createElement(customImage, {
            src: imageUrl,
            alt: caption.map((c) => c.plain_text).join(""),
            style: { objectFit: "contain" },
          })
        ) : (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={imageUrl}
            alt=""
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
