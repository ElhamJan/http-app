import http from "./httpService";

const GetAllCommentsService = () => {
  return http.get("/comments");
};

export default GetAllCommentsService;
