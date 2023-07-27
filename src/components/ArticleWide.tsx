import { ArticleIF } from "@/interfaces/ArticleIF";
import { Card } from "./Card";
import { formatDate } from "@/helpers/formatDate";

export const ArticleWide: React.FC<{ article: ArticleIF }> = ({ article }) => (
  <article className="md:grid md:grid-cols-4 md:items-baseline">
    <Card className="md:col-span-3">
      <Card.Title href={`/articles/${article.slug}`}>
        {article.title}
      </Card.Title>
      <Card.Eyebrow
        as="time"
        dateTime={article.date}
        className="md:hidden"
        decorate
      >
        {formatDate(article.date)}
      </Card.Eyebrow>
      <Card.Description>{article.description}</Card.Description>
      <Card.Cta>Read article</Card.Cta>
    </Card>
    <Card.Eyebrow
      as="time"
      dateTime={article.date}
      className="mt-1 hidden md:block"
    >
      {formatDate(article.date)}
    </Card.Eyebrow>
  </article>
);
