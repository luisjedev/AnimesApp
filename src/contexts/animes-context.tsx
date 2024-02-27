import { createContext, useEffect, useState } from "react";
import { Anime } from "../interfaces/anime";
import { getTopAnimes } from "../api/get-top-animes";

interface AnimesContextProps {
  animes: Anime[] | undefined;
  favoritesAnimes: Anime[] | undefined;
  isLoading: boolean;
  changeFavorites: ((anime: Anime) => void) | null;
  showOnlyFavs: boolean;
  changeShowedAnimes: ((isFavsVisible: boolean) => void) | null;
}

export const AnimesContext = createContext<AnimesContextProps>({
  animes: [],
  favoritesAnimes: [],
  isLoading: true,
  changeFavorites: null,
  showOnlyFavs: false,
  changeShowedAnimes: null,
});

export function AnimesContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [animes, setAnimes] = useState<Anime[] | undefined>([]);
  const [favoritesAnimes, setFavoritesAnimes] = useState<Anime[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [showOnlyFavs, setShowOnlyFavs] = useState(false);

  useEffect(() => {
    //obtener la lista de animes inicial
    getInitialAnimes();
  }, []);

  async function getInitialAnimes() {
    try {
      const topAnimes = await getTopAnimes();
      setAnimes(topAnimes);
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.log(error.message);
      }
    } finally {
      setIsLoading(false);
    }
  }

  function onFavoritesChanged(anime: Anime): void {
    let animeAlreadyExist = false;
    favoritesAnimes.map((favAnime) => {
      if (favAnime.mal_id == anime.mal_id) animeAlreadyExist = true;
    });

    if (!animeAlreadyExist) {
      setFavoritesAnimes((favorites) => [...favorites, anime]);
    } else {
      const newFavList = favoritesAnimes.filter(
        (favAnime) => anime.mal_id !== favAnime.mal_id,
      );
      setFavoritesAnimes(newFavList);
    }
  }

  function onChangeVisibility(onlyFavs: boolean): void {
    setShowOnlyFavs(onlyFavs);
  }

  return (
    <AnimesContext.Provider
      value={{
        animes,
        favoritesAnimes,
        isLoading,
        changeFavorites: onFavoritesChanged,
        showOnlyFavs,
        changeShowedAnimes: onChangeVisibility,
      }}
    >
      {children}
    </AnimesContext.Provider>
  );
}
