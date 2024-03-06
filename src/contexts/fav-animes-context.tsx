import { createContext, useState } from "react";
import { Anime } from "../interfaces/anime";

interface AnimesContextProps {
  favoritesAnimes: Anime[];
  changeFavorites: (anime: Anime) => void;
}

export const FavAnimesContext = createContext<AnimesContextProps>({
  favoritesAnimes: [],
  changeFavorites: () => null,
});

export function FavAnimesContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [favoritesAnimes, setFavoritesAnimes] = useState<Anime[]>([]);

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

  return (
    <FavAnimesContext.Provider
      value={{
        favoritesAnimes,
        changeFavorites: onFavoritesChanged,
      }}
    >
      {children}
    </FavAnimesContext.Provider>
  );
}
