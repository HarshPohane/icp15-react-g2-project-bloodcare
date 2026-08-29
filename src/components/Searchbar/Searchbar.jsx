import searchIcon from "../icon-images/searchbar.png";
import "./Searchbar.css";

function Searchbar({ search, setSearch, placeholder }) {
  return (
    <div className="search-bar">
      <img src={searchIcon} alt="search" className="search-icon" />

      <input
        type="text"
        placeholder={placeholder || "Search..."}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
}

export default Searchbar;