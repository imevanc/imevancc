import { formatDate } from "@/helpers/formatDate";
import { Card } from "./Card";

export const Article: React.FC<{ article: any }> = ({ article }) => (
  <Card as="article">
    <Card.Title href={`/articles/${article.slug}`}>{article.title}</Card.Title>
    <Card.Eyebrow as="time" dateTime={article.date} decorate>
      {formatDate(article.date)}
    </Card.Eyebrow>
    <Card.Description>{article.description}</Card.Description>
    <Card.Cta>Read article</Card.Cta>
  </Card>
);
