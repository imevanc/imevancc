"use client";

import type { NextPage } from "next/types";
import { usePathname } from "next/navigation";
import {
  NextAwsS3,
  WhatIsAnAPI,
  BeautifyGitLog,
  ReactStateVsContext,
} from "@/components/articles";

const Page: NextPage = () => {
  const pathname = usePathname();
  switch (pathname) {
    case "/articles/nextjs_aws_s3_upload":
    default:
      return <NextAwsS3 />;
    case "/articles/what_is_an_api":
      return <WhatIsAnAPI />;
    case "/articles/beautify_git_log":
      return <BeautifyGitLog />;
    case "/articles/react_state_vs_context":
      return <ReactStateVsContext />;
  }
};

export default Page;
