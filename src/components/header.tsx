import { AnimeFilter } from "../components/anime-filter";
import FavImg from "../assets/fav-icon.png";
import FillFavImg from "../assets/fill-fav-icon.png";
import Logo from "../assets/logo.png";
import { useAnimesContext } from "../contexts/useAnimesContext";
import { useNavigate } from "react-router-dom";

export function Header() {
  const { changeShowedAnimes, showOnlyFavs } = useAnimesContext();
  const navigate = useNavigate();

  function resetPage() {
    changeShowedAnimes(false);
    navigate("/");
  }

  return (
    <header className="header-container">
      <img
        src={Logo}
        alt="bohanon logo"
        className="logo"
        onClick={() => resetPage()}
      />
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
