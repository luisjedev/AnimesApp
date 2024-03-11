import { AnimeList } from "../components/anime-list";
import { Loading } from "../components/loading";
import { Pagination } from "../components/pagination";
import { useGetAnimes } from "../hooks/useGetAnimes";

export function Home() {
  const {
    animes,
    currentPage,
    error,
    existNextPage,
    isError,
    isLoading,
    setCurrentPage,
  } = useGetAnimes();

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
        {isLoading ? <Loading /> : <AnimeList animes={animes} />}
      </main>
    );
}
