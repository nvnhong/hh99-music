import * as St from "../../styles/Styles";

export default function Card({ title }) {
  return (
    <St.Card>
      <St.CardImage>썸네일</St.CardImage>
      <St.CardTitle>{title}</St.CardTitle>
    </St.Card>
  );
}
