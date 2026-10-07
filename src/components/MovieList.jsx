import MovieCard from "./MovieCard";

function MovieList({ movies, favorites, ratings, onSelect, onToggleFavorite }) {
  if (movies.length === 0) {
    return (
      <p className="empty">
        No encontramos películas con esos criterios. Prueba con otro título o quita algún filtro.
      </p>
    );
  }

  return (
    <div className="grid">
      {movies.map((movie) => (
        <MovieCard
          key={movie.id}
          movie={movie}
          isFavorite={favorites.includes(movie.id)}
          userRating={ratings[movie.id] || 0}
          onSelect={onSelect}
          onToggleFavorite={onToggleFavorite}
        />
      ))}
    </div>
  );
}

export default MovieList;
