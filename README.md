## 프로젝트 소개
https://hh99-music-test.vercel.app/  
항해 뮤직은 내가 좋아하는 음악을 공유하는 서비스입니다.  
항해99에 참여중인 수강생(프론트엔드 2명, 백엔드 3명)이 팀을 이뤄 제작했습니다.  
백엔드 팀 깃허브 주소 : https://github.com/CHANYOUNGKANG/First_Project
  
## 프로젝트 기간
2023년 9월 15일 ~ 27일 (2주)

## 팀원 소개
---
|[김태현](https://github.com/ted0729)|[홍미경](https://github.com/nvnhong)|
|:-:|:-:|
|<img src="https://avatars.githubusercontent.com/u/138233242?v=4" width="200" height="200"/>|<img src="https://avatars.githubusercontent.com/u/134766917?v=4" width="200" height="200"/>|

## 주요 기능
- 게시글 내에서 바로 동영상을 재생할 수 있도록 **YouTube API를 통합**하고, 유튜브 썸네일이 메인 페이지의 카드뷰에도 나타나도록 구현.
- 카카오 API를 사용하여 **카카오톡 소셜 로그인** 기능 구현
- 유저의 활발한 커뮤니케이션을 위한 **댓글과 좋아요 기능** 구현.
- 메인 페이지에 다수의 카드 뷰 구현으로 인한 **성능 저하를 해결하기 위해 Pagination 구현**.

## 기술 스택
<div>
 <img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black">
 <img src="https://img.shields.io/badge/styled-component-DB7093?style=for-the-badge&logo=styled-component&logoColor=black">
 <img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black">
 <img src="https://img.shields.io/badge/redux-764ABC?style=for-the-badge&logo=redux&logoColor=black">
 <img src="https://img.shields.io/badge/reactrouter-CA4245?style=for-the-badge&logo=reactrouter&logoColor=black">
 <img src="https://img.shields.io/badge/reactquery-FF4154?style=for-the-badge&logo=reactquery&logoColor=black">
 <img src="https://img.shields.io/badge/tailwindcss-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=black">
 <img src="https://img.shields.io/badge/vercel-000000?style=for-the-badge&logo=vercel&logoColor=white">
</div>

## 트러블 슈팅
<details>
<summary>새로 고침 시 redux의 전역 상태 초기화 현상</summary>
- 문제의 디테일
  <br>
로그인 후 사용자의 정보를 redux의 상태에 저장하여 게시글이나 댓글 CRUD 시 사용했습니다. 그러나 새로고침 시 리덕스의 state가 사라지는 현상이 있었습니다.
  <br>
- 해결 방법
  <br>
최상위 컴포넌트에서 useEffect와 백엔드에서 사용자정보를 전달받을 수 있는 api를 활용해 문제를 해결하였습니다.
  <br>
</details>
<details>
<summary>리액트 Hook의 엄격한 호출순서</summary>
- 문제의 디테일
  <br>
코드를 그때 그때 상황에 맞게 급하게 구현하다보니, 렌더링의 순서가 꼬일수 있다는 사실을 간과하고 생각나는데로 코드를 짜다보니 오류를 마주치게되었숩나다.
  <br>
- 해결 방법
  <br>
리액트 Hook은 함수 컴포넌트 내에서만 호출되어야 하고, 훅은 조건문, 반복문(loops), 중첩 함수 등과 같은 JavaScript의 제어문 안에서 호출되어서는
<br>
안된다는 사실과 Hook 호출을 항상 컴포넌트 함수의 가장 상위 수준에서 하도록 해야된다는걸 알게되면서 해결하였습니다.
  <br>
</details>
