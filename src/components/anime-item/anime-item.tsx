import "./anime-item.css";
import FavImg from "../../assets/fav-icon.png";
import FillFavImg from "../../assets/fill-fav-icon.png";
import { useState } from "react";
import { Anime } from "../../interfaces/anime";

type AnimeItemProps = {
  anime: Anime;
};

export function AnimeItem({ anime }: AnimeItemProps) {
  const [isFavorite, setIsFavorite] = useState(false);
  return (
    <article className="anime-card-container">
      <div className="anime-art-container">
        <img src={anime.images.webp.large_image_url} alt={anime.title} />
      </div>
      <footer className="anime-card-footer">
        <div className="anime-card-details">
          <h2 className="anime-title">{anime.title}</h2>
          <p className="anime-categories">{anime.genres[0].name}</p>
        </div>
        <img
          className="favorite-img"
          src={isFavorite ? FillFavImg : FavImg}
          alt="favorites icon"
          onClick={() => setIsFavorite((prev) => !prev)}
        />
      </footer>
    </article>
  );
}
