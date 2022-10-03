import http from "./httpService";

const GetOneCommentService = (commentId) => {
  return http.get(`/comments/${commentId}`);
};

export default GetOneCommentService;
