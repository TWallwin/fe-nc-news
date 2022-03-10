import { Link } from "react-router-dom";

export default function TopicsBar({ topic, setTopic }) {
  return (
    <div id="topic-bar">
      {["coding", "football", "cooking"].map((str, index) => {
        return (
          <Link
            key={index}
            className={str === topic ? "clicked-topic-link" : "topic-links"}
            to={`/articles/${str}`}
            onClick={() => {
              setTopic(str);
            }}
          >
            {str}
          </Link>
        );
      })}
    </div>
  );
}
