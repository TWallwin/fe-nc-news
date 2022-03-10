import { useState } from "react";

export default function ArticleVotes(props) {
  const [change, setChange] = useState(0);

  function voteButtonClicked(inc) {
    return setChange((currChange) => {
      return currChange + inc;
    });
  }
  return (
    <div className="article-votes">
      <button
        onClick={() => {
          voteButtonClicked(1);
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          voteButtonClicked(-1);
        }}
      >
        -
      </button>
      <span className="vote-count">{props.votes + change}</span>
    </div>
  );
}
