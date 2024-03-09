import { AnimeList } from "../components/anime-list";
import { Loading } from "../components/loading";
import { Pagination } from "../components/pagination";
import { useGetTopAnimes } from "../hooks/useGetTopAnimes";

export function Home() {
  const {
    animes,
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

  if (animes)
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
        ) : animes && animes.length > 0 ? (
          <AnimeList animes={animes} />
        ) : (
          <h2>No hay animes existentes</h2>
        )}
      </main>
    );
}
