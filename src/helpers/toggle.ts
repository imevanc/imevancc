import { disableTransitions } from "./disableTransitions";

export const toggle = (): void => {
  disableTransitions();

  const darkModeMediaQuery: MediaQueryList = window.matchMedia(
    "(prefers-color-scheme: dark)"
  );
  const isSystemDarkMode: boolean = darkModeMediaQuery.matches;
  const isDarkMode: boolean = document.documentElement.classList.toggle("dark");

  if (isDarkMode === isSystemDarkMode) {
    delete window.localStorage.isDarkMode;
  } else {
    window.localStorage.isDarkMode = isDarkMode;
  }
};
