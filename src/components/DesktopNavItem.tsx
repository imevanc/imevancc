import Link from "next/link";
import { usePathname } from "next/navigation";
import { classNames } from "@/helpers/classNames";
import { ItemIF } from "@/interfaces/ItemIF";

export const DesktopNavItem: React.FC<ItemIF> = ({ href, children }) => {
  const isActive: boolean = usePathname() === href;

  return (
    <li>
      <Link
        href={href}
        className={classNames(
          "relative block px-3 py-2 transition",
          isActive
            ? "text-teal-500 dark:text-teal-400"
            : "hover:text-teal-500 dark:hover:text-teal-400"
        )}
      >
        {children}
        {isActive && (
          <span className="absolute inset-x-1 -bottom-px h-px bg-gradient-to-r from-teal-500/0 via-teal-500/40 to-teal-500/0 dark:from-teal-400/0 dark:via-teal-400/40 dark:to-teal-400/0" />
        )}
      </Link>
    </li>
  );
};
