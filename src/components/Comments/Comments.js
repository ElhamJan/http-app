import { useEffect, useState } from "react";
import Comment from "../Comment/Comment";
import { toast } from "react-toastify";
import GetAllCommentsService from "../../services/GetAllCommentsService";
import { Link } from "react-router-dom";

const Comments = () => {
  const [comments, setComments] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    const getComments = async () => {
      try {
        const response = await GetAllCommentsService();
        setComments(response.data);
      } catch (error) {
        //console.log(error);
        setError(true);
      }
    };

    getComments();
  }, []);

  const renderComments = () => {
    let renderedComments = <p>Loading...</p>;

    if (error) {
      renderedComments = <p>Fetching data failed...</p>;
      toast.error("fetching data failed... ");
    }

    if (comments && !error) {
      renderedComments = comments.map((c) => (
        <Link to={`/comment/${c.id}`} key={c.id}>
          <Comment name={c.name} email={c.email} />
        </Link>
      ));
    }
    return renderedComments;
  };

  return <section className="comments">{renderComments()}</section>;
};

export default Comments;
