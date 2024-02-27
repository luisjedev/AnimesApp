import { AnimeFilter } from "../components/anime-filter";
import FavImg from "../assets/fav-icon.png";
import FillFavImg from "../assets/fill-fav-icon.png";
import Logo from "../assets/logo.png";
import { useEffect, useState } from "react";
import { useAnimesContext } from "../contexts/useAnimesContext";

export function Header() {
  const [showFavorites, setShowFavorites] = useState(false);

  const { changeShowedAnimes } = useAnimesContext();

  useEffect(() => {
    changeShowedAnimes(showFavorites);
  }, [showFavorites]);

  return (
    <header className="header-container">
      <img src={Logo} alt="bohanon logo" className="logo" />
      <div className="filters-container">
        <AnimeFilter />
        <img
          className="favorite-img"
          src={showFavorites ? FillFavImg : FavImg}
          alt="favorites icon"
          onClick={() => setShowFavorites((prev) => !prev)}
        />
      </div>
    </header>
  );
}
