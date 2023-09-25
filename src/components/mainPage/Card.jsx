import { getYouTubeThumbnail } from "../../api/api";
import { useEffect, useState } from "react";

export default function Card({ title, videoUrl, handleClick }) {
  const [imgUrl, setImgUrl] = useState("");

  useEffect(() => {
    const getImgUrl = async () => {
      const url = await getYouTubeThumbnail(videoUrl);
      setImgUrl(url);
    };

    getImgUrl();
  }, []);

  return (
    <div
      className="text-justify border w-72 h-64 bg-white rounded-lg overflow-hidden cursor-pointer select-none flex flex-col justify-center"
      onClick={handleClick}
    >
      <img className="bg-red-300 h-52 select-none" src={imgUrl} />
      <div className="h-12 flex items-center justify-center px-4">{title}</div>
    </div>
  );
}
