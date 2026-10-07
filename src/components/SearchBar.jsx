function SearchBar({ query, onQueryChange }) {
  return (
    <input
      className="search-bar"
      type="search"
      placeholder="Buscar película por título"
      aria-label="Buscar película por título"
      value={query}
      onChange={(e) => onQueryChange(e.target.value)}
    />
  );
}

export default SearchBar;
