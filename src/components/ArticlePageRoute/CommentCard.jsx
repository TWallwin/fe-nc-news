export default function CommentCard({ comment }) {
  let date = new Date(comment.created_at);
  date = date.toDateString();
  return (
    <div className="comment-card">
      <p className="comment-body">{comment.body}</p>
      <p>{comment.author}</p>
      <div className="comment-card-info">
        <p>{date}</p>
        <span>{comment.votes}</span>
      </div>
    </div>
  );
}
