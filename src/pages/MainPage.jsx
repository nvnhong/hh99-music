import * as St from "../styles/Styles";
import Header from "../components/common/Header";
import Card from "../components/mainPage/Card";

export default function MainPage() {
  // useEffect : token이 있다면 프로필, 없다면 로그인 버튼
  const data = [
    { id: 1, title: "Video provides a powerful" },
    { id: 2, title: "Video provides a powerful" },
    { id: 3, title: "Video provides a powerful" },
    { id: 4, title: "Video provides a powerful" },
    { id: 5, title: "Video provides a powerful" },
    { id: 6, title: "Video provides a powerful" },
  ];

  return (
    <St.Container>
      <Header>
        <h1>로고</h1>
        <button>프로필</button>
      </Header>

      <St.CategoryGroup>
        <button>최신순</button>
        <button>조회순</button>
        <button>댓글순</button>
      </St.CategoryGroup>

      <St.CardGroup>
        {data.map((value) => (
          <Card key={value.id} title={value.title} />
        ))}
        <Card />
      </St.CardGroup>
    </St.Container>
  );
}
