import { useEffect, useState } from "react";
import { getArticleComments } from "../../api";
import CommentCard from "./CommentCard";
export default function Comments({ articleId }) {
  const [comments, setComments] = useState([]);
  useEffect(() => {
    getArticleComments(articleId).then((resComments) => {
      setComments(resComments);
    });
  }, []);
  return (
    <div className="comments">
      <h1>Comments</h1>
      {comments.map((comment, index) => {
        return <CommentCard comment={comment} key={index} />;
      })}
    </div>
  );
}
