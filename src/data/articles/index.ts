import { ArticleIF } from "@/interfaces/ArticleIF";

export const articles: Array<ArticleIF> = [
  {
    slug: "beautify_git_log",
    author: "Evan Charalampidis",
    date: "2023-08-06",
    title: "Make your git log look better using a single command",
    description:
      "APIs are mechanisms that enable two software components to communicate with each other using a set of definitions and protocols.",
  },
  {
    slug: "what_is_an_api",
    author: "Evan Charalampidis",
    date: "2023-08-05",
    title: "What Is An API (Application Programming Interface)?",
    description:
      "Are you tired of sifting through a bland and confusing Git commit history? There's a simple yet powerful command that can give your Git log a much-needed makeover, making it both visually appealing and informative.",
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
