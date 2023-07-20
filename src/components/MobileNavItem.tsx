import { Popover } from "@headlessui/react";
import Link from "next/link";
import { MobileNavItemIF } from "@/interfaces/MobileNavItemIF";

export const MobileNavItem: React.FC<MobileNavItemIF> = ({
  href,
  children,
}) => (
  <li>
    <Popover.Button as={Link} href={href} className="block py-2">
      {children}
    </Popover.Button>
  </li>
);
