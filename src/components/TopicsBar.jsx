import { Link } from "react-router-dom";

export default function Topics(props) {
  const { topic } = props;

  return (
    <div id="topic-bar">
      <Link
        className={"coding" === topic ? "clicked-topic-link" : "topic-links"}
        to="/articles/coding"
      >
        Coding
      </Link>
      <Link
        className={"football" === topic ? "clicked-topic-link" : "topic-links"}
        to="/articles/football"
      >
        Football
      </Link>
      <Link
        className={"cooking" === topic ? "clicked-topic-link" : "topic-links"}
        to="/articles/cooking"
      >
        Cooking
      </Link>
    </div>
  );
}
