export interface ArticleLayoutIF {
  meta: { title: string; description: string; date: string; author: string };
  children: React.ReactNode;
  previousPathname: string;
}
