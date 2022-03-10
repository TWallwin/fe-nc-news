import { Link } from "react-router-dom";
import TopicsBar from "./TopicsBar";
import { useState } from "react";
export default function Header() {
  const [topic, setTopic] = useState(null);
  return (
    <header>
      <Link
        to="/"
        onClick={() => {
          setTopic(null);
        }}
      >
        <h1 id="home">NC-News</h1>
        <h1 id="title">Articles</h1>
      </Link>
      <TopicsBar topic={topic} setTopic={setTopic} />
    </header>
  );
}
