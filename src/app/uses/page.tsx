import type { NextPage } from "next/types";
import type { Metadata } from "next";

import { Card } from "@/components/Card";
import { Section } from "@/components/Section";
import { SimpleLayout } from "@/components/SimpleLayout";
import { Tool, ToolsSection } from "@/components/Tool";

export const metadata: Metadata = {
  title: "Uses - Evan Charalampidis",
  description: "Software, gadgets and other things I use.",
};

const Page: NextPage = () => (
  <SimpleLayout
    title="Software, gadgets and other things I use."
    intro="Make sure to check out uses.tech for a list of everyone's /uses pages!
    I change up things fairly often, so this page will serve as a living document and a place to point curious developers to when I get asked.
    If there is something missing shoot me a tweet @imevancc and I'll add it."
  >
    <div className="space-y-20">
      <ToolsSection title="Workstation">
        <Tool title="14” MacBook Pro, M2 Pro, 16GB RAM (2023)">
          I was using a 15” MacBook Pro, 2.6GHz 6-core Intel Core i7, 16GB RAM,
          prior to this and the difference is night and day.
        </Tool>
        <Tool title="Dell 24 Video Conferencing Monitor">
          Stunning screen quality & great connectivity.
        </Tool>
        <Tool title="Apple Magic Keyboard">
          Remarkably comfortable and precise typing experience.
        </Tool>
        <Tool title="MX MASTER 3S">
          It's an iconic mouse - seamlessly integrated into the Apple ecosystem
          for performance.
        </Tool>
      </ToolsSection>
      <ToolsSection title="Development tools">
        <Tool title="VS Code">
          I use the github theme and the following extensions - Live Share, Dev
          Containers, Docker, GitLens, Google Cloud Code, JavaScript and
          TypeScript Nightly, Jest Runner, Jest Snippets, Kubernetes, Prettier,
          Prisma, Yaml, Zoom Bar
        </Tool>
        <Tool title="MacOS terminal">
          I love oh-my-zsh with robbyrussell, git & zsh-autosuggestions.
        </Tool>
      </ToolsSection>
      <ToolsSection title="Design">
        <Tool title="Figma">I used Figma to design Pet-Pal</Tool>
      </ToolsSection>
      <ToolsSection title="Productivity">
        <Tool title="Alfred">
          It’s not the newest kid on the block but it’s still the fastest. The
          VS Code of the application launcher world.
        </Tool>
        <Tool title="Notes">
          Using a daily notes system instead of trying to keep things organized
          by topics has been super powerful for me.
        </Tool>
      </ToolsSection>
    </div>
  </SimpleLayout>
);

export default Page;
