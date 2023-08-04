import { ArticleIF } from "@/interfaces/ArticleIF";

export const articles: Array<ArticleIF> = [
  {
    slug: "what_is_an_api",
    author: "Evan Charalampidis",
    date: "2023-08-05",
    title: "What Is An API (Application Programming Interface)?",
    description:
      "APIs are mechanisms that enable two software components to communicate with each other using a set of definitions and protocols.",
  },
  {
    slug: "nextjs_aws_s3_upload",
    author: "Evan Charalampidis",
    date: "2023-04-19",
    title: "Next.js + AWS S3 Upload",
    description:
      "An example of a Next.js application allowing you to upload photos to an Amazon Web Services S3 storage bucket.",
  },
];
