import { classNames } from "@/helpers/classNames";
import { ProseIF } from "@/interfaces/ProseIF";

export const Prose: React.FC<ProseIF> = ({ children, className }) => (
  <div className={classNames(className, "prose dark:prose-invert")}>
    {children}
  </div>
);
