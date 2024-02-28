import { createContext, useState } from "react";
import { Anime } from "../interfaces/anime";

interface AnimesContextProps {
  favoritesAnimes: Anime[];
  changeFavorites: ((anime: Anime) => void) | null;
  showOnlyFavs: boolean;
  changeShowedAnimes: ((isFavsVisible: boolean) => void) | null;
}

export const AnimesContext = createContext<AnimesContextProps>({
  favoritesAnimes: [],
  changeFavorites: null,
  showOnlyFavs: false,
  changeShowedAnimes: null,
});

export function AnimesContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [favoritesAnimes, setFavoritesAnimes] = useState<Anime[]>([]);
  const [showOnlyFavs, setShowOnlyFavs] = useState(false);

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
        favoritesAnimes,
        changeFavorites: onFavoritesChanged,
        showOnlyFavs,
        changeShowedAnimes: onChangeVisibility,
      }}
    >
      {children}
    </AnimesContext.Provider>
  );
}
