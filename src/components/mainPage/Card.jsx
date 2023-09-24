export default function Card({ title, handleClick }) {
  return (
    <div
      className="text-justify border w-72 h-64 bg-white rounded-lg overflow-hidden cursor-pointer select-none flex flex-col justify-center"
      onClick={handleClick}
    >
      <div className="bg-red-300 h-52 select-none"></div>
      <div className="h-12 flex items-center justify-center px-4">{title}</div>
    </div>
  );
}
