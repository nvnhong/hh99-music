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
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  margin: 20px 0;
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
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  height: 100%;
`;

export const UserInfoTitle = styled.div`
  width: 130px;
  user-select: none;
`;

export const UserInfoInput = styled.input`
  width: 300px;
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
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid black;
`;

export const Col = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Logo = styled.div`
  cursor: pointer;
  font-weight: 600;
  font-size: 20px;
  letter-spacing: 4px;
`;

export const Modal = styled.div`
  position: absolute;
  top: -30%;
  left: 50%;
  transform: translate(-50%, 50%);
  width: 600px;
  border: thin solid black;
  border-radius: 10px;
  background-color: white;
  overflow: hidden;
`;

export const Background = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.3);
  top: 0;
  left: 0;
`;

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: flex-end;
  height: 30px;
  padding: 10px;
  gap: 10px;
`;

export const Video = styled.div`
  border: 1px solid black;
  width: 500px;
  height: 300px;
  margin: 20px auto;
`;

export const Title = styled.div`
  border: thin solid black;
  text-align: center;
  margin: 0 30px;
`;

export const PostInfo = styled.div`
  display: flex;
  gap: 10px;
  margin: 30px;
`;

export const Content = styled.div`
  margin: 30px;
`;

export const Comment = styled.div`
  display: flex;
  margin: 30px;

  textarea {
    width: 100%;
    resize: none;
  }
`;
