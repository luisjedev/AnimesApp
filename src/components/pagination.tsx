import { useState } from "react";

type PaginationProps = {
  isLoading: boolean;
  currentPage: number;
  existNextPage: boolean;
  setCurrentPage: (page: number) => void;
};

const CHANGE_PAGE_MIN_INTERVAL = 800;

function isPosibleChangePage(
  lastRequestTime: number,
  isLoading: boolean,
): boolean {
  const currentTime = new Date().getTime();
  if (currentTime - lastRequestTime >= CHANGE_PAGE_MIN_INTERVAL && !isLoading) {
    return true;
  } else {
    return false;
  }
}

export function Pagination({
  currentPage,
  existNextPage,
  isLoading,
  setCurrentPage,
}: PaginationProps) {
  const [lastRequestTime, setLastRequestTime] = useState(0);

  function onChangePage(where: string) {
    if (where === "PREV") {
      if (
        currentPage &&
        currentPage > 1 &&
        isPosibleChangePage(lastRequestTime, isLoading)
      ) {
        setLastRequestTime(new Date().getTime());
        setCurrentPage(currentPage - 1);
      }
    } else {
      if (currentPage && isPosibleChangePage(lastRequestTime, isLoading)) {
        setLastRequestTime(new Date().getTime());
        setCurrentPage(currentPage + 1);
      }
    }
  }

  return (
    <header className="anime-list-pagination-container">
      {currentPage !== 1 && (
        <button
          className={`anime-list-pagination-button ${isLoading && "button-disable"}`}
          onClick={() => onChangePage("PREV")}
        >{`< Anterior`}</button>
      )}
      <h1> Top Animes</h1>
      {existNextPage && (
        <button
          className={`anime-list-pagination-button ${isLoading && "button-disable"}`}
          onClick={() => onChangePage("NEXT")}
        >{`Siguiente >`}</button>
      )}
    </header>
  );
}
