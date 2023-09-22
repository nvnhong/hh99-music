import { axiosInstance } from "./axiosInstance";

// 소셜로그인
export const kakaoLogin = async (code) => {
  const data = await axiosInstance.get(
    `users/kakao/callback?code=${code}`,
    {
      headers: {
        "Content-type": "application/x-www-form-urlencoded;charset=utf-8",
      },
    },
    {
      grant_type: "authorization_code",
      client_id: import.meta.env.VITE_REACT_APP_KAKAO_CLIENT_ID,
      redirect_uri: import.meta.env.VITE_REACT_APP_KAKAO_REDIRECT_URI,
      code,
    }
  );

  return data;
};

// username 조회
export const getUserName = async (accessToken) => {
  const { data } = await axiosInstance.get(`users/user-info`, {
    headers: { Authorization: accessToken },
  });

  return data.username;
};

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

// 게시글 길이 조회
export const totalPostLength = async (post) => {
  const { data } = await axiosInstance.post("posts", post);
  return data.length;
};

// 게시글 페이지네이션
export const pagenationPost = async (currentPage, postsPerPage) => {
  const { data } = await axiosInstance.get(
    `post?page=${currentPage}&size=${postsPerPage}`
  );
  return data.content;
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
