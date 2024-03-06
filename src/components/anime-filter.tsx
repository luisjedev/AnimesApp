import { useState } from "react";
import SearchIcon from "../assets/lupa.png";
import { useGetAnimesByName } from "../hooks/useGetAnimesByName";
import { isNewRequestAllowed } from "../utils/apiControl";

export function AnimeFilter() {
  const [lastRequestTime, setLastRequestTime] = useState(0);
  const {
    setName,
    isError,
    error,
    isLoading,
    animes,
    name,
    getFilteredAnimes,
  } = useGetAnimesByName();

  function onNameChange(filteredName: string) {
    setName(filteredName);
    if (isNewRequestAllowed(lastRequestTime)) {
      setLastRequestTime(new Date().getTime());
      console.log(getFilteredAnimes());
    }
  }

  return (
    <div className="anime-filter-container">
      <div className="input-container">
        <input
          autoComplete="off"
          name="name"
          className="anime-filter-input"
          type="text"
          value={name}
          placeholder="one piece..."
          onChange={(e) => onNameChange(e.target.value)}
        ></input>
      </div>
      <img src={SearchIcon} alt="Search icon" className="search-img" />
    </div>
  );
}
