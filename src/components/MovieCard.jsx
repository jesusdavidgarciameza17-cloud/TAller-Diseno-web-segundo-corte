function MovieCard({ movie, isFavorite, userRating, onSelect, onToggleFavorite }) {
  return (
    <article className="card">
      <img src={movie.image} alt={`Póster de ${movie.title}`} loading="lazy" />

      <button
        className={`fav-btn ${isFavorite ? "active" : ""}`}
        onClick={() => onToggleFavorite(movie.id)}
        aria-pressed={isFavorite}
        aria-label={isFavorite ? `Quitar ${movie.title} de favoritos` : `Agregar ${movie.title} a favoritos`}
      >
        {isFavorite ? "♥" : "♡"}
      </button>

      <div className="card-body">
        <h3>{movie.title}</h3>
        <p className="meta">{movie.genre} · {movie.year} · ★ {movie.rating}</p>
        <p className="description">{movie.description}</p>
        {userRating > 0 && <p className="my-rating">Tu nota: {userRating}/5</p>}
        <button className="btn" onClick={() => onSelect(movie.id)}>Ver detalle</button>
      </div>
    </article>
  );
}

export default MovieCard;
