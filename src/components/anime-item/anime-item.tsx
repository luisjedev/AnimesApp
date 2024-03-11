import "./anime-item.css";
import FavImg from "../../assets/fav-icon.png";
import FillFavImg from "../../assets/fill-fav-icon.png";
import { useEffect, useState } from "react";
import { Anime } from "../../interfaces/anime";
import { useFavAnimesContext } from "../../hooks/useFavAnimesContext";

type AnimeItemProps = {
  anime: Anime;
};

export function AnimeItem({ anime }: Readonly<AnimeItemProps>) {
  const [isFavorite, setIsFavorite] = useState(false);

  const { changeFavorites, favoritesAnimes } = useFavAnimesContext();

  useEffect(() => {
    if (anime && favoritesAnimes.length > 0) {
      favoritesAnimes.some((animeItem) => {
        if (animeItem.mal_id == anime.mal_id) {
          setIsFavorite(true);
        }
      });
    }
  }, []);

  function onChangeIsFavorite() {
    setIsFavorite((prev) => !prev);
    changeFavorites(anime);
  }

  if (!anime) {
    return <h3>Error al cargar anime</h3>;
  }

  return (
    <article className="anime-card-container">
      <div className="anime-art-container">
        <img src={anime.images.webp.image_url} alt={anime.title} />
      </div>
      <footer className="anime-card-footer">
        <div className="anime-card-details">
          <h2 className="anime-title">{anime.title}</h2>
          <p className="anime-categories">{anime.genres[0]?.name}</p>
        </div>
        <img
          className="favorite-img"
          src={isFavorite ? FillFavImg : FavImg}
          alt="favorites icon"
          onClick={() => onChangeIsFavorite()}
        />
      </footer>
    </article>
  );
}
