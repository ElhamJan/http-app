import http from "./httpService";

const DeleteCommentService = (commentId) => {
  return http.delete(`/comments/${commentId}`);
};

export default DeleteCommentService;
