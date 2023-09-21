import { axiosInstance } from "./axiosInstance";

// 게시글 조회
export const getPost = async () => {
  const { data } = await axiosInstance.get("posts");
  return data.data;
};

// 단일 게시글 조회
export const getOnePost = async (id) => {
  const { data } = await axiosInstance.get(`posts/${id}`);
  return data.data;
};

// 게시글 생성
export const createPost = async (post) => {
  const { data } = await axiosInstance.post("posts", post);
  return data;
};

// 게시글 수정
export const updatePost = async (id, post) => {
  const { data } = await axiosInstance.put(`posts/${id}`, post);
  return data;
};

// 게시글 삭제
export const deletePost = async (postId) => {
  const { data } = await axiosInstance.delete(`posts/${postId}`);
  return data;
};

// 게시글 좋아요
export const likeComment = async (id) => {
  const { data } = await axiosInstance.post(`posts/${id}/likes`);
  return data;
};

// 댓글 생성
export const createComment = async (postId, comment) => {
  const { data } = await axiosInstance.post(
    `posts/${postId}/comments`,
    comment
  );
  return data;
};

// 댓글 수정
export const updateComment = async (id, comment) => {
  const { data } = await axiosInstance.put(`posts/comments/${id}`, comment);
  return data;
};

// 댓글 삭제
export const deleteComment = async (id) => {
  const { data } = await axiosInstance.delete(`posts/comments/${id}`);
  return data;
};
