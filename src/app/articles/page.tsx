import type { NextPage } from "next/types";
import type { Metadata } from "next";

import { Card } from "@/components/Card";
import { SimpleLayout } from "@/components/SimpleLayout";
import { formatDate } from "@/helpers/formatDate";
import { ArticleIF } from "@/interfaces/ArticleIF";

export const metadata: Metadata = {
  title: "Articles - Evan Charalampidis",
  description:
    "All of my thoughts on programming, clean code, and more, collected in chronological order.",
};

const Article: React.FC<{ article: ArticleIF }> = ({ article }) => {
  return (
    <article className="md:grid md:grid-cols-4 md:items-baseline">
      <Card className="md:col-span-3">
        <Card.Title href={`/articles/${article.slug}`}>
          {article.title}
        </Card.Title>
        <Card.Eyebrow
          as="time"
          dateTime={article.date}
          className="md:hidden"
          decorate
        >
          {formatDate(article.date)}
        </Card.Eyebrow>
        <Card.Description>{article.description}</Card.Description>
        <Card.Cta>Read article</Card.Cta>
      </Card>
      <Card.Eyebrow
        as="time"
        dateTime={article.date}
        className="mt-1 hidden md:block"
      >
        {formatDate(article.date)}
      </Card.Eyebrow>
    </article>
  );
};

const ArticlesIndex = () => {
  // console.log(slug);
  return (
    <SimpleLayout
      title="Writing on software design, company building, and the aerospace industry."
      intro="All of my long-form thoughts on programming, leadership, product design, and more, collected in chronological order."
    >
      <div className="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40">
        <div className="flex max-w-3xl flex-col space-y-16">
          {/* {articles.map((article: ArticleIF) => (
            <Article key={article.slug} article={article} />
          ))} */}
          <>Next.js + AWS S3 Upload</>
        </div>
      </div>
    </SimpleLayout>
  );
};

export default ArticlesIndex;
