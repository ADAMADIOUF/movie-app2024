import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const SearchProduct = () => {
  const navigate = useNavigate()
  const { keyword: urlKeyword } = useParams()
  const [keyword, setKeyword] = useState(urlKeyword || '')

  const submitHandler = (e) => {
    e.preventDefault()
    if (keyword.trim()) {
      setKeyword('')
      navigate(`/search/${keyword}`)
    } else {
      navigate('/')
    }
  }

  return (
    <form onSubmit={submitHandler} className='search'>
      <input
        type='text'
        name='q'
        onChange={(e) => setKeyword(e.target.value)}
        value={keyword}
        placeholder='Search Products...'
        style={{ marginRight: '10px', marginLeft: '20px' }}
      />
      <button
        type='submit'
        style={{
          padding: '10px 20px',
          backgroundColor: 'lightgreen',
          border: 'none',
          cursor: 'pointer',
        }}
      >
        Search
      </button>
    </form>
  )
}

export default SearchProduct
