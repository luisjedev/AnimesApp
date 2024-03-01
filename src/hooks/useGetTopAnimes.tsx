import { useEffect, useState } from "react";
import { Anime } from "../interfaces/anime";
import { getTopAnimes } from "../api/get-top-animes";

export function useGetTopAnimes() {
  const [topAnimes, setTopAnimes] = useState<Anime[] | undefined>([]);
  const [currentPage, setCurrentPage] = useState<number | undefined>(1);
  const [existNextPage, setExistNextPage] = useState<boolean>();
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    getInitialTopAnimes();
  }, [currentPage]);

  async function getInitialTopAnimes() {
    setIsLoading(true);
    try {
      const res = await getTopAnimes(currentPage);
      setTopAnimes(res?.data);
      setCurrentPage(res?.pagination.current_page);
      setExistNextPage(res?.pagination.has_next_page);
    } catch (error: unknown) {
      if (error instanceof Error) {
        setError(error.message);
      }
      setError("An error occurred while fetching posts");
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  }

  return {
    topAnimes,
    isError,
    error,
    isLoading,
    currentPage,
    existNextPage,
    setCurrentPage,
  };
}
