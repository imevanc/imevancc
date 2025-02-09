"use client";

import type {NextPage} from "next/types";
import {Container} from "@/components/Container";
import {SocialLink} from "@/components/SocialLink";
import {DevToIcon, GitHubIcon, InstagramIcon, TwitterIcon,} from "@/components/SocialIcons";
import {Resume} from "@/components/Resume";
import {Article} from "@/components/Article";
import {articles} from "@/data/articles";

const Home: NextPage = () => (
    <>
        <Container className="mt-9">
            <div className="max-w-2xl mx-auto my-8 bg-blue-50 p-4 rounded-lg border border-blue-200">
                <div className="flex flex-col gap-4">
                    <p className="text-gray-700">
                        This website is no longer actively maintained. To stay updated or get in touch, please connect
                        with me on:
                    </p>

                    <div className="flex flex-wrap gap-4 items-center">
                        <a
                            href="https://bsky.app/profile/imevanc.bsky.social"
                            className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                        >
                            <span className="font-medium">Bluesky</span>
                        </a>

                        <a
                            href="https://www.linkedin.com/in/evan-charalampidis-591343296/"
                            className="flex items-center gap-2 px-4 py-2 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition-colors"
                        >
                            {/* LinkedIn icon shape in SVG */}
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path
                                    d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                            </svg>
                            <span className="font-medium">LinkedIn</span>
                        </a>

                        <a
                            href="https://github.com/imevanc"
                            className="flex items-center gap-2 px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-colors"
                        >
                            {/* GitHub icon shape in SVG */}
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path
                                    d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                            </svg>
                            <span className="font-medium">GitHub</span>
                        </a>
                    </div>
                </div>
            </div>
            <div className="max-w-2xl">
                <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
                    Software Developer, Outdoor Lover, and Amateur Photographer
                </h1>
                <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
                    I'm Evan, a software developer based in the UK. I build accessible and
                    inclusive products and digital experiences for the web. My passion is
                    about frontend technologies and making the developer and user
                    experience better. When I'm not working, I enjoy doing things with my
                    dog, such as training him for scent detection, hiking, or
                    paddleboarding.
                </p>
                <div className="mt-6 flex gap-6">
                    {" "}
                    <SocialLink
                        href="https://github.com/imevanc"
                        aria-label="Follow on GitHub"
                        icon={GitHubIcon}
                    />
                    <SocialLink
                        href="https://dev.to/imevanc"
                        aria-label="Follow on dev.to"
                        icon={DevToIcon}
                    />
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
                </div>
            </div>
        </Container>
        <Container className="mt-24 md:mt-28">
            <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
                <div className="flex flex-col gap-16">
                    {articles.map((article) => (
                        <Article key={article.slug} article={article}/>
                    ))}
                </div>

                <div className="space-y-10 lg:pl-16 xl:pl-24">
                    <Resume/>
                </div>
            </div>
        </Container>
    </>
);

export default Home;
