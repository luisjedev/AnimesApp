import { AnimeFilter } from "../components/anime-filter";
import Logo from "../assets/logo.png";
import { useLocation, useNavigate } from "react-router-dom";

export function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location);

  return (
    <header className="header-container">
      <div>
        <button className="button-impostor" onClick={() => navigate("/")}>
          <img src={Logo} alt="bohanon_logo" className="logo" />
        </button>
        <nav className="header-navbar">
          <ul>
            <button
              className={`${location.pathname == "/favorites" && "active"}`}
              onClick={() => navigate("/favorites")}
            >
              Favorites
            </button>
          </ul>
        </nav>
      </div>

      {location.pathname == "/" && (
        <div className="filters-container">
          <AnimeFilter />
        </div>
      )}
    </header>
  );
}
