import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getAllArticles, getArticlesByTopic } from "../../api";
import ArticleCard from "./ArticleCard";

export default function TopicArticles() {
  const { topic } = useParams();
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [sortBy, setsortBy] = useState("created_at");
  const [order, setOrder] = useState("DESC");
  useEffect(() => {
    if (topic) {
      getArticlesByTopic(topic, order, sortBy).then((articlesFromApi) => {
        setArticles(articlesFromApi);

        setIsLoading(false);
      });
    } else {
      getAllArticles(order, sortBy).then((articlesFromApi) => {
        setArticles(articlesFromApi);

        setIsLoading(false);
      });
    }
  }, [topic, sortBy, order]);

  if (isLoading) {
    return <h3 id="loading">Loading...</h3>;
  }

  return (
    <>
      <select
        id="topic-dropdown"
        onChange={(e) => {
          setsortBy(e.target.value);
        }}
        value={sortBy}
      >
        <option value="created_at">Date</option>
        <option value="comment_count">Comment Count</option>
        <option value="votes">Votes</option>
      </select>
      <select
        id="order-dropdown"
        onChange={(e) => {
          setOrder(e.target.value);
        }}
        value={order}
      >
        <option value="ASC">Asc</option>
        <option value="DESC">Desc</option>
      </select>
      <div className="cards">
        {articles.map((article) => {
          return <ArticleCard article={article} key={article.article_id} />;
        })}
      </div>
    </>
  );
}
