export default function Card({ title, handleClick }) {
  return (
    <div
      className="border border-black w-72 h-64 bg-white rounded-lg overflow-hidden cursor-pointer"
      onClick={handleClick}
    >
      <div className="bg-red-300 h-52"></div>
      <div className="h-12 flex items-center px-4">{title}</div>
    </div>
  );
}
