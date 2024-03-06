import { AnimeFilter } from "../components/anime-filter";
import Logo from "../assets/logo.png";
import { useNavigate } from "react-router-dom";

export function Header() {
  const navigate = useNavigate();

  return (
    <header className="header-container">
      <div>
        <img
          src={Logo}
          alt="bohanon_logo"
          className="logo"
          onClick={() => navigate("/")}
        />
        <nav className="header-navbar">
          <ul>
            <li onClick={() => navigate("/favorites")}>Favoritos</li>
          </ul>
        </nav>
      </div>

      <div className="filters-container">
        <AnimeFilter />
      </div>
    </header>
  );
}
