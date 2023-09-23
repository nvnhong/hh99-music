import styled from "styled-components";
import Header from "../components/common/Header";
import * as St from "../styles/Styles";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { axiosInstance } from "../api/axiosInstance";
import { updatePost } from "../api/api";

export default function UpdatePage() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [url, setUrl] = useState("");
  const postId = useLocation().state;
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { isLoading, error, data } = useQuery("onePost", async () => {
    const { data } = await axiosInstance.get(`posts/${postId}`, {
      headers: { Authorization: localStorage.getItem("accessToken") },
    });

    return data.data;
  });

  const updatePostMutation = useMutation(
    () => updatePost(postId, { title, content, url }),
    {
      onSuccess: () => {
        queryClient.invalidateQueries("post");
        navigate("/main");
      },
    }
  );

  useEffect(() => {
    if (data) {
      setTitle(data.title);
      setContent(data.content);
      setUrl(data.url);
    }
  }, [data]);

  return (
    <St.Container>
      <Header />
      <Col>
        <span>제목</span>
        <input
          type="text"
          defaultValue={data.title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </Col>

      <Col>
        <span>유튜브 주소</span>
        <input
          type="text"
          defaultValue={data.url}
          onChange={(e) => setUrl(e.target.value)}
        />
      </Col>

      <Col>
        <span>추천사유</span>
        <input
          type="text"
          defaultValue={data.content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="왜 이 노래를 추천하시나요?"
        />
      </Col>

      <button onClick={() => updatePostMutation.mutate()}>수정</button>
    </St.Container>
  );
}
const Col = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px 30px;

  span {
    font-weight: bold;
    margin-bottom: 10px;
  }

  input {
    background-color: #eee;
    height: 30px;
    border: none;
    border-radius: 4px;
  }
`;
