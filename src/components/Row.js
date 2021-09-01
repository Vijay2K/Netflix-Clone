import React, { useState, useEffect } from 'react'
import axios from '../axios'
import Youtube from 'react-youtube'
import movieTrailer from 'movie-trailer'
import './Row.css'

const baseURL = 'https://image.tmdb.org/t/p/original/'

const Row = ({ title, fetchUrl, isLargerRow }) => {
  const [movies, setMovies] = useState([])
  const [trailerUrl, setTrailerUrl] = useState('')

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl)
      // console.log(request.data.results)
      setMovies(request.data.results)
      return request
    }

    fetchData()
  }, [fetchUrl])

  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  }

  const handlerClickMovies = (movie) => {
    if (trailerUrl) {
      setTrailerUrl('')
    } else {
      movieTrailer(movie?.name || '')
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search)
          setTrailerUrl(urlParams.get('v'))
        })
        .catch((err) => {
          console.error(err)
        })
    }
  }

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row__posters">
        {movies.map((movie) => (
          <img
            key={movie.id}
            onClick={() => handlerClickMovies(movie)}
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
      {trailerUrl && <Youtube videoId={trailerUrl} opts={opts} />}
    </div>
  )
}

export default Row
