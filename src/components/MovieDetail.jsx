import { useEffect } from "react";
import StarRating from "./StarRating";

function MovieDetail({ movie, isFavorite, userRating, onClose, onToggleFavorite, onRate }) {
  // Cerrar con la tecla Escape
  useEffect(() => {
    const handleKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose]);

  return (
    <div className="overlay" onClick={onClose}>
      <div
        className="detail"
        role="dialog"
        aria-modal="true"
        aria-label={`Detalle de ${movie.title}`}
        onClick={(e) => e.stopPropagation()}
      >
        <button className="close" onClick={onClose} aria-label="Cerrar detalle">✕</button>
        <img src={movie.image} alt={`Póster de ${movie.title}`} />

        <div className="detail-info">
          <h2>{movie.title}</h2>
          <p className="meta">{movie.genre} · {movie.year} · ★ {movie.rating}</p>
          <p>{movie.description}</p>

          <h3>Tu calificación</h3>
          <StarRating value={userRating} onRate={(value) => onRate(movie.id, value)} />
          <p className="meta">{userRating > 0 ? `Le diste ${userRating}/5` : "Aún no la calificas"}</p>

          <button className="btn" onClick={() => onToggleFavorite(movie.id)}>
            {isFavorite ? "♥ Quitar de favoritos" : "♡ Agregar a favoritos"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default MovieDetail;
