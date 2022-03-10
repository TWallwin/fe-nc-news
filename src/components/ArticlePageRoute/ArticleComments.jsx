import { useEffect, useState } from "react";
import { getArticleComments } from "../../api";
import CommentCard from "./CommentCard";
import NewComment from "./NewComment";

export default function Comments({ articleId }) {
  const [comments, setComments] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  function togglePopup() {
    setIsOpen(!isOpen);
  }
  useEffect(() => {
    return getArticleComments(articleId).then((resComments) => {
      setComments(resComments);
    });
  }, [articleId]);

  return (
    <div className="comments">
      <div className="comments-heading">
        <h1>Comments</h1>
        <button
          className="create-comment-button"
          onClick={() => {
            togglePopup();
          }}
        >
          New Comment
        </button>
      </div>
      {isOpen && <NewComment handleClose={togglePopup} />}
      {comments.map((comment, index) => {
        return <CommentCard comment={comment} key={index} />;
      })}
    </div>
  );
}
