import type { NextPage, Metadata } from "next/types";

import { SimpleLayout } from "@/components/SimpleLayout";
import { ArticleIF } from "@/interfaces/ArticleIF";
import { articles } from "@/data/articles";
import { ArticleWide } from "@/components/ArticleWide";

export const metadata: Metadata = {
  title: "Articles - Evan Charalampidis",
  description:
    "All of my thoughts on programming, code architecture, and more, collected in chronological order.",
};

const Page: NextPage = () => (
  <SimpleLayout
    title="My thoughts about technology"
    intro="Writing on programming, software design, code architecture, and more, in chronological order."
  >
    <div className="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40">
      <div className="flex max-w-3xl flex-col space-y-16">
        {articles.map((article: ArticleIF) => (
          <ArticleWide key={article.slug} article={article} />
        ))}
      </div>
    </div>
  </SimpleLayout>
);

export default Page;
