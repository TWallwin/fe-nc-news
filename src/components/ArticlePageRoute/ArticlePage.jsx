import ArticleCard from "../ArticlesRoute/ArticleCard";
import ArticleComments from "./ArticleComments";
import { getArticleById } from "../../api";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
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
        setArticleError(err.message);
        setArticle([]);
        setIsLoading(false);
      });
  }, [id]);
  if (articleError) {
    return (
      <h1 className="error">{JSON.stringify(articleError)} - invalid path</h1>
    );
  }
  if (isLoading) {
    return <h3 id="loading">Loading...</h3>;
  }
  return (
    <>
      <div className="article">
        <ArticleCard article={article} />
        <div className="article-body">{article.body}</div>
        <ArticleComments articleId={id} />
      </div>
    </>
  );
}
