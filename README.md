# Mood2Movie MVP

A beginner-friendly mood-based movie recommendation web app built with Next.js, Tailwind CSS and TMDB.

## What it does

- Lets a user choose a mood
- Converts that mood into movie genres and filters
- Fetches matching movies from TMDB's Discover Movie endpoint
- Shows posters, ratings, descriptions and TMDB links

## Why web first?

A web app is the fastest path for this product. You can test the idea, share a link, learn what users click, and only build a mobile app later if people actually want it.

## Setup

1. Install Node.js.
2. Create a free TMDB account.
3. Get your TMDB API Read Access Token.
4. Copy `.env.example` to `.env.local`.
5. Add your token:

```bash
TMDB_ACCESS_TOKEN=your_token_here
```

6. Install dependencies:

```bash
npm install
```

7. Start the dev server:

```bash
npm run dev
```

8. Open:

```bash
http://localhost:3000
```

## Important files

- `app/page.tsx` - main homepage UI
- `app/lib/moods.ts` - mood-to-movie logic
- `app/api/movies/route.ts` - secure server-side TMDB API call
- `app/components/MovieCard.tsx` - reusable movie card

## Next product improvements

1. Add free-text mood input: "I want something sad but hopeful."
2. Add streaming provider links.
3. Add save/watchlist feature.
4. Add shareable mood pages like `/mood/cheerful`.
5. Add analytics to see which moods users actually use.
