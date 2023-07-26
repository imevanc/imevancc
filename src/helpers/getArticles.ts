import glob from "fast-glob";
import * as path from "path";

const importArticle = async (articleFilename: string) => {
  let { meta, default: component } = await import(
    `../articles/${articleFilename}`
  );

  return {
    slug: articleFilename.replace(/(\/index)?\.mdx$/, ""),
    ...meta,
    component,
  };
};

export const getArticles = async () => {
  //   let articleFilenames = await glob(["*.mdx", "*/index.mdx"], {
  let articleFilenames = await glob(["*.mdx"], {
    cwd: path.join(process.cwd(), "src/pages/articles"),
  });

  let articles = await Promise.all(articleFilenames.map(importArticle));

  return articles.sort((a, z) => +new Date(z.date) - +new Date(a.date));
};
