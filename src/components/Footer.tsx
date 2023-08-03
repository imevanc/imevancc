import { Container } from "@/components/Container";
import { FooterLink } from "./FooterLink";

export const Footer: React.FC = () => (
  <footer className="mt-32">
    <Container.Outer>
      <div className="border-t border-zinc-100 pb-16 pt-10 dark:border-zinc-700/40">
        <Container.Inner>
          <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-1 text-sm font-medium text-zinc-800 dark:text-zinc-200">
              <FooterLink href="/about">About</FooterLink>
              <FooterLink href="/articles">Articles</FooterLink>
              <FooterLink href="/projects">Projects</FooterLink>
              <FooterLink href="/uses">Uses</FooterLink>
              <FooterLink href="/moments">Moments</FooterLink>
            </div>
            <p className="text-sm text-zinc-400 dark:text-zinc-500">
              &copy; {new Date().getFullYear()} Evan Charalampidis. All rights
              reserved.
            </p>
          </div>
        </Container.Inner>
      </div>
    </Container.Outer>
  </footer>
);
