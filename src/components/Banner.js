import React, { useState, useEffect } from 'react'
import requests from '../request'
import axios from '../axios'
import './Banner.css'

const baseURL = 'https://image.tmdb.org/t/p/original/'

function Banner() {
  const [movie, setMovies] = useState([])

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals)
      setMovies(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ],
      )
    }

    fetchData()
  }, [])

  console.log(movie)

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + '...' : str
  }

  return (
    <header
      className="banner"
      style={{
        backgroundSize: 'cover',
        backgroundImage: `url(
            ${baseURL}${movie?.backdrop_path}
        )`,
        backgroundPosition: 'center center',
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className="banner__btns">
          <button className="banner__btn">Play</button>
          <button className="banner__btn">My List</button>
        </div>
        <h1 className="banner__description">
          {truncate(movie?.overview, 200)}
        </h1>
      </div>
      <div className="banner--fade_bottom"></div>
    </header>
  )
}

export default Banner
