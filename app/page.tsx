'use client';

import { useEffect, useMemo, useState } from 'react';
import MovieCard from './components/MovieCard';
import { moods } from './lib/moods';

type Movie = {
  id: number;
  title: string;
  overview: string;
  posterPath: string;
  releaseDate: string;
  voteAverage: number;
  tmdbUrl: string;
};

type ApiResponse = {
  mood: (typeof moods)[number];
  movies: Movie[];
  error?: string;
};

export default function Home() {
  const [selectedMood, setSelectedMood] = useState('cheerful');
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const mood = useMemo(
    () => moods.find((item) => item.id === selectedMood) ?? moods[0],
    [selectedMood],
  );

  async function loadMovies(moodId: string) {
    setLoading(true);
    setError('');

    try {
      const response = await fetch(`/api/movies?mood=${moodId}`);
      const data: ApiResponse = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Something went wrong.');
      }

      setMovies(data.movies);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong.');
      setMovies([]);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadMovies(selectedMood);
  }, [selectedMood]);

  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(120,119,198,0.28),_transparent_35%),#0b0b12] px-5 py-8 text-white sm:px-8 lg:px-12">
      <section className="mx-auto max-w-7xl">
        <div className="mb-10 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <p className="mb-4 inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/70">
              Movie finder
            </p>
            <h1 className="text-5xl font-black tracking-tight text-white sm:text-7xl">
              What are you in the mood to watch?
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-white/65">
              Pick a mood and get a curated set of films that match your current energy.
              This is the first MVP version: simple, fast, and shippable.
            </p>
          </div>

          <button
            onClick={() => loadMovies(selectedMood)}
            className="rounded-2xl bg-white px-5 py-3 font-semibold text-black transition hover:scale-[1.02]"
          >
            Shuffle Shuffle!
          </button>
        </div>

        <div className="mb-8 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {moods.map((item) => {
            const isSelected = item.id === selectedMood;
            return (
              <button
                key={item.id}
                onClick={() => setSelectedMood(item.id)}
                className={`rounded-3xl border p-4 text-left transition ${
                  isSelected
                    ? 'border-white bg-white text-black'
                    : 'border-white/10 bg-white/[0.04] text-white hover:bg-white/[0.08]'
                }`}
              >
                <div className="text-3xl">{item.emoji}</div>
                <div className="mt-3 font-semibold">{item.label}</div>
              </button>
            );
          })}
        </div>

        <div className="mb-8 rounded-3xl border border-white/10 bg-white/[0.04] p-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="text-2xl font-bold">
                {mood.emoji} {mood.label} picks
              </h2>
              <p className="mt-2 text-white/65">{mood.description}</p>
            </div>
            <div className="flex flex-wrap gap-2">
              {mood.keywords.map((keyword) => (
                <span key={keyword} className="rounded-full bg-white/10 px-3 py-1 text-sm text-white/70">
                  {keyword}
                </span>
              ))}
            </div>
          </div>
        </div>

        {error && (
          <div className="mb-8 rounded-3xl border border-red-400/30 bg-red-500/10 p-5 text-red-100">
            {error}
          </div>
        )}

        {loading ? (
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {Array.from({ length: 8 }).map((_, index) => (
              <div key={index} className="h-[520px] animate-pulse rounded-3xl bg-white/[0.06]" />
            ))}
          </div>
        ) : (
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {movies.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </div>
        )}
      </section>
    </main>
  );
}
