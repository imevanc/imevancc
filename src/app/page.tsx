import type { NextPage } from "next/types";
import { Container } from "@/components/Container";
import { SocialLink } from "@/components/SocialLink";
import {
  GitHubIcon,
  InstagramIcon,
  TwitterIcon,
} from "@/components/SocialIcons";
import { Newsletter } from "@/components/Newsletter";
import { Resume } from "@/components/Resume";

const Home: NextPage = () => {
  return (
    <>
      <Container className="mt-9">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            Software Developer, Outdoor Lover, and Amateur Photographer
          </h1>
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            I'm Evan, a software developer based in the UK. I build accessible
            and inclusive products and digital experiences for the web. My
            passion is about frontend technologies and making the developer and
            user experience better. When I'm not working, I enjoy doing things
            with my dog, such as training him for scent detection, hiking, or
            paddleboarding.
          </p>
          <div className="mt-6 flex gap-6">
            <SocialLink
              href="https://twitter.com/imevancc"
              aria-label="Follow on Twitter"
              icon={TwitterIcon}
            />
            <SocialLink
              href="https://www.instagram.com/imevancc/"
              aria-label="Follow on Instagram"
              icon={InstagramIcon}
            />
            <SocialLink
              href="https://github.com/imevanc"
              aria-label="Follow on GitHub"
              icon={GitHubIcon}
            />
          </div>
        </div>
      </Container>
      <Container className="mt-24 md:mt-28">
        <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
          {/* <div className="flex flex-col gap-16">
            {articles.map((article) => (
              <Article key={article.slug} article={article} />
            ))}
          </div> */}
          <div className="space-y-10 lg:pl-16 xl:pl-24">
            <Newsletter />
            <Resume />
          </div>
        </div>
      </Container>
    </>
  );
};

export default Home;
