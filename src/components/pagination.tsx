import { useState } from "react";
import { isNewRequestAllowed } from "../utils/apiControl";

type PaginationProps = {
  isLoading: boolean;
  currentPage: number;
  existNextPage: boolean;
  setCurrentPage: (page: number) => void;
};

export function Pagination({
  currentPage,
  existNextPage,
  isLoading,
  setCurrentPage,
}: PaginationProps) {
  const [lastRequestTime, setLastRequestTime] = useState(0);

  function onChangePage(where: string) {
    if (!isLoading) {
      if (where === "PREV") {
        if (
          currentPage &&
          currentPage > 1 &&
          isNewRequestAllowed(lastRequestTime)
        ) {
          setLastRequestTime(new Date().getTime());
          setCurrentPage(currentPage - 1);
        }
      } else {
        if (currentPage && isNewRequestAllowed(lastRequestTime)) {
          setLastRequestTime(new Date().getTime());
          setCurrentPage(currentPage + 1);
        }
      }
    }
  }

  return (
    <header className="anime-list-pagination-container">
      {currentPage !== 1 && (
        <button
          className={`anime-list-pagination-button ${isLoading && "button-disable"}`}
          onClick={() => onChangePage("PREV")}
        >{`< PREV PAGE`}</button>
      )}
      <h1> Top Animes</h1>
      {existNextPage && (
        <button
          className={`anime-list-pagination-button ${isLoading && "button-disable"}`}
          onClick={() => onChangePage("NEXT")}
        >{`NEXT PAGE >`}</button>
      )}
    </header>
  );
}
