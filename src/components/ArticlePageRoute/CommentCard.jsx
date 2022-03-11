import { useState, useContext } from "react";
import { UserContext } from "../../contexts/UserContexts";
import { deleteComment } from "../../api";
import { Alert } from "@mui/material";
import DeleteCommentPopup from "./DeleteCommentPopup";
export default function CommentCard({ comment }) {
  const [isOpen, setIsOpen] = useState(false);

  let date = new Date(comment.created_at);
  date = date.toDateString();
  const { user } = useContext(UserContext);
  const [commentDeleted, setCommentDeleted] = useState(null);

  function removeComment() {
    setCommentDeleted(true);
    deleteComment(comment.comment_id).catch(() => {
      setCommentDeleted(false);
    });
  }
  function togglePopup() {
    setIsOpen(!isOpen);
  }
  if (commentDeleted) {
    return (
      <div className="comment-card">
        <span>Comment Deleted!</span>
      </div>
    );
  }
  return (
    <div className="comment-card">
      <div className="comment-header">
        <div className="span-div">
          <span>{comment.author}</span>
        </div>
        <div className="button-div">
          {user === comment.author ? (
            <button onClick={togglePopup} className="delete-comment-button">
              x
            </button>
          ) : (
            <span />
          )}
        </div>
      </div>

      <p className="comment-body">{comment.body}</p>

      <div className="comment-card-info">
        <p>{date}</p>
        <span>{comment.votes}</span>
      </div>
      {commentDeleted === false ? (
        <Alert variant="filled" severity="error">
          Comment Delete Failed
        </Alert>
      ) : (
        <span />
      )}
      {isOpen && (
        <DeleteCommentPopup
          removeComment={removeComment}
          handleClose={togglePopup}
        />
      )}
    </div>
  );
}
