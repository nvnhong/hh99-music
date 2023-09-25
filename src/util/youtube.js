export const extractVideoIdFromUrl = (url) => {
  if (!url || typeof url !== "string") {
    return null;
  }

  // URL에서 'v=' 다음에 오는 문자열을 추출합니다.
  const videoIdMatch = url.match(/[?&]v=([^?&]+)/);

  if (videoIdMatch) {
    // 정규 표현식에 일치하는 부분(비디오 ID)을 반환합니다.
    return videoIdMatch[1];
  } else {
    // 일치하는 비디오 ID가 없는 경우 null을 반환합니다.
    return null;
  }
};
