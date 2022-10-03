import { useEffect, useState } from "react";
import DeleteCommentService from "../../services/DeleteCommentService";
import GetOneCommentService from "../../services/GetOneCommentService";

const FullComment = ({ match, history }) => {
  const commentId = match.params.id;
  const [comment, setComment] = useState(null);

  const deleteCommentHandler = async () => {
    try {
      await DeleteCommentService(commentId);
      history.push("/");
      setComment(null);
    } catch (error) {}
  };

  useEffect(() => {
    if (commentId) {
      GetOneCommentService(commentId)
        .then((res) => setComment(res.data))
        .catch((err) => console.log(err));
    }
  }, [commentId]);

  let commentDetail = <p>Please select a comment!</p>;

  if (commentId) commentDetail = <p>Loading ...</p>;

  if (comment)
    commentDetail = (
      <div className="full-comment">
        <p>{comment.name}</p>
        <p>{comment.email}</p>
        <p>{comment.body}</p>
        <button className="delete-btn" onClick={deleteCommentHandler}>
          Delete
        </button>
      </div>
    );

  return commentDetail;
};

export default FullComment;
