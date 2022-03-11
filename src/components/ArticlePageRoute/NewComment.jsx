import { useState, useContext } from "react";
import { postComment } from "../../api";
import { useParams } from "react-router-dom";
import { UserContext } from "../../contexts/UserContexts";

export default function NewComment(props) {
  const { user } = useContext(UserContext);

  const [commentBody, setCommentBody] = useState("");
  const { id } = useParams();

  function submitComment() {
    props.handleClose();
    postComment(id, commentBody, user);
  }
  return (
    <div className="popup-box">
      <div className="box">
        <button className="close-icon" onClick={props.handleClose}>
          x
        </button>
        <div className="new-comment-box">
          <input
            value={commentBody}
            className="new-comment-input"
            type="text"
            onChange={(e) => {
              setCommentBody(e.target.value);
            }}
          />
          <button
            className="submit-comment-button"
            onClick={() => {
              submitComment();
            }}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}
