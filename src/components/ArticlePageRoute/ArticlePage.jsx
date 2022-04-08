import ArticleCard from "../ArticlesRoute/ArticleCard";
import ArticleComments from "./ArticleComments";
import { getArticleById } from "../../api";
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
export default function ArticlePage() {
  const { id } = useParams();
  const [article, setArticle] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [articleError, setArticleError] = useState(false);

  useEffect(() => {
    getArticleById(id)
      .then((resArticle) => {
        setArticle(resArticle);
        setIsLoading(false);
      })
      .catch((err) => {
        setArticleError(err);
        setArticle([]);
        setIsLoading(false);
      });
  }, [id]);
  if (articleError) {
    if (articleError.message.charAt(articleError.message.length - 1) === "4") {
      return (
        <div className="error-box">
          <h1 className="error">
            {JSON.stringify(articleError.message)} - not found
          </h1>{" "}
          <Link to="/">
            {" "}
            <h1 className="error link">Go Back!</h1>
          </Link>
        </div>
      );
    }
    return (
      <div className="error-box">
        <h1 className="error">
          {JSON.stringify(articleError.message)} - invalid path
        </h1>{" "}
        <Link to="/">
          {" "}
          <h1 className="error link">Go Back!</h1>
        </Link>
      </div>
    );
  }
  if (isLoading) {
    return <h3 id="loading">Loading...</h3>;
  }
  return (
    <div className="article-page">
      <div className="article">
        <div className="article-header">
          <ArticleCard article={article} />
        </div>
        <div className="article-body">{article.body}</div>
        <ArticleComments articleId={id} />
      </div>
    </div>
  );
}
