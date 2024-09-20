import { BASE_URL, MOVIE_URL, SINGLE_MOVIE_URL } from '../constants'
import { apiSlice } from './apiSlice'

export const movieApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getMovies: builder.query({
      query: ({ keyword = '' }) => {
        
        return keyword
          ? `${BASE_URL}/search/movie?query=${keyword}`
          : `${BASE_URL}/movie/popular`
      },
      providesTags: ['Movies'],
      keepUnusedDataFor: 5,
    }),

    getSingleMovie: builder.query({
      query: (movieId) => SINGLE_MOVIE_URL(movieId), // Dynamic URL for a single movie
      providesTags: ['Movies'],
      keepUnusedDataFor: 5,
    }),
  }),
})

export const { useGetMoviesQuery, useGetSingleMovieQuery } = movieApiSlice
