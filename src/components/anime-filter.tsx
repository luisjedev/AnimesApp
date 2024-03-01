import SearchIcon from "../assets/lupa.png";

export function AnimeFilter() {
  return (
    <div className="anime-filter-container">
      <div className="input-container">
        <input
          autoComplete="off"
          name="name"
          className="anime-filter-input"
          type="text"
          placeholder="one piece..."
        ></input>
      </div>
      <img src={SearchIcon} alt="Search icon" className="search-img" />
    </div>
  );
}
