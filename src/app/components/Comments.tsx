"use client";

import Giscus from "@giscus/react";

export function Comments() {
  return (
    <Giscus
      id="comments"
      repo="einere/homepage"
      repoId="R_kgDOOHz03g"
      category="Announcements"
      categoryId="DIC_kwDOOHz03s4CrBIy"
      mapping="title"
      strict="0"
      reactionsEnabled="1"
      emitMetadata="0"
      inputPosition="top"
      theme="noborder_light"
      lang="ko"
      loading="lazy"
    />
  );
}
