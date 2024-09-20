import React from 'react'
import { useParams } from 'react-router-dom'
import { useGetSingleMovieQuery } from '../slices/movieApiSlice'

const SingleMovie = () => {
  const { id: movieId } = useParams()
  const { data, isLoading, error } = useGetSingleMovieQuery(movieId)


  if (isLoading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>Error loading movie: {error.message}</div>
  }

  if (!data) {
    return <div>No data found.</div>
  }

  return (
    <div className='single-movie'>
      <div>
        <img
          src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
          alt={data.title}
        />
      </div>
      <div>
        <h2>{data.title}</h2>
        <path>{data.overview}</path>
        <div className="single-action">
         {data.genres.map((genre)=>{
          return(
           <button key={genre.id} className='btn'>
            {genre.name}
           </button>
          )
         })}
        </div>
      </div>
    </div>
  )
}

export default SingleMovie
