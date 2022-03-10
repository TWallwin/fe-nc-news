export default function ArticleVotes(props) {
  return (
    <div className="article-votes">
      <button>+</button>
      <button>-</button>
      <span className="vote-count">{props.votes}</span>
    </div>
  );
}
