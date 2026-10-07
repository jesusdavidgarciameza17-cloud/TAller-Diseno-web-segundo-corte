import SearchBar from "./SearchBar";

function Header({ query, onQueryChange }) {
  return (
    <header className="header">
      <h1 className="logo">El rinconcito de películas de Jesús</h1>
      <SearchBar query={query} onQueryChange={onQueryChange} />
    </header>
  );
}

export default Header;
