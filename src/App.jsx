import { useState } from "react";
import movies from "./data/movies";
import { filterMovies } from "./utils/filterMovies";
import Header from "./components/Header";
import Filters from "./components/Filters";
import MovieList from "./components/MovieList";
import MovieDetail from "./components/MovieDetail";
import Favorites from "./components/Favorites";

// Valores derivados de los datos (no cambian, se calculan una sola vez)
const genres = [...new Set(movies.map((m) => m.genre))].sort();
const years = [...new Set(movies.map((m) => m.year))].sort((a, b) => b - a);

function App() {
  const [query, setQuery] = useState("");
  const [filters, setFilters] = useState({
    genre: "all",
    year: "all",
    minRating: 0,
    onlyFavorites: false,
  });
  const [favorites, setFavorites] = useState([]); // solo IDs
  const [ratings, setRatings] = useState({}); // { [id]: 1-5 }
  const [selectedId, setSelectedId] = useState(null);

  const toggleFavorite = (id) =>
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((favId) => favId !== id) : [...prev, id]
    );

  const rateMovie = (id, value) =>
    setRatings((prev) => ({ ...prev, [id]: value }));

  const visibleMovies = filterMovies(movies, query, filters, favorites);
  const favoriteMovies = movies.filter((m) => favorites.includes(m.id));
  const selectedMovie = movies.find((m) => m.id === selectedId);

  return (
    <>
      <Header query={query} onQueryChange={setQuery} />

      <main className="layout">
        <section>
          <Filters
            filters={filters}
            genres={genres}
            years={years}
            onFiltersChange={setFilters}
          />
          <MovieList
            movies={visibleMovies}
            favorites={favorites}
            ratings={ratings}
            onSelect={setSelectedId}
            onToggleFavorite={toggleFavorite}
          />
        </section>

        <Favorites
          movies={favoriteMovies}
          onSelect={setSelectedId}
          onToggleFavorite={toggleFavorite}
        />
      </main>

      {selectedMovie && (
        <MovieDetail
          movie={selectedMovie}
          isFavorite={favorites.includes(selectedMovie.id)}
          userRating={ratings[selectedMovie.id] || 0}
          onClose={() => setSelectedId(null)}
          onToggleFavorite={toggleFavorite}
          onRate={rateMovie}
        />
      )}
    </>
  );
}

export default App;
