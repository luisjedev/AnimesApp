import { useAnimesContext } from "../contexts/useAnimesContext";
import { AnimeItem } from "./anime-item/anime-item";

export function AnimeList() {
  const { animes, isLoading, favoritesAnimes, showOnlyFavs } =
    useAnimesContext();

  if (isLoading) {
    return <h2>Loading..</h2>;
  }

  if (!animes && !showOnlyFavs) {
    return <h2>No se han encontrado animes</h2>;
  }

  if (showOnlyFavs && !favoritesAnimes) {
    return <h2>No se han podido cargar animes</h2>;
  }

  return (
    <div className="anime-list">
      {showOnlyFavs
        ? favoritesAnimes.length > 0 &&
          favoritesAnimes?.map((anime) => (
            <AnimeItem key={anime.mal_id} anime={anime} />
          ))
        : animes.length > 0 &&
          animes?.map((anime) => (
            <AnimeItem key={anime.mal_id} anime={anime} />
          ))}
    </div>
  );
}
