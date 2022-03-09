import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getArticlesByTopic } from "../../api";
import ArticleCard from "./ArticleCard";
import Topics from "../TopicsBar";
export default function TopicArticles() {
  const { topic } = useParams();
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getArticlesByTopic(topic).then((articlesFromApi) => {
      setArticles(articlesFromApi);
      setIsLoading(false);
    });
  }, [topic]);

  if (isLoading) {
    <Topics topic={topic} />;
    return <h3 id="loading">Loading...</h3>;
  }

  return (
    <>
      <Topics topic={topic} />;
      <div className="cards">
        {articles.map((article) => {
          return <ArticleCard article={article} key={article.article_id} />;
        })}
      </div>
    </>
  );
}
