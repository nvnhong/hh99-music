import { useNavigate } from "react-router-dom";
import * as St from "../../styles/Styles";

export default function Logo() {
  const navigate = useNavigate();
  return <St.Logo onClick={() => navigate("/")}>항해뮤직</St.Logo>;
}
