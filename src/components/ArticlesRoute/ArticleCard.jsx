import ArticleVotes from "./ArticleVotes";
import { Link } from "react-router-dom";

export default function ArticleCard({ article }) {
  let date = new Date(article.created_at);
  date = date.toDateString();
  return (
    <div className="article-card">
      <Link className="card-header" to="/article">
        <h3>{article.title}</h3>
      </Link>
      <div className="card-info">
        <p>
          {article.author} || {article.topic}
        </p>
        <p>{date}</p>
        <ArticleVotes votes={article.votes} />
      </div>
    </div>
  );
}
