import React, { useState, useEffect } from 'react'
import './Row.css'
import axios from '../axios'

const baseURL = 'https://image.tmdb.org/t/p/original/'

const Row = ({ title, fetchUrl, isLargerRow }) => {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl)
      // console.log(request.data.results)
      setMovies(request.data.results)
      return request
    }

    fetchData()
  }, [fetchUrl])

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row__posters">
        {movies.map((movie) => (
          <img
            key={movie.id}
            className={`${
              isLargerRow === false
                ? 'row__posters-img'
                : 'row__posters-larger_img'
            }`}
            src={`${baseURL}${
              isLargerRow === false ? movie.backdrop_path : movie.poster_path
            }`}
            alt={movie.name}
          />
        ))}
      </div>
    </div>
  )
}

export default Row
