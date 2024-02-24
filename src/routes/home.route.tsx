import { AnimeFilter } from "../components/anime-filter";

export function Home() {
  return (
    <main className="home-container">
      <header className="home-header-container">
        <nav className="home-navbar">
          <ul className="home-navbar-list">
            <li className="home-navbar-item">Favorites</li>
          </ul>
        </nav>
        <AnimeFilter />
      </header>
      <section className="home-anime-list-container"></section>
    </main>
  );
}
