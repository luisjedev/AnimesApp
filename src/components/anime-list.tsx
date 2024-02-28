import { useAnimesContext } from "../contexts/useAnimesContext";
import { useGetTopAnimes } from "../hooks/useGetTopAnimes";
import { AnimeItem } from "./anime-item/anime-item";

export function AnimeList() {
  const { favoritesAnimes, showOnlyFavs } = useAnimesContext();
  const { topAnimes, isError, error, isLoading } = useGetTopAnimes();

  if (isLoading) {
    return <h1>Cargando..</h1>;
  }

  if (isError) {
    return <h1>{error}</h1>;
  }

  if (!topAnimes) {
    return <h1>No se han podido recuperar animes</h1>;
  }

  if (showOnlyFavs) {
    return (
      <div className="anime-list">
        {favoritesAnimes.length > 0 ? (
          favoritesAnimes?.map((anime) => (
            <AnimeItem key={anime.mal_id} anime={anime} />
          ))
        ) : (
          <h2>¡No has agregado ningún anime a favoritos todavía!</h2>
        )}
      </div>
    );
  }

  return (
    <div className="anime-list">
      {topAnimes.length > 0 ? (
        topAnimes?.map((anime) => (
          <AnimeItem key={anime.mal_id} anime={anime} />
        ))
      ) : (
        <h1>No hay animes disponibles</h1>
      )}
    </div>
  );
}
