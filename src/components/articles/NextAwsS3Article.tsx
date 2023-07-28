import { ArticleLayout } from "@/components/ArticleLayout";

const meta = {
  date: "2022-04-19",
  title: "Next.js + AWS S3 Upload",
};

export const NextAwsS3Article: React.FC = () => (
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
    <div className="max-w-2xl">
      <h1 className="text-xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-2xl">
        🚀 Getting started
      </h1>
      <dl className="mt-2 text-base text-zinc-600 dark:text-zinc-400 space-y-4">
        <dt>
          - You need to sign up for a AWS account and - at the time that I'm
          writing this tutorial - you will be eligible for amazon's free tier.
          This is simply a period that you can use some of amazon web services'
          for free with some limitations. Please read more about it online.
        </dt>
        <dt>- You need to clone my repo,</dt>
        <dt className="flex justify-center font-semibold italic">
          git clone git@github.com:imevanc/nextjs-aws-s3.git
        </dt>
        <dt>
          create a dot env file in the src folder - where you will store the aws
          environment variables - and run
        </dt>
        <dt className="flex justify-center font-semibold italic">
          npm install
        </dt>
        <dt>
          - Given that you're all setup with the above steps, you will need to
          create a new IAM user on AWS. You have to search for IAM on AWS and
          navigate to the Users tab, please find a screenshot of this page
          below.
        </dt>
        <dt>
          <img
            className="flex justify-center"
            src="https://dev-to-uploads.s3.amazonaws.com/uploads/articles/0gic719xd3390nhfa8bi.png"
            alt="aws-iam-photo"
          />
        </dt>
        <dt>
          - Hit the Add users button and you will be redirected to a 3 steps
          process. You need to specify the user's details on step 1; please use
          your preferred name and select the "Provide user access to the AWS
          Management Console - optional" checkbox. When you will be prompted to
          respond to "Are you providing console access to a person?" please
          select "I want to create an IAM user". I have attached a screenshot of
          this step below, when you're ready please click the Next button.
        </dt>
        <dt>
          <img
            className="flex justify-center"
            src="https://dev-to-uploads.s3.amazonaws.com/uploads/articles/qo08g0iavheujk2gxjue.png"
            alt="aws-use-details-photo"
          />
        </dt>
        <dt>
          - The second step of the IAM user's creation allows you to set policy
          permissions to this user. You need to select "Attach policies
          directly" and search for "AmazonS3FullAccess", please select the
          checkbox of this policy before you continue. Please see the image
          below for reference and when you're ready hit the next button.
        </dt>
        <dt>
          <img
            className="flex justify-center"
            src="https://dev-to-uploads.s3.amazonaws.com/uploads/articles/og0zhaitwkt6g7zpkvqm.png"
            alt="aws-use-permissions-photo"
          />
        </dt>
        <dt>
          - The third step requests you to review your IAM user and by clicking
          next, you create it.
        </dt>
        <dt>
          - The final step gives you the{" "}
          <span className="font-semibold italic">Access Key ID</span> and the{" "}
          <span className="font-semibold italic">Secret Access Key</span>. You
          will need to save these two keys for the IAM User, because they will
          be used for programmatic access in the API Route. Please update your
          dot env file with these credentials as follows:
        </dt>{" "}
        <dt className="flex flex-col items-center font-semibold italic">
          <span>AWS_ACCESS_KEY_ID=....</span>
          <span> AWS_SECRET_ACCESS_KEY=....</span>
        </dt>
        <dt>
          - You need to create an S3 bucket for storing the image. Search on AWS
          for S3 and hit the create bucket button as you see below.
        </dt>
        <dt>
          <img
            className="flex justify-center"
            src="https://dev-to-uploads.s3.amazonaws.com/uploads/articles/ggguvxn0u4paoqvrnj63.png"
            alt="aws-s3-photo"
          />
        </dt>
        <dt>
          - Please choose your preferred bucket name and under the Object
          Ownership tab, select "ACLs enabled" & "Bucket owner preferred", as
          you can see below.
        </dt>
        <dt>
          - <span className="font-semibold italic">Important Note</span>: Your
          bucket needs to be created in the same region as your IAM user.
        </dt>
        <dt>
          <img
            className="flex justify-center"
            src="https://dev-to-uploads.s3.amazonaws.com/uploads/articles/9ntz3ov0933dcg03u6ve.png"
            alt="aws-s3-object-ownership-photo"
          />
        </dt>
        <dt>
          - Remember to unselect the{" "}
          <span className="font-semibold italic">block all public access</span>,
          otherwise your bucket won't be publicly available and your IAM user
          will receive{" "}
          <span className="font-semibold italic">403 unauthorized</span>.
        </dt>
        <dt>
          <img
            className="flex justify-center"
            src="https://dev-to-uploads.s3.amazonaws.com/uploads/articles/zek5pfdnvvpd1mbpm9td.png"
            alt="aws-s3-bucket-access-photo"
          />
        </dt>
        <dt>
          - You need to bring up your dot env file and update the name and the
          region of the bucket in it.
        </dt>
        <dt className="flex flex-col items-center font-semibold italic">
          <span>AWS_ACCESS_KEY_ID=....</span>
          <span> AWS_SECRET_ACCESS_KEY=....</span>
        </dt>
        <dt>
          - You can now hit the create bucket and you are almost ready to go.
          The last step is to update the CORS; please open your bucket, navigate
          to the permissions tab and scroll down until you reach the
          Cross-origin resource sharing (CORS) section. Please click the edit
          button and paste the following code in it. Save it and you're ready to
          run the application!
        </dt>
        <dt className="flex flex-col items-center font-semibold italic">
          <pre>
            {`[
  {
      AllowedHeaders: ["*"],
      AllowedMethods: ["GET", "PUT", "POST", "DELETE"],
      AllowedOrigins: ["*"],
      ExposeHeaders: [],
  }
]`}
          </pre>
        </dt>
        <dt>
          - You can find more information about how to run the demo on{" "}
          <a href="https://github.com/imevanc/nextjs-aws-s3">
            my nextjs-aws-s3 github repo
          </a>
        </dt>
      </dl>
    </div>
    <div className="max-w-2xl">
      <h1 className="text-xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-2xl">
        🏁 Conclusion
      </h1>
      <p className="mt-2 text-base text-zinc-600 dark:text-zinc-400">
        We did it! We created an IAM user an S3 bucket and we have managed to
        connect them to a Next.js application! If you have any question don't
        hesitate to reach out to me, cheers!
      </p>
      <span className="text-lg sm:text-xl font-semibold italic">Github:</span>{" "}
      <a href={"https://github.com/imevanc"}>@imevanc</a>
    </div>
  </ArticleLayout>
);
