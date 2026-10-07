const STARS = [1, 2, 3, 4, 5];

function StarRating({ value, onRate }) {
  return (
    <div className="stars" role="group" aria-label="Tu calificación">
      {STARS.map((star) => (
        <button
          key={star}
          className={star <= value ? "star on" : "star"}
          onClick={() => onRate(star)}
          aria-label={`${star} ${star === 1 ? "estrella" : "estrellas"}`}
          aria-pressed={star <= value}
        >
          ★
        </button>
      ))}
    </div>
  );
}

export default StarRating;
