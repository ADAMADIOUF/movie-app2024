
export const BASE_URL = 'https://api.themoviedb.org/3'
export const MOVIE_URL = `${BASE_URL}/movie/popular?api_key=${process.env.REACT_APP_API_KEY}`
export const SINGLE_MOVIE_URL = (movieId) =>
  `${BASE_URL}/movie/${movieId}?api_key=${process.env.REACT_APP_API_KEY}`

