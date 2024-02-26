import { createContext, useEffect, useState } from "react";
import { Anime } from "../interfaces/anime";
import { getTopAnimes } from "../api/get-top-animes";

interface AnimesContextProps {
  animes: Anime[] | undefined;
  favorites: number[];
  isLoading: boolean;
}

export const AnimesContext = createContext<AnimesContextProps>({
  animes: [],
  favorites: [],
  isLoading: true,
});

export function AnimesContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [animes, setAnimes] = useState<Anime[] | undefined>([]);
  const [favorites, setFavorites] = useState<number[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    //obtener la lista de animes
    getAnimes();
    //cargar ids de animes favoritos desde el local storage
    setFavorites([]);
  }, []);

  async function getAnimes() {
    try {
      const animesLoaded = await getTopAnimes();
      setAnimes(animesLoaded);
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.log(error.message);
      }
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <AnimesContext.Provider value={{ animes, favorites, isLoading }}>
      {children}
    </AnimesContext.Provider>
  );
}
