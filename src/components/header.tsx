import { AnimeFilter } from "../components/anime-filter";
import FavImg from "../assets/fav-icon.png";
import FillFavImg from "../assets/fill-fav-icon.png";
import Logo from "../assets/logo.png";
import { useNavigate } from "react-router-dom";
import { useFavAnimesContext } from "../hooks/useFavAnimesContext";

export function Header() {
  const { changeShowedAnimes, showOnlyFavs } = useFavAnimesContext();
  const navigate = useNavigate();

  function resetPage() {
    changeShowedAnimes(false);
    navigate("/");
  }

  return (
    <header className="header-container">
      <img
        src={Logo}
        alt="bohanon_logo"
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
