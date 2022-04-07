import { useEffect, useState } from "react";
import { getArticleComments } from "../../api";
import CommentCard from "./CommentCard";
import NewComment from "./NewComment";

export default function Comments({ articleId }) {
  const [comments, setComments] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [commentPosted, setCommentPosted] = useState(true);
  function togglePopup() {
    setIsOpen(!isOpen);
  }
  useEffect(() => {
    if (commentPosted) {
      return getArticleComments(articleId).then((resComments) => {
        setCommentPosted(false);
        setComments(resComments);
      });
    }
  }, [articleId, commentPosted]);

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
      {isOpen && (
        <NewComment
          handleClose={togglePopup}
          setCommentPosted={setCommentPosted}
          commentPosted={commentPosted}
        />
      )}
      {comments.map((comment, index) => {
        return <CommentCard comment={comment} key={index} />;
      })}
    </div>
  );
}
