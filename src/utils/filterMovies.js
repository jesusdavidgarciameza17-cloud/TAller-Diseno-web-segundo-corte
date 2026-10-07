// Aplica buscador + filtros combinados sobre la lista de películas.
export function filterMovies(movies, query, filters, favorites) {
  const text = query.trim().toLowerCase();

  return movies.filter((movie) => {
    const matchesQuery = movie.title.toLowerCase().includes(text);
    const matchesGenre = filters.genre === "all" || movie.genre === filters.genre;
    const matchesYear = filters.year === "all" || String(movie.year) === filters.year;
    const matchesRating = movie.rating >= filters.minRating;
    const matchesFavorite = !filters.onlyFavorites || favorites.includes(movie.id);

    return matchesQuery && matchesGenre && matchesYear && matchesRating && matchesFavorite;
  });
}
