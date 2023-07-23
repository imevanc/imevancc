import Link from "next/link";
import { classNames } from "@/helpers/classNames";
import { CardIF, CardLinkIF, CardTitleIF } from "@/interfaces/CardIF";

const Card: React.FC<CardIF> = ({
  as: Component = "div",
  className,
  children,
}) => (
  <Component
    className={classNames(
      className,
      "group relative flex flex-col items-start"
    )}
  >
    {children}
  </Component>
);

const CardLink: React.FC<CardLinkIF> = ({ children, href }) => (
  <>
    <div className="absolute -inset-x-4 -inset-y-6 z-0 scale-95 bg-zinc-50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 dark:bg-zinc-800/50 sm:-inset-x-6 sm:rounded-2xl" />
    <Link href={href}>
      <span className="absolute -inset-x-4 -inset-y-6 z-20 sm:-inset-x-6 sm:rounded-2xl" />
      <span className="relative z-10">{children}</span>
    </Link>
  </>
);

const CardTitle: React.FC<CardTitleIF> = ({
  as: Component = "h2",
  href,
  children,
}) => (
  <Component className="text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">
    {href ? <CardLink href={href}>{children}</CardLink> : children}
  </Component>
);

const CardNamespace = Object.assign(Card, {
  Link: CardLink,
  Tittle: CardTitle,
});

export { CardNamespace as Card };
