import { useEffect, useState } from "react";
import { Anime } from "../interfaces/anime";
import { getTopAnimes } from "../api/get-top-animes";
import { getAnimeByName } from "../api/get-anime-by-name";
import { useSearchParams } from "react-router-dom";

//preguntar cual es la mejor manera de organizar llamadas diferentes en un mismo hook

export function useGetTopAnimes() {
  const [animes, setAnimes] = useState<Anime[] | undefined>([]);
  const [currentPage, setCurrentPage] = useState<number | undefined>(1);
  const [existNextPage, setExistNextPage] = useState<boolean>();
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState<string | null>(null);

  let [searchParams, _] = useSearchParams();

  useEffect(() => {
    let animeTitleFiltered = searchParams.get("title");
    if (animeTitleFiltered == null || animeTitleFiltered == "") {
      getAnimes();
    } else {
      getFilteredAnimes(searchParams.get("title")!);
    }
  }, [searchParams, currentPage]);

  async function getAnimes() {
    setIsLoading(true);
    try {
      const res = await getTopAnimes(currentPage);
      setAnimes(res?.data);
      setCurrentPage(res?.pagination.current_page);
      setExistNextPage(res?.pagination.has_next_page);
    } catch (error: unknown) {
      if (error instanceof Error) {
        setError(error.message);
      }
      setError("Error al obtener los animes");
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  }

  async function getFilteredAnimes(name: string) {
    setIsLoading(true);
    try {
      const response = await getAnimeByName(name.replace("+", "%"));
      console.log(response?.data);
      setAnimes(response?.data);
      setCurrentPage(response?.pagination.current_page);
      setExistNextPage(response?.pagination.has_next_page);
    } catch (error: unknown) {
      if (error instanceof Error) {
        setError(error.message);
      }
      setError("Error al obtener los animes");
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  }

  return {
    animes,
    isError,
    error,
    isLoading,
    currentPage,
    existNextPage,
    setCurrentPage,
  };
}
