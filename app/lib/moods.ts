export type Mood = {
  id: string;
  label: string;
  emoji: string;
  description: string;
  genreIds: number[];
  keywords: string[];
  sortBy: string;
  voteAverageGte: number;
};

// TMDB genre ids: https://developer.themoviedb.org/reference/genre-movie-list
export const moods: Mood[] = [
  {
    id: 'cheerful',
    label: 'Cheerful',
    emoji: '😊',
    description: 'Light, warm, upbeat films when you want something easy to enjoy.',
    genreIds: [35, 10751, 12],
    keywords: ['feel-good', 'uplifting', 'fun'],
    sortBy: 'popularity.desc',
    voteAverageGte: 6.5,
  },
  {
    id: 'reflective',
    label: 'Reflective',
    emoji: '🌙',
    description: 'Thoughtful dramas and quiet stories for a slower mood.',
    genreIds: [18, 36],
    keywords: ['introspective', 'moving', 'meaningful'],
    sortBy: 'vote_average.desc',
    voteAverageGte: 7,
  },
  {
    id: 'gloomy',
    label: 'Gloomy',
    emoji: '🌧️',
    description: 'Melancholic, atmospheric films that sit with the mood instead of fighting it.',
    genreIds: [18, 10749],
    keywords: ['melancholic', 'emotional', 'slow-burn'],
    sortBy: 'vote_average.desc',
    voteAverageGte: 6.7,
  },
  {
    id: 'humorous',
    label: 'Humorous',
    emoji: '😂',
    description: 'Comedies and playful chaos when you need a reset.',
    genreIds: [35],
    keywords: ['funny', 'chaotic', 'easy watch'],
    sortBy: 'popularity.desc',
    voteAverageGte: 6.2,
  },
  {
    id: 'romantic',
    label: 'Romantic',
    emoji: '❤️',
    description: 'Romance, longing, chemistry, and the occasional grand gesture.',
    genreIds: [10749, 35, 18],
    keywords: ['chemistry', 'romance', 'date-night'],
    sortBy: 'popularity.desc',
    voteAverageGte: 6.4,
  },
  {
    id: 'weird',
    label: 'Weird',
    emoji: '🌀',
    description: 'Strange, surreal, offbeat films when normal feels boring.',
    genreIds: [14, 878, 9648],
    keywords: ['surreal', 'odd', 'mind-bending'],
    sortBy: 'popularity.desc',
    voteAverageGte: 6.5,
  },
  {
    id: 'sleepy',
    label: 'Sleepy',
    emoji: '😴',
    description: 'Gentle, low-stress movies for winding down.',
    genreIds: [16, 10751, 14],
    keywords: ['cozy', 'soft', 'low-stakes'],
    sortBy: 'vote_average.desc',
    voteAverageGte: 6.7,
  },
  {
    id: 'angry',
    label: 'Angry',
    emoji: '🔥',
    description: 'Action, revenge, justice, and high-energy films for catharsis.',
    genreIds: [28, 53, 80],
    keywords: ['revenge', 'intense', 'cathartic'],
    sortBy: 'popularity.desc',
    voteAverageGte: 6.3,
  },
  {
    id: 'brave',
    label: 'Brave',
    emoji: '🛡️',
    description: 'Adventure and heroic stories when you want to feel bigger than your problems.',
    genreIds: [12, 28, 36],
    keywords: ['heroic', 'adventure', 'epic'],
    sortBy: 'popularity.desc',
    voteAverageGte: 6.5,
  },
  {
    id: 'curious',
    label: 'Curious',
    emoji: '🔎',
    description: 'Mystery, sci-fi and documentaries for when your brain wants a puzzle.',
    genreIds: [9648, 878, 99],
    keywords: ['mystery', 'ideas', 'puzzle'],
    sortBy: 'vote_count.desc',
    voteAverageGte: 6.6,
  },
  {
    id: 'nostalgic',
    label: 'Nostalgic',
    emoji: '📼',
    description: 'Comfort movies, family stories and old-school adventure energy.',
    genreIds: [10751, 12, 35],
    keywords: ['comfort', 'classic', 'warm'],
    sortBy: 'popularity.desc',
    voteAverageGte: 6.5,
  },
  {
    id: 'tense',
    label: 'Tense',
    emoji: '⚡',
    description: 'Thrillers and crime films when you want edge-of-seat energy.',
    genreIds: [53, 80, 9648],
    keywords: ['suspense', 'twist', 'gripping'],
    sortBy: 'popularity.desc',
    voteAverageGte: 6.6,
  },
];

export function getMoodById(id: string) {
  return moods.find((mood) => mood.id === id);
}
