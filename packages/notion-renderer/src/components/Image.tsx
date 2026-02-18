import React from "react";
import { ImageBlock as ImageBlockType, CustomImageComponent } from "../types";
import { RichText } from "./RichText";
import { getImageUrlFromImageData } from "../utils/notionUtils";

interface ImageProps {
  block: ImageBlockType;
  customImage?: CustomImageComponent;
  resolveImageUrl?: (rawUrl: string, blockId: string) => string;
}

export function NotionImage({
  block,
  customImage,
  resolveImageUrl,
}: ImageProps) {
  const imageData = block.image;
  const rawUrl = getImageUrlFromImageData(imageData);

  if (!rawUrl) {
    return null;
  }

  const urlForRender = resolveImageUrl
    ? resolveImageUrl(rawUrl, block.id)
    : rawUrl;

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
