import { classNames } from "@/helpers/classNames";
import { CardIF } from "@/interfaces/CardIF";

export const Card: React.FC<CardIF> = ({
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
