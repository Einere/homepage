"use client";

import React from "react";
import { ImageBlock as ImageBlockType } from "../types";
import { RichText } from "./RichText";
import { getImageUrlFromImageData } from "@/app/utils/notionUtils";

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
  const imageUrl = getImageUrlFromImageData(imageData);

  if (!imageUrl) {
    return null;
  }

  // Get caption
  const caption = imageData.caption || [];
  const captionStr = caption.map((c) => c.plain_text).join("");

  return (
    <figure className="notion-asset-wrapper notion-asset-wrapper-image">
      <div className="notion-image">
        {customImage ? (
          React.createElement(customImage, {
            src: imageUrl,
            alt: captionStr,
            style: { objectFit: "contain" },
          })
        ) : (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={imageUrl}
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
