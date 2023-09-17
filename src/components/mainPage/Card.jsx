import * as St from "../../styles/Styles";

export default function Card({ title, handleClick }) {
  return (
    <St.Card onClick={handleClick}>
      <St.CardImage>썸네일</St.CardImage>
      <St.CardTitle>{title}</St.CardTitle>
    </St.Card>
  );
}
