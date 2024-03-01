import { useAnimesContext } from "../contexts/useAnimesContext";
import { useGetTopAnimes } from "../hooks/useGetTopAnimes";
import { AnimeItem } from "./anime-item/anime-item";
import { Loading } from "./loading";
import { Pagination } from "./pagination";

export function AnimeList() {
  const { favoritesAnimes, showOnlyFavs } = useAnimesContext();
  const {
    topAnimes,
    isError,
    error,
    isLoading,
    currentPage,
    existNextPage,
    setCurrentPage,
  } = useGetTopAnimes();

  if (isError) {
    return <h1>{error}</h1>;
  }

  if (showOnlyFavs && !favoritesAnimes) {
    return <h1>Error al mostrar favoritos!</h1>;
  }

  if (!showOnlyFavs && !topAnimes) {
    return <h1>Error al obtener los animes!</h1>;
  }

  const animeListRendered = showOnlyFavs ? favoritesAnimes : topAnimes;

  //esto nunca se da, pero me salta el linter
  if (!animeListRendered) {
    return <h1>Error</h1>;
  }

  return (
    <section className="anime-list-container">
      <Pagination
        currentPage={currentPage!}
        existNextPage={existNextPage ?? false}
        isLoading={isLoading}
        setCurrentPage={setCurrentPage}
      />
      {isLoading ? (
        <Loading />
      ) : (
        <div className="anime-list">
          {animeListRendered.length > 0 ? (
            animeListRendered?.map((anime) => (
              <AnimeItem key={anime.mal_id} anime={anime} />
            ))
          ) : (
            <h1>
              {showOnlyFavs
                ? "No tienes animes favoritos!"
                : "No existen animes"}
            </h1>
          )}
        </div>
      )}
    </section>
  );
}
