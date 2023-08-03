import { DesktopNavItem } from "./DesktopNavItem";

export const DesktopNavigation: React.FC<{ className: string }> = ({
  className,
}) => (
  <nav className={className}>
    <ul className="flex rounded-full bg-white/90 px-3 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10">
      <DesktopNavItem href="/about">About</DesktopNavItem>
      <DesktopNavItem href="/articles">Articles</DesktopNavItem>
      <DesktopNavItem href="/projects">Projects</DesktopNavItem>
      <DesktopNavItem href="/uses">Uses</DesktopNavItem>
      <DesktopNavItem href="/moments">Moments</DesktopNavItem>
    </ul>
  </nav>
);
