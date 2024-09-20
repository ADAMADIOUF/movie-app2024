import React from 'react'
import { Link } from 'react-router-dom'

const Movies = ({ id, title, poster_path, overview }) => {
  const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500'
  return (
    <div className='movie-details'>
      <Link to={`/movie/${id}`}><img src={`${IMAGE_BASE_URL}${poster_path}`} alt='' className='img' /></Link>
      <h3>{title}</h3>
      <p>{overview}</p>
    </div>
  )
}

export default Movies
