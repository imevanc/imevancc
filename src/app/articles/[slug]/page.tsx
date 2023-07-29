"use client";

import type { NextPage } from "next/types";
import { usePathname } from "next/navigation";
import { NextAwsS3Article } from "@/components/articles/NextAwsS3Article";

const Page: NextPage = () => {
  const pathname = usePathname();
  switch (pathname) {
    case "/articles/nextjs_aws_s3_upload":
    default:
      return <NextAwsS3Article />;
  }
};

export default Page;
