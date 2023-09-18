import styled from "styled-components";

export default function Category() {
  return (
    <Container>
      <Button>최신순</Button>
      <Button>조회순</Button>
      <Button>댓글순</Button>
      <Button>좋아요순</Button>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  gap: 10px;
`;

const Button = styled.button`
  border: none;
  padding: 10px;
  border-radius: 8px;
`;
