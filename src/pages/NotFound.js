import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <>
      <p>
        404
        <br />
        The page is not found!
      </p>
      <Link to="/">Go to home page!</Link>
    </>
  );
};

export default NotFound;
