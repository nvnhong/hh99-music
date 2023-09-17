import * as St from "../../styles/Styles";

export default function Button({ children, icon, ...props }) {
  return (
    <St.Button {...props}>
      <>{icon}</>
      {children}
    </St.Button>
  );
}
