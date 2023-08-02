import type { NextPage, Metadata } from "next/types";

import { SimpleLayout } from "@/components/SimpleLayout";
import { moments } from "@/data/moments";
import { Card } from "@/components/Card";

export const metadata: Metadata = {
  title: "Photography - Evan Charalampidis",
  description: "A glance at my adventurous.",
};

const Page: NextPage = () => (
  <SimpleLayout
    title="A glance at my adventurous."
    intro="
    In hiking, paddleboarding, and camping, I discover the essence of adventure. Trails unveil nature's beauty, paddleboarding offers serene waters, and camping under the stars brings tranquility. These pursuits create an unbreakable bond with the outdoors, etching memories of freedom and discovery deep within my soul."
  >
    <ul
      role="list"
      className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3"
    >
      {moments.map((moment) => (
        <Card as="li" key={moment.title}>
          <img
            className="aspect-[3/2] rounded-2xl object-cover relative z-10 flex items-center justify-center bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0"
            src={moment.url}
            alt="image"
          />
          <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
            <Card.Link href="#">{moment.title}</Card.Link>
          </h2>
          <Card.Description>{moment.description}</Card.Description>
        </Card>
      ))}
    </ul>
  </SimpleLayout>
);
export default Page;
