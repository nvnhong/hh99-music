import styled from "styled-components";

export default function Pagination({ postsPerPage, totalPosts, paginate }) {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <Container>
      <nav>
        <PageUl>
          {pageNumbers.map((number) => (
            <PageLi key={number}>
              <span onClick={() => paginate(number)}>{number}</span>
            </PageLi>
          ))}
        </PageUl>
      </nav>
    </Container>
  );
}

const PageUl = styled.ul`
  display: flex;
  gap: 10px;
`;

const PageLi = styled.li`
  list-style: none;
  cursor: pointer;
  font-weight: bold;

  span {
    font-size: 20px;
    background-color: #eee;
    padding: 10px;
    border-radius: 4px;
  }
`;

const Container = styled.div`
  border: 1px solid black;
`;
