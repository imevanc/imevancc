import type { NextPage, Metadata } from "next/types";
import Image from "next/image";

import { Container } from "@/components/Container";
import logoImEvanC from "@/images/logos/avatar-favicon.png";
import {
  css3,
  html5,
  tailwindcss,
  javascript,
  typescript,
  aws,
  node,
  react,
  gcp,
  postgres,
  jest,
  mui,
  storybook,
  kubernetes,
} from "@/images/tools";

export const metadata: Metadata = {
  title: "About - Evan Charalampidis",
  description: "About me.",
};

const Page: NextPage = () => (
  <Container className="mt-16 sm:mt-32">
    <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12 place-items-center">
      <div className="place-items-center lg:pl-20">
        <div className="max-w-xs px-2.5 lg:max-w-none">
          <Image
            src={logoImEvanC}
            alt="avatar"
            sizes="(min-width: 1024px) 32rem, 20rem"
            className="aspect-square rotate-6 rounded-full bg-zinc-100 object-cover dark:bg-zinc-800"
          />
        </div>
        <hr className="mt-10 max-w-xs px-2.5 lg:max-w-none text-zinc-600 dark:text-zinc-400" />
        <hr className="mb-6 mt-2 max-w-xs px-2.5 lg:max-w-none text-zinc-600 dark:text-zinc-400" />

        <div className="mt-6 grid grid-cols-5 gap-8 max-w-xs px-2.5 lg:max-w-none text-base text-zinc-600 dark:text-zinc-400">
          <Image src={css3} alt="css3" className="h-8 w-8" unoptimized />
          <Image src={html5} alt="html5" className="h-8 w-8" unoptimized />
          <Image
            src={tailwindcss}
            alt="tailwindcss"
            className="h-8 w-8"
            unoptimized
          />
          <Image
            src={javascript}
            alt="javascript"
            className="h-8 w-8"
            unoptimized
          />
          <Image
            src={typescript}
            alt="typescript"
            className="h-8 w-8"
            unoptimized
          />
          <Image src={aws} alt="aws" className="h-8 w-8" unoptimized />
          <Image src={node} alt="node" className="h-8 w-8" unoptimized />
          <Image src={react} alt="react" className="h-8 w-8" unoptimized />
          <Image src={gcp} alt="gcp" className="h-8 w-8" unoptimized />
          <Image
            src={postgres}
            alt="postgres"
            className="h-8 w-8"
            unoptimized
          />
          <Image src={jest} alt="jest" className="h-8 w-8" unoptimized />
          <Image src={mui} alt="mui" className="h-8 w-8" unoptimized />
          <Image
            src={storybook}
            alt="storybook"
            className="h-8 w-8"
            unoptimized
          />
          <Image
            src={kubernetes}
            alt="kubernetes"
            className="h-8 w-8"
            unoptimized
          />
        </div>
      </div>
      <div className="lg:order-first lg:row-span-2">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
          Hello world, <br />
          Evan here.
        </h1>
        <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
          <p>
            My journey into the world of software development began with a
            first-class honours degree in engineering from the University of
            Manchester. The cool thing about building website interfaces and
            making them work just right hooked me instantly.
          </p>
          <p>
            I'm a fullstack developer, and I spend a lot of time with React.js
            and Node.js both in JavaScript & TypeScript. What really clicks with
            me is how React lets me piece things together in a way that just
            feels right. It's like a superpower – I take what businesses want
            and turn it into real, working code that makes interfaces look and
            feel amazing!
          </p>
          <p>
            I'm a big believer in testing everything from start to finish. I've
            been hands-on with projects using tools like Cypress and Playwright.
            These tools make sure everything runs smoothly on different browsers
            and setups. It's like putting armor on your app to ensure it's
            rock-solid before it goes live.
          </p>
          <p>
            When I'm not working, I'm actively contributing to my open-source
            project called "Pet Pal." Rooted in the dog industry, this project
            aims to forge connections among dog owners, trainers, sitters, and
            suppliers. By fostering collaboration and streamlining interactions,
            "Pet Pal" seeks to create a comprehensive ecosystem that caters to
            the diverse needs of dog enthusiasts.
          </p>
          <p>
            Thank you for visiting my personal website, and I look forward to
            the possibility of collaboration and shared growth in the dynamic
            world of technology.
          </p>
        </div>
      </div>
    </div>
  </Container>
);

export default Page;
