import { NextResponse } from 'next/server';
import { getMoodById } from '../../lib/moods';

const TMDB_BASE_URL = 'https://api.themoviedb.org/3';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const moodId = searchParams.get('mood') ?? 'cheerful';
  const mood = getMoodById(moodId);

  if (!mood) {
    return NextResponse.json({ error: 'Unknown mood.' }, { status: 400 });
  }

  const token = process.env.TMDB_ACCESS_TOKEN;

  if (!token) {
    return NextResponse.json(
      { error: 'Missing TMDB_ACCESS_TOKEN. Add it to your .env.local file.' },
      { status: 500 },
    );
  }

  const params = new URLSearchParams({
    include_adult: 'false',
    include_video: 'false',
    language: 'en-US',
    page: String(Math.floor(Math.random() * 3) + 1),
    sort_by: mood.sortBy,
    'vote_average.gte': String(mood.voteAverageGte),
    'vote_count.gte': '300',
    with_genres: mood.genreIds.join('|'),
  });

  const response = await fetch(`${TMDB_BASE_URL}/discover/movie?${params.toString()}`, {
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${token}`,
    },
    next: { revalidate: 3600 },
  });

  if (!response.ok) {
    return NextResponse.json(
      { error: 'Could not fetch movies from TMDB.' },
      { status: response.status },
    );
  }

  const data = await response.json();
  const movies = (data.results ?? [])
    .filter((movie: any) => movie.poster_path && movie.overview)
    .slice(0, 12)
    .map((movie: any) => ({
      id: movie.id,
      title: movie.title,
      overview: movie.overview,
      posterPath: movie.poster_path,
      releaseDate: movie.release_date,
      voteAverage: movie.vote_average,
      tmdbUrl: `https://www.themoviedb.org/movie/${movie.id}`,
    }));

  return NextResponse.json({ mood, movies });
}
