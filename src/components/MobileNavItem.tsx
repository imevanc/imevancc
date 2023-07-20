import { Popover } from "@headlessui/react";
import Link from "next/link";
import { ItemIF } from "@/interfaces/ItemIF";

export const MobileNavItem: React.FC<ItemIF> = ({ href, children }) => (
  <li>
    <Popover.Button as={Link} href={href} className="block py-2">
      {children}
    </Popover.Button>
  </li>
);
