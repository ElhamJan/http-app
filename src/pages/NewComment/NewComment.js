import { useState } from "react";
import AddNewCommentService from "../../services/AddNewCommentService";

const NewComment = ({ history }) => {
  const [comment, setComment] = useState({
    name: "",
    email: "",
    body: "",
  });

  const changeHandler = (e) => {
    setComment({ ...comment, [e.target.name]: e.target.value });
  };

  const postCommentHandler = async () => {
    try {
      await AddNewCommentService({ ...comment, postId: 10 });
      history.push("/");
    } catch (error) {}
  };

  return (
    <div className="new-comment">
      <h2>Add new comment</h2>
      <div className="form-control">
        <label>Name</label>
        <input type="text" name="name" onChange={changeHandler} />
      </div>
      <div className="form-control">
        <label>Email</label>
        <input type="email" name="email" onChange={changeHandler} />
      </div>
      <div className="form-control">
        <label>Body</label>
        <textarea name="body" onChange={changeHandler}></textarea>
      </div>
      <button onClick={() => postCommentHandler()}>Add new comment</button>
    </div>
  );
};

export default NewComment;
