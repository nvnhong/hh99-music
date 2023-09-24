import YouTube from "react-youtube";

export default function YoutubeVideo({ youtubeUrl }) {
  // YouTube 동영상 URL에서 videoId 추출
  const videoId = getYouTubeVideoId(youtubeUrl);

  // YouTube 옵션 설정
  const opts = {
    height: "390",
    width: "640",
    playerVars: {
      autoplay: 1, // 자동 재생 여부 (1: 자동 재생, 0: 자동 재생 비활성화)
    },
  };

  // videoUrl에서 YouTube 동영상의 ID를 추출하는 함수
  function getYouTubeVideoId(url) {
    const regex =
      /(?:https:\/\/(?:www\.)?youtube\.com\/watch\?v=|https:\/\/youtu.be\/)([\w-]+)/;
    const match = url.match(regex);

    if (match && match[1]) {
      return match[1];
    }

    return null;
  }

  return (
    <div className="flex justify-center	">
      <YouTube videoId={videoId} opts={opts} />
    </div>
  );
}
