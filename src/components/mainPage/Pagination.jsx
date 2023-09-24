import React from "react";

export default function Pagination({
  postsPerPage,
  totalPosts,
  currentPage,
  paginate,
}) {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  // 현재 페이지에서 보여줄 페이지 번호 범위를 계산
  const maxPageButtons = 5; // 한 번에 보여줄 페이지 버튼의 최대 개수
  const halfButtons = Math.floor(maxPageButtons / 2); // 현재 페이지를 중심으로 좌우로 몇 개의 버튼을 보여줄 것인지
  let startPage, endPage;

  if (currentPage <= halfButtons + 1) {
    startPage = 1;
    endPage = Math.min(maxPageButtons, pageNumbers.length);
  } else if (currentPage >= pageNumbers.length - halfButtons) {
    startPage = Math.max(1, pageNumbers.length - maxPageButtons + 1);
    endPage = pageNumbers.length;
  } else {
    startPage = currentPage - halfButtons;
    endPage = currentPage + halfButtons;
  }

  const renderPageNumbers = pageNumbers
    .filter((number) => number >= startPage && number <= endPage)
    .map((number) => (
      <li
        key={number}
        onClick={() => paginate(number)}
        className={`cursor-pointer ${
          currentPage === number ? " text-white" : ""
        }`}
      >
        <span className="bg-red-300 px-3 py-2 rounded-md font-bold">
          {number}
        </span>
      </li>
    ));

  return (
    <div className="flex justify-center items-center mt-10">
      <nav>
        <ul className="flex space-x-2">
          {currentPage > 1 ? (
            <li
              onClick={() => paginate(currentPage - 1)}
              className="cursor-pointer"
            >
              <span>&lt;</span>
            </li>
          ) : (
            <li className="disabled">
              <span>&lt;</span>
            </li>
          )}
          {renderPageNumbers}
          {currentPage < pageNumbers.length && (
            <li
              onClick={() => paginate(currentPage + 1)}
              className="cursor-pointer"
            >
              <span>&gt;</span>
            </li>
          )}
        </ul>
      </nav>
    </div>
  );
}
