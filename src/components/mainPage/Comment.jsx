import styled from "styled-components";
import { DeleteIcon, UpdateIcon } from "../../asset/icon/Icon";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useMutation, useQueryClient } from "react-query";
import { deleteComment, updateComment } from "../../api/api";
import { detailDate } from "../../util/detailDate";

export default function Comment({
  id,
  createdAt,
  content,
  username,
  isUsername,
}) {
  const queryClient = useQueryClient();
  const [isUpdate, setIsUpdate] = useState(false); // 수정모드로 변경할 때 사용
  const [updateContent, setUpdateContent] = useState(""); // 수정할 값을 입력받을 때 사용
  const { userId } = useSelector((state) => state.user);

  const deleteCommentMutate = useMutation(() => deleteComment(id), {
    onSuccess: () => {
      queryClient.invalidateQueries("onePost");
    },
  });

  const updateCommentMutate = useMutation(
    () => updateComment(id, { content: updateContent, username: userId }),
    {
      onSuccess: () => {
        queryClient.invalidateQueries("onePost");
        setIsUpdate(false);
      },
    }
  );

  const handleUpdateClick = () => {
    setIsUpdate(true);
    setUpdateContent(content);
  };

  return (
    <Container>
      <UserInfoContainer>
        <UserInfo>
          <Username>{username}</Username>
          <div>{detailDate(createdAt)}</div>
        </UserInfo>
        <div>
          {isUsername && (
            <>
              <button onClick={handleUpdateClick}>
                <UpdateIcon />
              </button>
              <button onClick={() => deleteCommentMutate.mutate()}>
                <DeleteIcon />
              </button>
            </>
          )}
        </div>
      </UserInfoContainer>
      {/* 삼항연산자 */}
      {isUpdate ? (
        <>
          <input
            defaultValue={content}
            onChange={(e) => setUpdateContent(e.target.value)}
          />
          <button onClick={() => updateCommentMutate.mutate()}>수정</button>
        </>
      ) : (
        <div>{content}</div>
      )}
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
`;

const UserInfo = styled.div`
  display: flex;
  gap: 10px;
`;

const Username = styled.div`
  font-weight: bold;
`;

const UserInfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
