import { classNames } from "@/helpers/classNames";

export const Prose = ({ children, className }) => (
  <div className={classNames(className, "prose dark:prose-invert")}>
    {children}
  </div>
);
