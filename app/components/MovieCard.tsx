type Movie = {
  id: number;
  title: string;
  overview: string;
  posterPath: string;
  releaseDate: string;
  voteAverage: number;
  tmdbUrl: string;
};

export default function MovieCard({ movie }: { movie: Movie }) {
  const year = movie.releaseDate ? new Date(movie.releaseDate).getFullYear() : 'Unknown';
  const posterUrl = `https://image.tmdb.org/t/p/w500${movie.posterPath}`;

  return (
    <a
      href={movie.tmdbUrl}
      target="_blank"
      rel="noreferrer"
      className="group overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] shadow-glow transition hover:-translate-y-1 hover:bg-white/[0.07]"
    >
      <div className="aspect-[2/3] overflow-hidden bg-white/5">
        <img
          src={posterUrl}
          alt={`${movie.title} poster`}
          className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
        />
      </div>
      <div className="space-y-3 p-4">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="line-clamp-2 text-lg font-semibold text-white">{movie.title}</h3>
            <p className="text-sm text-white/50">{year}</p>
          </div>
          <span className="rounded-full bg-white/10 px-2.5 py-1 text-sm font-medium text-white">
            {movie.voteAverage.toFixed(1)}
          </span>
        </div>
        <p className="line-clamp-4 text-sm leading-6 text-white/60">{movie.overview}</p>
      </div>
    </a>
  );
}
