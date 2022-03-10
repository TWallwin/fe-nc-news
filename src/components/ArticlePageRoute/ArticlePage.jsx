import ArticleCard from "../ArticlesRoute/ArticleCard";
import ArticleComments from "./ArticleComments";
import { getArticleById } from "../../api";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
export default function ArticlePage() {
  const { id } = useParams();
  const [article, setArticle] = useState({});
  useEffect(() => {
    getArticleById(id).then((resArticle) => {
      setArticle(resArticle);
    });
  }, [id]);
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
