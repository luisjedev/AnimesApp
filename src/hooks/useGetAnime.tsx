import { useEffect, useState } from "react";
import { Anime } from "../interfaces/anime";
import { getAnimeById } from "../api/get-anime-details";

export function useGetAnime(animeId: string) {
  const [anime, setAnime] = useState<Anime | undefined>();
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    getAnime();
  }, [animeId]);

  async function getAnime() {
    try {
      const anime = await getAnimeById(animeId);
      setAnime(anime);
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

  return { anime, isLoading, isError, error };
}
