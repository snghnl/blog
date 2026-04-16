"use client";

import Giscus from "@giscus/react";

export default function GiscusComments() {
  return (
    <Giscus
      repo="snghnl/blog"
      repoId="R_kgDORvN8Cw"
      category="General"
      categoryId="DIC_kwDORvN8C84C6-tu"
      mapping="pathname"
      strict="0"
      reactionsEnabled="1"
      emitMetadata="0"
      inputPosition="top"
      theme="noborder"
      lang="ko"
      loading="lazy"
    />
  );
}
