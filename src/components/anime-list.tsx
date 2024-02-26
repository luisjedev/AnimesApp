import { useAnimesContext } from "../contexts/useAnimesContext";
import { AnimeItem } from "./anime-item/anime-item";

export function AnimeList() {
  const { animes, isLoading } = useAnimesContext();

  if (isLoading) {
    return <h2>Loading..</h2>;
  }

  if (!animes) {
    return <h2>No se han encontrado animes</h2>;
  }

  console.log(animes);

  return (
    <div className="anime-list">
      {animes?.length > 0 &&
        animes?.map((anime) => <AnimeItem key={anime.mal_id} anime={anime} />)}
    </div>
  );
}
