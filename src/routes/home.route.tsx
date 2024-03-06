import { AnimeList } from "../components/anime-list";
import { useGetTopAnimes } from "../hooks/useGetTopAnimes";

export function Home() {
  const {
    topAnimes,
    currentPage,
    error,
    existNextPage,
    isError,
    isLoading,
    setCurrentPage,
  } = useGetTopAnimes();

  return (
    <main className="anime-list-container">
      <AnimeList />
    </main>
  );
}
