import { useState } from "react";
import { updateArticleVotes } from "../../api";
export default function ArticleVotes(props) {
  const [change, setChange] = useState(0);
  const [error, setError] = useState("");
  function voteButtonClicked(inc) {
    setChange((currChange) => {
      return currChange + inc;
    });
    updateArticleVotes(props.articleId, inc).catch(() => {
      setError("article votes not updated");
      setChange(0);
    });
  }
  return (
    <div className="article-votes">
      <button
        className="vote-button"
        disabled={change === 1}
        onClick={() => {
          voteButtonClicked(1);
        }}
      >
        +
      </button>
      {error.toString()}
      <button
        className="vote-button"
        disabled={change === -1}
        onClick={() => {
          voteButtonClicked(-1);
        }}
      >
        -
      </button>
      {error.toString()}
      <span className="vote-count">{(props.votes + change).toString()}</span>
    </div>
  );
}
