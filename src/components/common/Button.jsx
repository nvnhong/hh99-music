import * as St from "../../styles/Styles";

export default function Button({ children, ...props }) {
  return <St.Button {...props}>{children}</St.Button>;
}
