import React from 'react'
import Row from './components/Row'
import requests from './request'
import './App.css'

function App() {
  return (
    <div className="App">
      <Row
        title="NETFLIX ORIGINALS"
        isLargeRow={true}
        fetchUrl={requests.fetchNetflixOriginals}
      />
      <Row
        title="Trending Now"
        fetchUrl={requests.fetchTrending}
        isLargerRow={false}
      />
      <Row
        title="Top rated"
        fetchUrl={requests.fetchTopRated}
        isLargerRow={false}
      />
      <Row
        title="Action Movies"
        fetchUrl={requests.fetchActionMovies}
        isLargerRow={false}
      />
      <Row
        title="Comedy Movies"
        fetchUrl={requests.fetchComedyMovies}
        isLargerRow={false}
      />
      <Row
        title="Horror Movies"
        fetchUrl={requests.fetchHorrorMovies}
        isLargerRow={false}
      />
      <Row
        title="Romance Movies"
        fetchUrl={requests.fetchRomanceMovie}
        isLargerRow={false}
      />
      <Row
        title="Documentaries"
        fetchUrl={requests.fetchDocumentries}
        isLargerRow={false}
      />
    </div>
  )
}

export default App
