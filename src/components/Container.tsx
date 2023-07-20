import { forwardRef } from "react";
import { classNames } from "@/helpers/classNames";
import { ContainerIF } from "@/interfaces/ContainerIF";

const OuterContainer = forwardRef<HTMLDivElement, ContainerIF>(
  ({ className, children, style, ...props }, ref) => (
    <div ref={ref} className={classNames("sm:px-8", className)} {...props}>
      <div className="mx-auto max-w-7xl lg:px-8">{children}</div>
    </div>
  )
);

const InnerContainer = forwardRef<HTMLDivElement, ContainerIF>(
  ({ className, children, ...props }, ref) => (
    <div
      ref={ref}
      className={classNames("relative px-4 sm:px-8 lg:px-12", className)}
      {...props}
    >
      <div className="mx-auto max-w-2xl lg:max-w-5xl">{children}</div>
    </div>
  )
);

const Container = forwardRef<HTMLDivElement, ContainerIF>(
  ({ children, ...props }, ref) => (
    <OuterContainer ref={ref} {...props}>
      <InnerContainer ref={ref} {...props}>
        {children}
      </InnerContainer>
    </OuterContainer>
  )
);

const ContainerNamespace = Object.assign(Container, {
  Outer: OuterContainer,
  Inner: InnerContainer,
});

export { ContainerNamespace as Container };
