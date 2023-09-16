import { styled, css } from "styled-components";


export const Container = styled.div`
  max-width: 1200px;
  min-width: 800px;
  margin: 0 auto;
`;

export const Header = styled.header`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #eee;
  box-sizing: border-box;
  padding: 10px 20px;
`;

export const Button = styled.button`
  border: none;

  ${({ typebutton }) => {
    switch (typebutton) {
      case "category":
        return css``;
      case "comment":
        return css``;
      case "modal":
        return css``;
      case "create":
        return css``;
      case "update":
        return css``;
      default:
        return css``;
    }
  }}

  ${({ size }) => {
    switch (size) {
      case "large":
        return css``;

      case "midium":
        return css``;

      default:
        break;
    }
  }}
`;

export const CategoryGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 10px 0;
`;

export const Card = styled.div`
  border: thin solid black;
  width: 300px;
  height: 200px;
  box-sizing: border-box;
  background: #ffffff;
  border-radius: 10px;
  overflow: hidden;
`;

export const CardImage = styled.div`
  box-sizing: border-box;
  background-color: #eee;
  height: 150px;
`;

export const CardTitle = styled.div`
  height: 50px;
  box-sizing: border-box;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 4px;
`;

export const CardGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  column-gap: 148px;
  row-gap: 52px;
`;

export const ListGroup = styled.div`
  margin: 0 auto;
  margin-top: 30px;
  width: 700px;
  border: thin solid black;
  border-radius: 10px;
  overflow: hidden;
`;

export const List = styled.div`
  height: 40px;
  box-sizing: border-box;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0 10px;
  border-bottom: thin solid black;
  cursor: pointer;

  &:hover {
    background-color: #eee;
  }
`;

export const UserInfoContainer = styled.div`
  margin: 0 auto;
  margin-top: 30px;
  width: 700px;
  border: thin solid black;
  border-radius: 10px;
  box-sizing: border-box;
  overflow: hidden;
`;

export const UserInfoForm = styled.div`
  padding: 10px;
`;

export const Row = styled.div`
  display: flex;
`;

export const UserPostContainer = styled.div`
  margin: 0 auto;
  margin-top: 30px;
  width: 700px;
  border: thin solid black;
  border-radius: 10px;
  box-sizing: border-box;
  overflow: hidden;
`;

export const UserPostForm = styled.div`
  padding: 10px;
  border-bottom: 1px solid black;
`;
