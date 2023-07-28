import Link from "next/link";

export const FooterLink: React.FC<{
  href: string;
  children: React.ReactNode;
}> = ({ href, children }) => (
  <Link
    href={href}
    className="transition hover:text-teal-500 dark:hover:text-teal-400"
  >
    {children}
  </Link>
);
