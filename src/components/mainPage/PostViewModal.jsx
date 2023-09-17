import * as St from "../../styles/Styles";
import { CloseIcon } from "../../asset/icon/Icon";
import Comment from "./Comment";

export default function PostViewModal({ handleClick }) {
  // Question 모달이 가운데 뜨게 CSS 설정하는 법?
  return (
    <>
      <St.Background onClick={handleClick} />
      <St.Modal>
        <St.ButtonGroup>
          <button onClick={handleClick}>
            <CloseIcon />
          </button>
        </St.ButtonGroup>

        <St.Video />

        <St.Title>Perfect Video</St.Title>

        <St.PostInfo>
          <div>닉네임</div>
          <div>조회수 103회</div>
          <div>좋아요 1개</div>
        </St.PostInfo>

        <St.Content>너무 재밌어서 추천했습니다.</St.Content>

        <St.Comment>
          <textarea />
          <button>등록</button>
        </St.Comment>

        <div>
          <Comment
            nickname={"닉네임"}
            createdAt={"3시간전"}
            content={"굿이다"}
          />
          <Comment
            nickname={"닉네임"}
            createdAt={"4시간전"}
            content={"정말 멋있다"}
          />
        </div>
      </St.Modal>
    </>
  );
}
