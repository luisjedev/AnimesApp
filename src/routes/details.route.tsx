import { useParams } from "react-router-dom";
import { useGetAnime } from "../hooks/useGetAnime";
import { Loading } from "../components/loading";

export function Details() {
  const { animeId } = useParams<{ animeId: string }>();
  const { anime, error, isError, isLoading } = useGetAnime(animeId!);
  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return <p>{error}</p>;
  }

  if (!anime) {
    return <p>No existe información del anime seleccionado</p>;
  }

  return (
    <section>
      <h1>{anime.duration}</h1>
    </section>
  );
}
