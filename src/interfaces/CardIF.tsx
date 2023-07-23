export interface CardIF {
  className: string;
  children: React.FC;
  as: React.ElementType;
}

export interface CardLinkIF {
  children: React.ReactNode;
  href: string;
}
