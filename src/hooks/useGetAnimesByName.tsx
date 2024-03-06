import { useEffect, useState } from "react";
import { Anime } from "../interfaces/anime";
import { getAnimeByName } from "../api/get-anime-by-name";

export function useGetAnimesByName() {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState("");
  const [name, setName] = useState("");
  const [animes, setAnimes] = useState<Anime[] | undefined>();
  const [currentPage, setCurrentPage] = useState<number | undefined>(1);
  const [existNextPage, setExistNextPage] = useState<boolean>();

  async function getFilteredAnimes() {
    setIsLoading(true);
    try {
      const response = await getAnimeByName(name.replace(" ", "%"));
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
    isLoading,
    isError,
    error,
    animes,
    currentPage,
    existNextPage,
    setName,
    name,
    getFilteredAnimes,
  };
}
