import { useNavigate } from "react-router-dom";
import * as St from "../../styles/Styles";

export default function Logo() {
  const navigate = useNavigate();
  return (
    <div
      className="font-양진체 text-2xl font-bold select-none text-red-400"
      onClick={() => navigate("/")}
    >
      항해 뮤직 🎧
    </div>
  );
}
