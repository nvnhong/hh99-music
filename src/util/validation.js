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
  if (username.length < 4 || username.length > 10) {
    return "아이디는 4자 이상 10자 이하로 입력해야 합니다.";
  }
  return "";
}

export function validatePassword(password) {
  if (!password) {
    return "비밀번호를 입력하세요.";
  }
  if (password.length < 8 || password.length > 15) {
    return "비밀번호는 8글자 이상 15글자 이하로 입력해야 합니다.";
  }
  if (
    !/^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*(),.?":{}|<>]).*$/.test(password)
  ) {
    return "비밀번호는 알파벳, 숫자 및 특수 문자를 포함해야 합니다.";
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

export function validateContents(content) {
  if (!content) {
    return "댓글 내용을 입력해주세요.";
  }
  return "";
}
