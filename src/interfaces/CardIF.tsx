export interface CardIF {
  className: string;
  children: React.FC;
  as?: React.ElementType;
}

export interface CardLinkIF {
  children: React.ReactNode;
  href: string;
}

export interface CardTitleIF {
  children: React.ReactNode;
  href?: string;
  as?: React.ElementType;
}

export interface CardDescriptionIF {
  children: React.ReactNode;
}

export interface CardCtaIF {
  children: React.ReactNode;
}

export interface CardEyebrowIF {
  className: string;
  children: React.FC;
  as?: React.ElementType;
  decorate?: boolean;
}
