import { Card } from "./Card";
import { Section } from "./Section";

export const ToolsSection: React.FC<{
  children: React.ReactNode;
  title: string;
}> = ({ children, title }) => (
  <Section title={title}>
    <ul role="list" className="space-y-16">
      {children}
    </ul>
  </Section>
);

export const Tool: React.FC<{
  children: React.ReactNode;
  title: string;
  href?: string;
}> = ({ title, href, children }) => (
  <Card as="li">
    <Card.Title as="h3" href={href}>
      {title}
    </Card.Title>
    <Card.Description>{children}</Card.Description>
  </Card>
);
