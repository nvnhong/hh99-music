import { useNavigate } from "react-router-dom";

export default function Logo() {
  const navigate = useNavigate();
  return (
    <div
      className="font-양진체 text-2xl font-bold select-none text-red-400 cursor-pointer"
      onClick={() => navigate("/main")}
    >
      항해 뮤직 🎧
    </div>
  );
}
