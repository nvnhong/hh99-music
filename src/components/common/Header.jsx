import * as St from "../../styles/Styles";
import Logo from "./Logo";

export default function Header({ children }) {
  return (
    <St.Header>
      <Logo />
      {children}
    </St.Header>
  );
}
