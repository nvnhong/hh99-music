import useInput from "../hooks/useInput";
import styled from "styled-components";
import * as St from "../styles/Styles";

export default function MainPage() {
  const [titleInput, titleHandleChange] = useInput("");
  const [youtubeidInput, youtubeidHandleChange] = useInput("");
  const [contentInput, contentHandleChange] = useInput("");

  return (
    <>
      <SmallModalWrap>
        <InputTitle>
          <div>
            제목
            <br />
            <input
              type="text"
              value={titleInput}
              onChange={titleHandleChange}
            />
          </div>
        </InputTitle>
        <div>
          <InputTitle>
            <div>
              유튜브 주소
              <br />
              https://youtube.be/
              <input
                type="text"
                value={youtubeidInput}
                onChange={youtubeidHandleChange}
              />
            </div>
          </InputTitle>
        </div>
        <InputTitle>
          <div>
            추천사유
            <br />
            <input
              type="text"
              value={contentInput}
              onChange={contentHandleChange}
              placeholder="왜 이 노래를 추천하시나요?"
            />
          </div>
        </InputTitle>
        <NavyButton>등록</NavyButton>
      </SmallModalWrap>
    </>
  );
}
const NavyButton = styled.button`
  color: white;
  background-color: #2d3648;
  border-radius: 5px;
  border: none;
  width: 70px;
  height: 24px;
  font-size: 11px;
  font-weight: bold;
  margin-top: 10px;
  cursor: pointer;

  &:hover {
    background-color: #3498db;
  }
`;

const SmallModalWrap = styled.div`
  width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 6;
  background-color: white;
  border: thin solid black;
  border-radius: 8px;
`;

const InputTitle = styled.div`
  font-size: 12px;
  font-weight: bold;
  margin-top: 10px;
  border: thin solid red;
  width: 100%;
`;
// const RecommendInputField = styled.input`
//   text-align: left;
// `;

// const TitleInputField = styled.input`
//   text-align: left;
// `;
