import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { getAllArticles, getArticlesByTopic } from "../../api";
import ArticleCard from "./ArticleCard";

export default function Articles() {
  const { topic } = useParams();
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [sortBy, setsortBy] = useState("created_at");
  const [order, setOrder] = useState("DESC");
  const [articleError, setArticleError] = useState(false);

  useEffect(() => {
    if (topic) {
      getArticlesByTopic(topic, order, sortBy)
        .then((articlesFromApi) => {
          setArticles(articlesFromApi);
          setIsLoading(false);
        })
        .catch((err) => {
          setArticleError(err.message);
          setArticles([]);
          setIsLoading(false);
        });
    } else {
      getAllArticles(order, sortBy)
        .then((articlesFromApi) => {
          setArticles(articlesFromApi);

          setIsLoading(false);
        })
        .catch((err) => {
          setArticleError({ message: err.message });
          setArticles([]);
          setIsLoading(false);
        });
    }
  }, [topic, sortBy, order]);

  if (articleError) {
    return (
      <>
        <h1 className="error">{JSON.stringify(articleError)} - invalid path</h1>{" "}
        <Link to="/">
          {" "}
          <h1 className="error">Go Back!</h1>
        </Link>
      </>
    );
  }
  if (isLoading) {
    return <h3 id="loading">Loading...</h3>;
  }
  function toggleOrder() {
    if (order === "ASC") {
      setOrder("DESC");
    } else {
      setOrder("ASC");
    }
  }
  return (
    <>
      <div className="sort-div">
        <div className="sort-box">
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
          <button
            onClick={toggleOrder}
            className={
              order === "DESC" ? "order-button-down" : "order-button-up"
            }
          >
            {order}
          </button>
        </div>
      </div>
      <div className="cards">
        {articles.map((article) => {
          return <ArticleCard article={article} key={article.article_id} />;
        })}
      </div>
    </>
  );
}
