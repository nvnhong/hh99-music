import { useNavigate } from "react-router-dom";
import * as St from "../../styles/Styles";
import Header from "../common/Header";

export default function UserInfo() {
  const navigate = useNavigate();

  return (
    <St.Container>
      <Header>
        <h1>Logo</h1>
        <button>프로필</button>
      </Header>

      <St.UserInfoContainer>
        <St.List onClick={() => navigate("/mypage")}>개인정보 수정</St.List>
        <St.UserInfoForm>
          <div>
            비밀번호 <input />
          </div>
          <div>
            닉네임 <input />
          </div>
          <div>
            자기소개 <input />
          </div>
          <div>
            이메일 <input />
          </div>
          <button>저장</button>
        </St.UserInfoForm>
      </St.UserInfoContainer>
    </St.Container>
  );
}
