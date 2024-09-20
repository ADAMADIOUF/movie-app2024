import React from 'react'
import { useGetMoviesQuery } from '../slices/movieApiSlice'
import Movies from './Movies'
import { useParams } from 'react-router-dom'

const Home = () => {
  const { keyword } = useParams()
  const { data, isLoading, error } = useGetMoviesQuery({
    keyword: keyword || '', 
  })

  if (isLoading) {
    return <div>Loading movies...</div>
  }

  if (error) {
    return <div>Error: {error.message}</div>
  }

  return (
    <div>
      {keyword ? (
        <h1 style={{ textAlign: 'center', marginTop: '5rem' }}>
          Search Results for "{keyword}"
        </h1>
      ) : (
        <h1 style={{ textAlign: 'center', marginTop: '5rem' }}>
          Popular Movies
        </h1>
      )}

      {data && data.results.length > 0 ? (
        <div className='container-movie'>
          {data.results.map((movie) => (
            <Movies movie={movie} key={movie.id} {...movie} />
          ))}
        </div>
      ) : (
        <div>No movies found.</div>
      )}
    </div>
  )
}

export default Home
