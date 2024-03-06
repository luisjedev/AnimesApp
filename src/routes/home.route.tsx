import { AnimeList } from "../components/anime-list";
import { Loading } from "../components/loading";
import { Pagination } from "../components/pagination";
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

  if (isError) {
    return <p>{error}</p>;
  }

  if (topAnimes)
    return (
      <main className="anime-list-container">
        <Pagination
          currentPage={currentPage ?? 1}
          existNextPage={existNextPage ?? false}
          isLoading={isLoading}
          setCurrentPage={setCurrentPage}
        />
        {isLoading ? (
          <Loading />
        ) : topAnimes && topAnimes.length > 0 ? (
          <AnimeList animes={topAnimes} />
        ) : (
          <h2>No hay animes existentes</h2>
        )}
      </main>
    );
}
