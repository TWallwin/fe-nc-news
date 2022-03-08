import { getAllArticles } from "../../api";
import { useState, useEffect } from "react";
import ArticleCard from "./ArticleCard";
import Topics from "../TopicsBar";
export default function Articles() {
  const [allArticles, setAllArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  function CheckIfLoading() {
    if (isLoading) {
      return <h3 id="loading">Loading...</h3>;
    }
    return (
      <div className="cards">
        {allArticles.map((article) => {
          return <ArticleCard article={article} key={article.article_id} />;
        })}
      </div>
    );
  }
  useEffect(() => {
    setIsLoading(true);
    return getAllArticles().then((articles) => {
      setAllArticles(articles);
      setIsLoading(false);
    });
  }, []);

  return (
    <>
      <Topics />
      {CheckIfLoading()}
    </>
  );
}
