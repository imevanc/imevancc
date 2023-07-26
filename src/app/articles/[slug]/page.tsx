// { params }: { params: { slug: string } }
"use client";

import { ArticleLayout } from "@/components/ArticleLayout";

const meta = {
  author: "Evan Charalampidis",
  date: "2022-04-19",
  title: "Next.js + AWS S3 Upload",
  description:
    "An example of a Next.js application allowing you to upload photos to an Amazon Web Services S3 storage bucket.",
};

const Page = () => (
  <ArticleLayout meta={meta}>This is an article</ArticleLayout>
);

export default Page;
