import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getAllArticles, getArticlesByTopic } from "../../api";
import ArticleCard from "./ArticleCard";
export default function TopicArticles() {
  const { topic } = useParams();
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    if (topic) {
      getArticlesByTopic(topic).then((articlesFromApi) => {
        setArticles(articlesFromApi);

        setIsLoading(false);
      });
    } else {
      getAllArticles().then((articlesFromApi) => {
        setArticles(articlesFromApi);
        setIsLoading(false);
      });
    }
  }, [topic]);

  if (isLoading) {
    return <h3 id="loading">Loading...</h3>;
  }

  return (
    <>
      <div className="cards">
        {articles.map((article) => {
          return <ArticleCard article={article} key={article.article_id} />;
        })}
      </div>
    </>
  );
}
