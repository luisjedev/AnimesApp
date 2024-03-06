import { Anime } from "../interfaces/anime";
import { AnimeItem } from "./anime-item/anime-item";

type AnimeListProps = {
  animes: Anime[];
};

export function AnimeList({ animes }: AnimeListProps) {
  return (
    <section className="anime-list-container">
      <div className="anime-list">
        {animes.length > 0 ? (
          animes?.map((anime) => <AnimeItem key={anime.mal_id} anime={anime} />)
        ) : (
          <h2>No existen animes</h2>
        )}
      </div>
    </section>
  );
}
