import type { Metadata } from "next";
import Script from "next/script";

import "focus-visible";

import "./globals.css";
import { Header } from "@/components/Header";

export const metadata: Metadata = {
  title: "Evan - Software Engineer, Outdoor Lover, and Amateur Photographer",
  description:
    "I'm Evan, a software developer based in the UK. I build accessible and inclusive products and digital experiences for the web. My passion is about frontend technologies and making the developer and user experience better. When I'm not working, I enjoy doing things with my dog, such as training him for scent detection, hiking, or paddleboarding.",
  icons: {
    icon: {
      url: "/avatar-favicon.png",
      type: "image/png",
    },
    shortcut: { url: "/avatar-favicon.png", type: "image/png" },
  },
};

const toggleMode = `
  let darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)')

  updateMode()
  darkModeMediaQuery.addEventListener('change', updateModeWithoutTransitions)
  window.addEventListener('storage', updateModeWithoutTransitions)

  function updateMode() {
    let isSystemDarkMode = darkModeMediaQuery.matches
    let isDarkMode = window.localStorage.isDarkMode === 'true' || (!('isDarkMode' in window.localStorage) && isSystemDarkMode)

    if (isDarkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }

    if (isDarkMode === isSystemDarkMode) {
      delete window.localStorage.isDarkMode
    }
  }

  function disableTransitionsTemporarily() {
    document.documentElement.classList.add('[&_*]:!transition-none')
    window.setTimeout(() => {
      document.documentElement.classList.remove('[&_*]:!transition-none')
    }, 0)
  }

  function updateModeWithoutTransitions() {
    disableTransitionsTemporarily()
    updateMode()
  }
`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <Script dangerouslySetInnerHTML={{ __html: toggleMode }} />{" "}
      </head>
      <body className="flex h-full flex-col bg-zinc-100 dark:bg-black">
        <div className="fixed inset-0 flex justify-center sm:px-8">
          <div className="flex w-full max-w-7xl lg:px-8">
            <div className="w-full bg-white ring-1 ring-zinc-100 dark:bg-zinc-900 dark:ring-zinc-300/20" />
          </div>
        </div>
        <div className="relative">
          <Header />
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}
