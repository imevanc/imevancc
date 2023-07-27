"use client";

import { ArticleLayout } from "@/components/ArticleLayout";
import { Container } from "@/components/Container";

const meta = {
  author: "Evan Charalampidis",
  date: "2022-04-19",
  title: "Next.js + AWS S3 Upload",
  description:
    "An example of a Next.js application allowing you to upload photos to an Amazon Web Services S3 storage bucket.",
};

const Page = () => (
  <ArticleLayout meta={meta}>
    <div className="max-w-2xl">
      <h1 className="text-xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-2xl">
        DISCLAIMER
      </h1>
      <p className="mt-2 text-base text-zinc-600 dark:text-zinc-400">
        If you follow this tutorial, you might end up paying for AWS services.
      </p>
    </div>
    <div className="max-w-2xl">
      <h1 className="text-xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-2xl">
        👋 Introduction
      </h1>
      <p className="mt-2 text-base text-zinc-600 dark:text-zinc-400">
        Let's make a simple Next.js application allowing you to upload photos to
        an Amazon Web Services S3 storage bucket. This tutorial is focused on
        how to create an IAM user and a storage bucket on Amazon Web Services,
        so I have included all the code on my{" "}
        <a href={"https://github.com/imevanc/nextjs-aws-s3"}>
          nextjs-aws-s3 github repo
        </a>
        . It's Next.js in Typescript and I have used TailwindCSS for styling.
      </p>
    </div>
    <div className="max-w-2xl">
      <h1 className="text-xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-2xl">
        Before we start, please find below some definitions so we are all under
        the same umbrella.
      </h1>
      <dl className="mt-2 text-base text-zinc-600 dark:text-zinc-400">
        <dt>
          <a href={"https://nextjs.org/"}>Next.js</a> is an open source
          framework that allows you to create{" "}
          <span className="font-semibold">full-stack web applications</span>.
        </dt>
        <dt>
          <a href={"https://aws.amazon.com/s3/"}>Amazon S3</a> is an object
          storage built to retrieve any amount of data from anywhere in the
          world.
        </dt>
        <dt>
          <a href={"https://aws.amazon.com/iam/"}>
            AWS Identity and Access Management (IAM)
          </a>{" "}
          securely manage identities and access to AWS services and resources.
        </dt>
        <dt>
          <a href={"https://tailwindcss.com/"}>TailwindCSS</a> is a
          utility-first CSS framework packed with classes.
        </dt>
      </dl>
    </div>
  </ArticleLayout>
);

export default Page;
