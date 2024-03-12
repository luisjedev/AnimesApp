import { useParams } from "react-router-dom";
import { useGetAnime } from "../hooks/useGetAnime";
import { Loading } from "../components/loading";
import fillFavIcon from "../assets/fill-fav-icon.png";

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
    <div className="details-container">
      <header className="details-header">
        <h5 className="anime-status">{anime.status}</h5>
        <div className="anime-score-container">
          <h5 className="anime-score">{anime.score}</h5>
          <img className="anime-score-img" src={fillFavIcon} alt="score img" />
        </div>
      </header>
      <section className="media-section">
        <div className="media-img-container">
          <img
            className="media-img"
            src={anime.images.webp.large_image_url}
            alt="anime img"
          />
        </div>
        <div className="media-trailer-container">
          <iframe
            className="media-trailer"
            title="anime trailer"
            src={anime.trailer.embed_url}
            allowFullScreen
            autoFocus
          ></iframe>
        </div>
      </section>
      <main className="details-main-container">
        <div className="details-main-header">
          <h1 className="details-title">{anime.title}</h1>
          <div className="details-genres-list-container">
            {anime.genres.length > 0 &&
              anime.genres.map((genre) => (
                <p className="details-genre" key={genre.name}>
                  {genre.name}
                </p>
              ))}
          </div>
        </div>
        <div className="details-main-description-container">
          <p className="main-description">{anime.synopsis}</p>
        </div>
      </main>
    </div>
  );
}
