function Favorites({ movies, onSelect, onToggleFavorite }) {
  return (
    <aside className="favorites">
      <h2>Mis favoritas ({movies.length})</h2>

      {movies.length === 0 ? (
        <p className="meta">Toca el corazón de una película para guardarla aquí.</p>
      ) : (
        <ul>
          {movies.map((movie) => (
            <li key={movie.id}>
              <img src={movie.image} alt="" />
              <button className="link" onClick={() => onSelect(movie.id)}>{movie.title}</button>
              <button
                className="remove"
                onClick={() => onToggleFavorite(movie.id)}
                aria-label={`Quitar ${movie.title} de favoritos`}
              >
                ✕
              </button>
            </li>
          ))}
        </ul>
      )}
    </aside>
  );
}

export default Favorites;
