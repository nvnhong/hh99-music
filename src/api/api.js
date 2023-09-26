import axios from "axios";
import { extractVideoIdFromUrl } from "../util/youtube";
import { axiosInstance } from "./axiosInstance";

// 회원 탈퇴
export const deleteUser = async (userId, password) => {
  const data = await axiosInstance.delete(
    `users/${userId}/delete?password=${password}`
  );
  console.log(data);
  localStorage.removeItem("accessToken");
  localStorage.removeItem("refreshToken");
  return data;
};

// 로그인
export const loginUser = async (username, password) => {
  const response = await axiosInstance.post(`users/login`, {
    username,
    password,
  });
  localStorage.setItem("accessToken", response.headers["authorization"]);
  localStorage.setItem(
    "refreshToken",
    response.headers["authorization_refresh"]
  );
  return response;
};

// 소셜로그인
export const kakaoLogin = async (code) => {
  console.log({ code });
  const data = await axiosInstance.get(
    `user/kakao/callback?code=${code}`,
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

  console.log("카카오 로그인 api 동작 : ", data);

  return data;
};

// username 조회
export const getUserName = async (accessToken) => {
  const { data } = await axiosInstance.get(`users/user-info`, {
    headers: { Authorization: accessToken },
  });

  return data.username;
};

// user 정보 조회
export const getUserInfo = async (username) => {
  const { data } = await axiosInstance.get(
    `users/profile?username=${username}`
  );

  return data.data;
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

// 게시글 조회
export const getMyPost = async (username) => {
  const { data } = await axiosInstance.get("posts");

  const myPost = data.data.filter((value) => value.author === username);

  return myPost;
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

// 유튜브 썸네일 불러오기
export const getYouTubeThumbnail = async (videoId) => {
  const id = extractVideoIdFromUrl(videoId);

  if (id === null) return "";

  const response = await axios.get(
    `https://www.googleapis.com/youtube/v3/videos?id=${id}&key=${
      import.meta.env.VITE_REACT_APP_YOUTUBE_API_URI
    }&part=snippet`
  );

  return response.data.items[0].snippet.thumbnails.medium.url;
};
