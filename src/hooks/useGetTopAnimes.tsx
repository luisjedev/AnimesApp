import { useEffect, useState } from "react";
import { Anime } from "../interfaces/anime";
import { getTopAnimes } from "../api/get-top-animes";

export function useGetTopAnimes() {
  const [topAnimes, setTopAnimes] = useState<Anime[] | undefined>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    loadTopAnimes();
  }, []);

  async function loadTopAnimes() {
    setIsLoading(true);
    try {
      const topAnimes = await getTopAnimes();
      setTopAnimes(topAnimes);
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

  return { topAnimes, isError, error, isLoading };
}
