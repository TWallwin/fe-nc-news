export default function DeleteCommentPopup({ handleClose, removeComment }) {
  return (
    <div className="popup-box">
      <div className="box">
        <button className="close-icon" onClick={handleClose}>
          x
        </button>
        <div className="delete-popup-layout">
          <p className="delete-comment-text">Delete Comment?</p>
          <div className="popup-button-div">
            <button className="yes-no-buttons" onClick={removeComment}>
              Yes
            </button>
            <button className="yes-no-buttons" onClick={handleClose}>
              No
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
