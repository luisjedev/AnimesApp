import { AnimeFilter } from "../components/anime-filter";
import FavImg from "../assets/fav-icon.png";
import FillFavImg from "../assets/fill-fav-icon.png";
import Logo from "../assets/logo.png";
import { useAnimesContext } from "../contexts/useAnimesContext";

export function Header() {
  const { changeShowedAnimes, showOnlyFavs } = useAnimesContext();

  return (
    <header className="header-container">
      <img src={Logo} alt="bohanon logo" className="logo" />
      <div className="filters-container">
        <AnimeFilter />
        <img
          className="favorite-img"
          src={showOnlyFavs ? FillFavImg : FavImg}
          alt="favorites icon"
          onClick={() => changeShowedAnimes(!showOnlyFavs)}
        />
      </div>
    </header>
  );
}
