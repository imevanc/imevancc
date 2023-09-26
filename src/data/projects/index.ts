import { ProjectIF } from "@/interfaces/ProjectIF";
import logoPetPal from "@/images/logos/pet-pal.svg";
import logoLinkage from "@/images/logos/linkage.svg";
import logoNextjsAwsS3 from "@/images/logos/nextjs-aws-s3.svg";
import logoImEvanC from "@/images/logos/avatar-favicon.png";
import logoFastify from "@/images/logos/fastify.svg";

export const projects: Array<ProjectIF> = [
  {
    name: "Fastify-TS-Mongo-Starter",
    description: "This is a Fastify with Mongo starter project in TypeScript.",
    link: {
      href: "https://github.com/imevanc/fastify-typescript-mongo-starter",
      label: "fastify-ts-mongo",
    },
    logo: logoFastify,
  },
  {
    name: "ImEvanC",
    description:
      "My personal website is a Next.js project in TypeScript with TailwindCSS for styling.",
    link: {
      href: "https://github.com/imevanc/imevancc",
      label: "imevanc",
    },
    logo: logoImEvanC,
  },
  {
    name: "Pet-Pal",
    description:
      "Our mission is to connect the different parts of the dog industry in one place.",
    link: { href: "https://github.com/imevanc/pet-pal", label: "pet-pal" },
    logo: logoPetPal,
  },
  {
    name: "Next.js with AWS S3",
    description:
      "An example of a Next.js application allowing you to upload photos to an Amazon Web Services S3 storage bucket.",
    link: {
      href: "https://github.com/imevanc/nextjs-aws-s3",
      label: "nextjs-aws-s3",
    },
    logo: logoNextjsAwsS3,
  },
  {
    name: "Linkage",
    description:
      "LinkAge is an app aiming to helps connect isolated elderly individuals with volunteers. It was created as part of the graduation project - Team Reactors.",
    link: { href: "https://github.com/imevanc/linkage", label: "linkage" },
    logo: logoLinkage,
  },
];
