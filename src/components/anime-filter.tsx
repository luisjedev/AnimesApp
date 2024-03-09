import { useState } from "react";
import SearchIcon from "../assets/lupa.png";
import { isNewRequestAllowed } from "../utils/apiControl";
import { useSearchParams } from "react-router-dom";

export function AnimeFilter() {
  const [lastRequestTime, setLastRequestTime] = useState(0);
  const [animeTitle, setAnimeTitle] = useState("");

  const [_, setSearchParams] = useSearchParams();

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (isNewRequestAllowed(lastRequestTime)) {
      if (animeTitle !== "") {
        setLastRequestTime(new Date().getTime());

        setSearchParams({ title: animeTitle });
      } else {
        setSearchParams({});
      }
    }
  }

  return (
    <div className="anime-filter-container">
      <div className="input-container">
        <form onSubmit={handleSubmit}>
          <input
            autoComplete="off"
            name="animeTitle"
            className="anime-filter-input"
            type="text"
            value={animeTitle}
            placeholder="one piece..."
            onChange={(e) => setAnimeTitle(e.target.value)}
          ></input>
          <img src={SearchIcon} alt="Search icon" className="search-img" />
          <button hidden></button>
        </form>
      </div>
    </div>
  );
}
