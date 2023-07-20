import Link from "next/link";
import Image from "next/image";
import { classNames } from "@/helpers/classNames";
import { AvatarIF } from "@/interfaces/AvatarIF";

export const Avatar: React.FC<AvatarIF> = ({
  large = false,
  className,
  ...props
}) => (
  <Link
    href="/"
    aria-label="Home"
    className={classNames(className, "pointer-events-auto")}
    {...props}
  >
    <Image
      src={avatarImage}
      alt=""
      sizes={large ? "4rem" : "2.25rem"}
      className={classNames(
        "rounded-full bg-zinc-100 object-cover dark:bg-zinc-800",
        large ? "h-16 w-16" : "h-9 w-9"
      )}
      priority
    />
  </Link>
);
