export const disableTransitions = (): void => {
  document.documentElement.classList.add("[&_*]:!transition-none");
  window.setTimeout(
    (): void =>
      document.documentElement.classList.remove("[&_*]:!transition-none"),
    0
  );
};
