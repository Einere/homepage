"use client";

import React from "react";
import { NotionBlock } from "../types";
import { RichText } from "./RichText";

interface ImageProps {
  block: NotionBlock;
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
  const imageUrl = fileUrl || externalUrl;

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
            alt: "",
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
