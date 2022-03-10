import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getAllArticles, getArticlesByTopic } from "../../api";
import ArticleCard from "./ArticleCard";

export default function TopicArticles() {
  const { topic } = useParams();
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [topicSort, setTopicSort] = useState("date");
  const [order, setOrder] = useState("");
  useEffect(() => {
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
      <select
        id="topic-dropdown"
        onChange={(e) => {
          setTopicSort(e.target.value);
        }}
        value={topicSort}
      >
        <option value="date">Date</option>
        <option value="comments">Comment Count</option>
        <option value="votes">Votes</option>
      </select>
      <select id="order-dropdown">
        <option value="asc">Asc</option>
        <option value="desc">Desc</option>
      </select>
      <div className="cards">
        {articles.map((article) => {
          return <ArticleCard article={article} key={article.article_id} />;
        })}
      </div>
    </>
  );
}
