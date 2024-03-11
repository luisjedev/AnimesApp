import { AnimeList } from "../components/anime-list";
import { useFavAnimesContext } from "../hooks/useFavAnimesContext";

export function Favorites() {
  const { favoritesAnimes } = useFavAnimesContext();

  return (
    <main className="anime-list-container">
      <h1 className="section-title">Favorites animes</h1>
      {favoritesAnimes && favoritesAnimes.length > 0 ? (
        <AnimeList animes={favoritesAnimes} />
      ) : (
        <h3>Todavía no tienes Animes favoritos</h3>
      )}
    </main>
  );
}
