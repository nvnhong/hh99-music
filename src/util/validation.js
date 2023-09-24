export function validateUsername(username) {
  if (!username) {
    return "아이디를 입력하세요.";
  }
  if (!/^[a-zA-Z0-9]+$/.test(username)) {
    return "아이디는 영어나 영어와 숫자의 조합이어야 합니다.";
  }
  if (/[ㄱ-ㅎ가-힣!@#$%^&*(),.?":{}|<>]/.test(username)) {
    return "한글과 특수문자는 사용할 수 없습니다.";
  }
  return "";
}

export function validatePassword(password) {
  if (!password) {
    return "비밀번호를 입력하세요.";
  }
  return "";
}

export function validateEmail(email) {
  if (!email) {
    return "이메일을 입력하세요.";
  }
  if (!/\S+@\S+\.\S+/.test(email)) {
    return "유효한 이메일 형식이 아닙니다.";
  }
  return "";
}

export function validateContent(content) {
  if (!content) {
    return "추천사유를 입력하세요.";
  }
  return "";
}
